Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given the user sees the list of 32 events
    When the user opens the app
    Then the user should not see the event details by default

  Scenario: User can expand an event to see details
    Given the user sees the complete list of events by default
    When the user clicks on an event
    Then the event details should be shown

  Scenario: User can collapse an event to hide details
    Given the event details are visible
    When the user clicks on the event hide details button
    Then the event details should be hidden