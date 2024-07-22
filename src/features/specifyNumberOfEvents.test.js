import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppComponent;
  let AppDOM;
  let EventListDOM;

  const initializeApp = () => {
    AppComponent = render(<App />);
    AppDOM = AppComponent.container.firstChild;
    EventListDOM = AppDOM.querySelector('#event-list');
  };

  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
    given('the user hasn’t specified a number of events', () => {
      // No specific action needed
    });

    when('the user opens the app', () => {
      initializeApp();
    });

    then('the user should see 32 events by default', async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed', ({ given, when, then }) => {
    given('the user opens the app', () => {
      initializeApp();
    });

    when('the user inputs a number of events to be displayed', async () => {
      const user = userEvent.setup();
      const numberInput = AppDOM.querySelector('#number-of-events-input');
      await user.clear(numberInput);
      await user.type(numberInput, '10');
    });

    then('the user should see that number of events', async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      });
    });
  });
});
