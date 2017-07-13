
# Use TestNG within IDE (IntelliJ/ Eclipse)

This runs Cucumber features using Cucumber's TestNG. TestRunner extends AbstractTestNGCucumberTests to run execute tests.
Within the IDE, run "TestRunner"


## Use Maven
Webdriver and associated cucumber dependencies have been added via maven. In the root folder that has the POM file,
Open a command window and run:

    mvn test

Test configuration expects feature files to be located at "src/test/resources/features"
Test configuration is configured for only Chrome 
Chrome Driver should be installed
- https://sites.google.com/a/chromium.org/chromedriver/downloads

Test Reports
/cucumber-java-nextech-calculator/reports/test-report/index.html