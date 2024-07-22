import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    // Scenario 1
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user sees the list of 32 events', () => {
            AppComponent = render(<App />);
        });

        when('the user opens the app', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the user should not see the event details by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.event .details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    // Scenario 2
    test('User can expand an event to see details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user sees the complete list of events by default', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when('the user clicks on an event', async () => {
            const showDetails = EventComponent.queryByText('show details');
            const user = userEvent.setup();
            await user.click(showDetails);
        });

        then('the event details should be shown', () => {
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
        });
    });

    // Scenario 3
    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the event details are visible', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const user = userEvent.setup();
            await user.click(EventComponent.queryByText('show details'));
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
        });

        when('the user clicks on the event hide details button', async () => {
            const hideDetails = EventComponent.queryByText('hide details');
            const user = userEvent.setup();
            await user.click(hideDetails);
        });

        then('the event details should be hidden', () => {
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
        });
    });
});
