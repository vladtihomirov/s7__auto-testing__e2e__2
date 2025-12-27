Feature: Slider value set

  Background:
    Given User is on Slider page

  Scenario Outline: Drag slider to certain value
    When I set the slider to <value>
    Then the slider value should be "<value>"

    Examples:
      | value |
      | 25    |
      | 50    |


