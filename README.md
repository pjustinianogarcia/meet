# Meet App
Meet App is a React application designed to help users discover and manage events. It features a dynamic interface to search events by city, filter the number of events displayed, and visualize event data through charts.

## Features
City Search: Filter events by city.
Event List: Display a list of events based on selected city and number of events.
Charts: View charts representing event genres and city-specific events.
Alerts: Display informational, error, and warning alerts.

## Technologies
React
React Bootstrap
CSS
Custom Hooks
Charts

# Installation
To set up the project locally, follow these steps:

1. Clone the repository:

git clone <repository-url>

2. Navigate to the project directory:

cd <project-directory>

3. Install dependencies:

npm install

4. Start the development server:

npm start

5. Open the app in your browser:

Visit http://localhost:3000 to see the app in action.

# Usage

City Search: Use the search input to select a city and view events specific to that location.
Number of Events: Adjust the number of events displayed using the provided controls.
Charts: View the Event Genres Chart and City Events Chart to analyze event data visually.

# API

The app fetches event data from an API endpoint. Ensure that the API is running and accessible.

API Endpoint: https://example-api.com/events

# Alerts

The application supports the following alerts:

Info Alert: Display informational messages.
Error Alert: Display error messages.
Warning Alert: Display warnings, such as offline status.

# Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub if you have suggestions or improvements.

# meet
# Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# test scenarios
Feature 2: Show/Hide Event Details
Scenario 1: An event element is collapsed by default.
Scenario 2: User can expand an event to see details.
Scenario 3: User can collapse an event to hide details.
As a [user],
I should be able to [not see event details by default]
So that [i can decide to view details or not]

As a [user],
I should be able to [click on an event to view its details]
So that [i can view event details]

As a [user],
I should be able to [click on an event to collapse its details]
So that [i can not longer see event details]

Feature 3: Specify Number of Events
Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
Scenario 2: User can change the number of events displayed.

As a [user],
I should be able to [see 32 events by default when i don't input a number of events]
So that [i can see 32 events by default]

As a [user],
I should be able to [input a number to change the amount of events displayed]
So that [i can modify the amounts of events displayed]

Feature 4: Use the App When Offline
Scenario 1: Show cached data when there’s no internet connection.
Scenario 2: Show error when user changes search settings (city, number of events).

As a [user],
I should be able to [see cached data]
So that [I can still view event information even without an internet connection]


As a [user],
I should be able to [see an error message when I change my search settings without an internet connection]
So that [I become aware that my search settings can not be modified without an internet connection]

Feature 5: Add an App Shortcut to the Home Screen
Scenario 1: User can install the meet app as a shortcut on their device home screen.

As a [user],
I should be able to [install the app's icon as a shortcut on my device's home screen]
So that [I can access the app from my home screen using the app's shortcut]

Feature 6: Display Charts Visualizing Event Details
Scenario 1: Show a chart with the number of upcoming events in each city.

As a [user],
I should be able to [see a chart with the number of upcoming events in each city]
So that [I can see the number of upcoming events in different cities.]
