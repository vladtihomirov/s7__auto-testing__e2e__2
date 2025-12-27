Feature: Tool Tips display correct tooltip ids on hover

  Background:
    Given User is on ToolTips page

  Scenario: Button tooltip appears with correct id
    When I hover the tool tip button
    Then the tool tip for button should have id "buttonToolTip"
    And the tooltip "buttonToolTip" should be visible

  Scenario: Text field tooltip appears with correct id
    When I hover the tool tip text field
    Then the tool tip for text field should have id "textFieldToolTip"
    And the tooltip "textFieldToolTip" should be visible

  Scenario: Link "Contrary" tooltip appears with correct id
    When I hover the link "Contrary"
    Then the tool tip for link "Contrary" should have id "contraryTexToolTip"
    And the tooltip "contraryTexToolTip" should be visible

  Scenario: Link "1.10.32" tooltip appears with correct id
    When I hover the link "1.10.32"
    Then the tool tip for link "1.10.32" should have id "sectionToolTip"
    And the tooltip "sectionToolTip" should be visible


