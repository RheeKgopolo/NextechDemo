Feature: Verify Calculator operations: Subtracts

  @CC-001_04
  Scenario Outline: Verify Subtract
    Given I am on the calculator page 
    When click on clear
    And I subtract <N1> and <N2>
    Then I should see <Result>
    And I close browser

    Examples: 
      | N1     | N2        | Result   |
      | 234823 | -23094823 | 23329646 |
