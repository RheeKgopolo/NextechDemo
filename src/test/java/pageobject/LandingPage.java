package pageobject;

/**
 * Created by rkgopolo on 7/13/17.
 */
import org.openqa.selenium.WebDriver;

public class LandingPage extends AbstractPage {

    public LandingPage(WebDriver driver) {
        super(driver);

    }

    public CalculatorPage navigateTocalculator(){
        driver.navigate().to("http://web2.0calc.com/");

        return new CalculatorPage(driver);
    }

}