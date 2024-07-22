Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user hasn’t specified a number of events
    When the user opens the app
    Then the user should see 32 events by default

  Scenario: User can change the number of events displayed
    Given the user opens the app
    When the user inputs a number of events to be displayed
    Then the user should see that number of events
