Feature: Verify Calculator operations: Addition

  @CC-001_03
  Scenario Outline: Verify Addition
    Given I am on the calculator page
    When click on clear
    And I add <N1> and <N2>
    Then I should see <Result>
    And I close browser

    Examples:
      | N1      | N2     | Result |
      | -234823 | 345345 | 111111 |