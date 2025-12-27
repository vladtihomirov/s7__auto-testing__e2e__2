Feature: Form validations and submission

  Background:
    Given User is on PracticeForm page

  # -----------------------------
  # Required fields validations
  # -----------------------------
  Scenario: Validation - Missing first name
    When I fill the last name in form with "Doe"
    And I select gender as Male
    And I fill the mobile number in form with "1234567890"
    And I click the submit button
    Then the field "firstName" should be invalid
    And the form submission should not be successful

  Scenario: Validation - Missing last name
    When I fill the first name in form with "John"
    And I select gender as Male
    And I fill the mobile number in form with "1234567890"
    And I click the submit button
    Then the field "lastName" should be invalid
    And the form submission should not be successful

  Scenario: Validation - Missing gender
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I fill the mobile number in form with "1234567890"
    And I click the submit button
    Then the form submission should not be successful

  Scenario: Validation - Missing mobile number
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I select gender as Male
    And I click the submit button
    Then the field "userNumber" should be invalid
    And the form submission should not be successful

  # -----------------------------
  # Invalid email formats
  # -----------------------------
  Scenario Outline: Invalid email format
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I select gender as Male
    And I fill the mobile number in form with "1234567890"
    And I fill the email with "<email>"
    And I click the submit button
    Then the field "userEmail" should be invalid
    And the form submission should not be successful

    Examples:
      | email           |
      | invalid         |
      | john@           |
      | john@doe        |

  # -----------------------------
  # Invalid mobile numbers
  # -----------------------------
  Scenario Outline: Invalid mobile number
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I select gender as Male
    And I fill the mobile number in form with "<mobile>"
    And I click the submit button
    Then the field "userNumber" should be invalid
    And the form submission should not be successful

    Examples:
      | mobile     |
      | 123456789  |
      | 12345abcde |

  Scenario: Mobile number input is limited to 10 digits
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I select gender as Male
    And I fill the mobile number in form with "12345678901"
    And I click the submit button
    Then the mobile number field should contain "1234567890"
    And the form submission should be successful

  # -----------------------------
  # Gender options and exclusivity
  # -----------------------------
  Scenario Outline: All gender options can be selected
    When I select gender as <gender>
    Then gender should be selected as <gender>

    Examples:
      | gender |
      | Male   |
      | Female |
      | Other  |

  Scenario: Gender selection is mutually exclusive
    When I select gender as Male
    Then gender should be selected as Male
    And gender should not be selected as Female
    And gender should not be selected as Other
    When I select gender as Female
    Then gender should be selected as Female
    And gender should not be selected as Male
    And gender should not be selected as Other

  # -----------------------------
  # Hobbies selection
  # -----------------------------
  Scenario Outline: Form with single hobby
    When I select hobby as <hobby>
    Then hobby <hobby> should be selected

    Examples:
      | hobby   |
      | Sports  |
      | Reading |
      | Music   |

  Scenario: Form with multiple hobbies
    When I select hobby as Sports
    And I select hobby as Reading
    And I select hobby as Music
    Then hobby Sports should be selected
    And hobby Reading should be selected
    And hobby Music should be selected

  Scenario: Any hobbies can be deselected
    When I select hobby as Sports
    Then hobby Sports should be selected
    When I deselect hobby as Sports
    Then hobby Sports should not be selected

  # -----------------------------
  # Echo values after filling
  # -----------------------------
  Scenario Outline: Field values after filling
    When I fill the <field> in form with "<value>"
    Then the <field> field should contain "<value>"

    Examples:
      | field           | value            |
      | first name      | John             |
      | last name       | Doe              |
      | email           | john@doe.com     |
      | mobile number   | 1234567890       |
      | date of birth   | 01 Jan 2000      |
      | subjects        | Maths            |
      | current address | 221B Baker Street|

  # -----------------------------
  # Successful submissions
  # -----------------------------
  Scenario: Form with minimal required fields
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I select gender as Male
    And I fill the mobile number in form with "1234567890"
    And I click the submit button
    Then the form submission should be successful
    And the submission modal should be visible

  Scenario: Form with all valid fields
    When I fill the first name in form with "John"
    And I fill the last name in form with "Doe"
    And I fill the email with "john.doe@example.com"
    And I select gender as Male
    And I fill the mobile number in form with "1234567890"
    And I fill the date of birth in form with "01 Jan 2000"
    And I fill the subjects in form with "Maths"
    And I select hobby as Sports
    And I fill the current address in form with "221B Baker Street"
    And I click the submit button
    Then the form submission should be successful
    And the submission modal should be visible
