Feature: Learning Selenium

Scenario Outline: To validate GET method
Given the user hits the url for "employees" API with "GET" method
Then validate the response code <responseCode>


Examples:
|responseCode|
|200|

@TC1
Scenario Outline: To validate POST method
Given the user hits the url for "create" API with "POST" method
Then validate the response code <responseCode>

Examples:
|responseCode|
|200|

