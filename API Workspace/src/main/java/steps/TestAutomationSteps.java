package steps;

import apis.TestAutomationLogic;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;

public class TestAutomationSteps {
	Response response;
	TestAutomationLogic testAuto=new TestAutomationLogic();
	
	@Given("^the user hits the url for \"([^\"]*)\" API with \"([^\"]*)\" method$")
	public void the_user_hits_the_url_for_API_with_method(String api, String method) throws Throwable {
		testAuto.url();
		response=testAuto.sendRequest(api,method);
		 
	}

	@Then("^validate the response code (\\d+)$")
	public void validate_the_response_code(int statusCode) throws Throwable {
		testAuto.validateResponse(statusCode,response);
	}

}
