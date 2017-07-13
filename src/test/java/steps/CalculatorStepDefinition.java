package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageobject.CalculatorPage;
import pageobject.LandingPage;

import java.util.concurrent.TimeUnit;

/**
 * Created by rkgopolo on 7/13/17.
 */


public class CalculatorStepDefinition {

    WebDriver driver = new ChromeDriver();
    LandingPage landingPage;
    CalculatorPage calculaterPage;


    @Before
    public void setUp(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Given("^I am on the calculator page$")
    public void i_am_on_the_calculator_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        landingPage = new LandingPage(driver);
        landingPage.navigateToCalculatorPage();
    }

    @When("^click on clear$")
    public void click_on_clear() throws Throwable {
        calculaterPage = landingPage.navigateTocalculator();
        calculaterPage.clearInput();
    }

    @When("^I add -(\\d+) and (\\d+)$")
    public void i_add_and(int addnumber1, int addnumber2) throws Throwable {
        calculaterPage.addNumber(addnumber1, addnumber2);
        calculaterPage.SubmitResults();
    }


    @When("^I divide (\\d+) and (\\d+)$")
    public void i_divide_and(int divnumber1, int divnumber2) throws Throwable {
        calculaterPage.divideNumber(divnumber1, divnumber2);
        calculaterPage.SubmitResults();
    }

    @When("^I multiply (\\d+) and (\\d+)$")
    public void i_multiply_and(int mulnumber1, int mulnumber2) throws Throwable {
        calculaterPage.multiplyNumber(mulnumber1, mulnumber2);
        calculaterPage.SubmitResults();
    }

    @When("^I subtract (\\d+) and -(\\d+)$")
    public void i_subtract_and(int subnumber1, int subnumber2) throws Throwable {
        calculaterPage.subtractNumber(subnumber1, subnumber2);
        calculaterPage.SubmitResults();
    }

    @Then("^I should see (\\d+)$")
    public void i_should_see(int compareResult) throws Throwable {

        //then get the final result output
        calculaterPage.CheckResults(compareResult);
    }


    @Then("^I close browser$")
    public void i_close_browser() throws Throwable {
        calculaterPage.closeBrowser();
    }

    @After public void Teardown(){
        driver.quit();
    }

}
