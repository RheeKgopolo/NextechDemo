Feature: Verify Calculator operations: Division

  @CC-001_02
  Scenario Outline: Verify Division
    Given I am on the calculator page 
    When click on clear
    And I divide <N1> and <N2>
    Then I should see <Result>
    And I close browser

    Examples: 
      | N1   | N2  | Result |
      | 4000 | 200 |     20 |
