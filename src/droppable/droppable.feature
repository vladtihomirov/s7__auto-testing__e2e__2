Feature: Drag and Drop interaction

  Background:
    Given User is on Droppable page

  Scenario: Perform drag and drop
    When I drag the draggable to the drop area
    Then the drop area should display "Dropped!"


