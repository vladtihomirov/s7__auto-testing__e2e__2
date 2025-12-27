Feature: Select Menu selections

  Background:
    Given User is on SelectMenu page

  Scenario: Select specified options in all dropdowns
    When I select value as "Group 2, option 1"
    And I select one as "Other"
    And I select old style color as "Green"
    And I multi select colors: Black, Blue
    Then the selected value should be "Group 2, option 1"
    And the selected one should be "Other"
    And the old style selected color should be "Green"
    And the multiselect should contain: Black, Blue


