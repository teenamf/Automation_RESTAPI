package apis;

import java.io.File;
import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Assert;

import POJO.CreateEmployee;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import util.Config;

public class TestAutomationLogic {
	String baseUrl;
	Config conf=new Config();
	ObjectMapper objMapper = new ObjectMapper();
	File stringJSON=new File("src\\main\\resources\\Request\\CreateEmployee.json");
	
	public String url() {
		baseUrl = conf.retrievebaseUrl();
		return baseUrl;

	}

	public Response sendRequest(String api, String method) throws JsonGenerationException, JsonMappingException, JsonParseException, IOException  {
		if(method.equalsIgnoreCase("GET"))
			return RestAssured.when().get(baseUrl.concat(api));
		else
		{
			CreateEmployee creEmpRequest;
			creEmpRequest=objMapper.readValue(stringJSON, CreateEmployee.class);
			creEmpRequest.setName("Teena");
			creEmpRequest.setSalary(5000);
			creEmpRequest.setAge(21);
			return RestAssured.given().log().all().body(objMapper.writeValueAsString(creEmpRequest)).when().post(baseUrl.concat(api)).then().log().all().extract().response();
			
		
		}
	}

	public void validateResponse(int statusCode, Response response) {
		System.out.println(response.getStatusCode());
		Assert.assertEquals(statusCode,response.getStatusCode());
		
		
	}
	


}
