Feature: Text Box submission echoes entered data

  Background:
    Given User is on TextBox page

  Scenario: Submit form and check shown values
    When I fill the full name with "John Doe"
    And I fill the email with "john.doe@example.com"
    And I fill the current address with "221B Baker Street"
    And I fill the permanent address with "Baker Street 221B"
    And I click the submit button
    Then the output should be visible
    And the output name should contain "John Doe"
    And the output email should contain "john.doe@example.com"
    And the output current address should contain "221B Baker Street"
    And the output permanent address should contain "Baker Street 221B"

  Scenario: Submit some values
    When I fill the full name with "John Doe"
    And I fill the current address with "221B Baker Street"
    And I click the submit button
    Then the output should be visible
    And the output name should contain "John Doe"
    And the output current address should contain "221B Baker Street"

  Scenario Outline: Invalid email prevents output and marks field
    When I fill the email with "<email>"
    And I click the submit button
    Then the email should be invalid
    And the output should not be visible

    Examples:
      | email     |
      | invalid   |
      | john@     |
      | john@doe  |


