Feature: Radio Buttons selection

  Background:
    Given User is on RadioButton page

  Scenario Outline: Select radio and verify result
    When I select radio "<option>"
    Then radio result should display "<option>"

    Examples:
      | option     |
      | Yes        |
      | Impressive |


