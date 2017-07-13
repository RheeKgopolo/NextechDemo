package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by rkgopolo on 7/13/17.
 */


public class Hook {

    @Before
    public void InitializeTest(){

        //Todo

    }

    @After
    public void TearDownTest(Scenario scenario){
        if(scenario.isFailed()){

            //ToDo
        }

    }
}
