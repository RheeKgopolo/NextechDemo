Feature: Verify Calculator operations: Multiplication

  @CC-001_01
  Scenario Outline: Verify Multiplication
    Given I am on the calculator page 
    When click on clear
    And I multiply <N1> and <N2>
    Then I should see <Result>
    And I close browser

    Examples: 
      | N1  | N2  | Result |
      | 423 | 200 |  84600 |
