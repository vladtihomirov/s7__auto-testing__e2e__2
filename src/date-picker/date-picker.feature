Feature: Date Picker selection

  Background:
    Given User is on DatePicker page

  Scenario: Select a specific date
    When I set the date to "09/25/2025"
    Then the date input should be "09/25/2025"


