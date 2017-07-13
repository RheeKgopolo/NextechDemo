package pageobject;

/**
 * Created by rkgopolo on 7/13/17.
 */
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.junit.Assert;




public class CalculatorPage extends AbstractPage{

    public CalculatorPage(WebDriver driver) {
        super(driver);

    }

    public CalculatorPage multiplyNumber(int num1, int num2){

        //enter first number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num1));

        //set operator
        WebElement multiplybtn = driver.findElement(By.xpath("//*[@id='BtnMult']"));
        multiplybtn.click();

        //enter second number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num2));

        return new CalculatorPage(driver);


    }

    public CalculatorPage addNumber(int num1, int num2){

        //enter first number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num1));

        //set operator
        WebElement multiplybtn = driver.findElement(By.xpath("//*[@id='BtnPlus']"));
        multiplybtn.click();

        //enter second number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num2));

        return new CalculatorPage(driver);


    }

    public CalculatorPage subtractNumber(int num1, int num2){

        //enter first number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num1));

        //set operator
        WebElement multiplybtn = driver.findElement(By.xpath("//*[@id='BtnMinus']"));
        multiplybtn.click();

        //enter second number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num2));

        return new CalculatorPage(driver);


    }

    public CalculatorPage divideNumber(int num1, int num2){

        //enter first number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num1));

        //set operator
        WebElement multiplybtn = driver.findElement(By.xpath("//*[@id='BtnDiv']"));
        multiplybtn.click();

        //enter second number
        driver.findElement(By.id("input")).sendKeys(String.valueOf(num2));

        return new CalculatorPage(driver);


    }

    public CalculatorPage clearInput(){

        WebElement acceptCookiesbtn = driver.findElement(By.xpath("//*[@id='cookiesmsg']/form/button"));
        acceptCookiesbtn.click();

        driver.findElement(By.id("input")).sendKeys(String.valueOf("1"));
        WebElement clearbtn = driver.findElement(By.xpath("//*[@id='BtnClear']"));
        clearbtn.click();


        return new CalculatorPage(driver);

    }

    public CalculatorPage CheckResults(int resultCheck){

        SubmitResults();
        //get result
        String results = driver.findElement(By.id("input")).getAttribute("value");

        Assert.assertEquals(resultCheck, results);

        return new CalculatorPage(driver);


    }

    public CalculatorPage SubmitResults(){

        WebElement calculatorOptions = driver.findElement(By.xpath("//*[@id='inputhelper']"));

        WebElement equalsbtn = driver.findElement(By.xpath("//*[@id='BtnCalc']"));
        equalsbtn.sendKeys(Keys.ENTER);

        equalsbtn.click();

        return new CalculatorPage(driver);


    }



}
