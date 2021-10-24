$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DummyAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Learning Selenium",
  "description": "",
  "id": "learning-selenium",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "To validate POST method",
  "description": "",
  "id": "learning-selenium;to-validate-post-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user hits the url for \"create\" API with \"POST\" method",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "validate the response code \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "learning-selenium;to-validate-post-method;",
  "rows": [
    {
      "cells": [
        "responseCode"
      ],
      "line": 18,
      "id": "learning-selenium;to-validate-post-method;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 19,
      "id": "learning-selenium;to-validate-post-method;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "To validate POST method",
  "description": "",
  "id": "learning-selenium;to-validate-post-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user hits the url for \"create\" API with \"POST\" method",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "validate the response code 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 27
    },
    {
      "val": "POST",
      "offset": 45
    }
  ],
  "location": "TestAutomationSteps.the_user_hits_the_url_for_API_with_method(String,String)"
});
formatter.result({
  "duration": 3045685601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "TestAutomationSteps.validate_the_response_code(int)"
});
formatter.result({
  "duration": 2123200,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c429\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat apis.TestAutomationLogic.validateResponse(TestAutomationLogic.java:52)\r\n\tat steps.TestAutomationSteps.validate_the_response_code(TestAutomationSteps.java:21)\r\n\tat ✽.Then validate the response code 200(DummyAPI.feature:15)\r\n",
  "status": "failed"
});
});