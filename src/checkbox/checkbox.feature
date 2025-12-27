Feature: Checkboxes selection

  Background:
    Given User is on CheckBox page

  Scenario Outline: Select checkbox and verify it's checked
    When I expand all checkboxes
    And I select checkbox "<label>"
    Then checkbox "<label>" should be checked

    Examples:
      | label          |
      | Notes          |
      | React          |
      | Angular        |
      | Downloads      |
      | Word File.doc  |


