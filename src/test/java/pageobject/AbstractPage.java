package pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by rkgopolo on 7/13/17.
 */
public class AbstractPage {

    protected WebDriver driver;

    public AbstractPage(WebDriver driver) {
        this.driver = driver;

    }

    public LandingPage navigateToCalculatorPage(){
        driver.navigate().to("http://web2.0calc.com/");
        return new LandingPage (driver);
    }

    public static WebElement FindElement(WebDriver driver, By by, int timeoutInSeconds)
    {
        WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
        wait.until( ExpectedConditions.presenceOfElementLocated(by) );
        return driver.findElement(by);
    }

    public void closeBrowser(){

        driver.close();
    }
}
