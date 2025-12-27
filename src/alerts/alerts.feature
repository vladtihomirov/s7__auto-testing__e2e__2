Feature: Alerts

  Background:
    Given User is on Alerts page

  Scenario: Simple button
    When I click the simple alert button
    Then I should see an alert with text "You clicked a button"

  Scenario: Timer button (5s timer)
    When I click the timer alert button
    Then I should not see an alert
    When I wait for 5s
    Then I should see an alert with text "This alert appeared after 5 seconds"

  Scenario Outline: Confirm button
    When I click the confirm alert button with <action>
    Then I should see an alert with text "Do you confirm action?"
    Then Confirmation message should have text "<displayText>"
    Examples:
      | action | displayText         |
      | accept | You selected Ok     |
      | deny   | You selected Cancel |

  Scenario Outline: Prompt button
    When I click the prompt alert button, write "<text>" and accept
    Then Prompt message should have text "You entered <text>"
    Examples:
      | text        |
      | TEST PROMPT |
      | 12345454542 |
