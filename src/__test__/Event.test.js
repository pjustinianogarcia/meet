// src/__tests__/Event.test.js

import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data'; 



describe('<Event /> component', () => {
    let EventComponent;
    let event;

    beforeEach(() => {
        event = mockData && mockData[0];
        EventComponent = render(<Event event={event} />);
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(new Date(event.created).toUTCString())).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
    });

    test('renders event show details button', () => {
        const button = EventComponent.container.querySelector('.details-btn');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('show details');
    });

    test('shows event details when show details button is clicked', () => {
        const button = EventComponent.container.querySelector('.details-btn');
        fireEvent.click(button);
        const escapedDescription = event.description.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\n/g, '\\s*');
        expect(EventComponent.queryByText(new RegExp(escapedDescription))).toBeInTheDocument();
        expect(button).toHaveTextContent('hide details');
    });

    test('hides event details when hide details button is clicked', () => {
        const button = EventComponent.container.querySelector('.details-btn');
        fireEvent.click(button); // Show details first
        fireEvent.click(button); // Hide details
        const escapedDescription = event.description.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\n/g, '\\s*');
        expect(EventComponent.queryByText(new RegExp(escapedDescription))).not.toBeInTheDocument();
        expect(button).toHaveTextContent('show details');
    });

 
});