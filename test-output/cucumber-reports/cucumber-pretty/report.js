$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 2,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@APITest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I get the default list of users for on page 1",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I get the list of all users within every page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see total users count equals the number of user ids",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "ApiStepDefinition.iGetTheDefaultListofusersforonpage(String)"
});
formatter.result({
  "duration": 1565621829,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.iGetTheListOfAllUsers()"
});
formatter.result({
  "duration": 511803384,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.iShouldMatchTotalCount()"
});
formatter.result({
  "duration": 18567,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I should see the following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "Emma"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "emma.wong@reqres.in"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "ApiStepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 131007349,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.IShouldSeeFollowingUserData(String,String\u003e)"
});
formatter.result({
  "duration": 15080425,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 25
    }
  ],
  "location": "ApiStepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 153847014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "ApiStepDefinition.iReceiveErrorCodeInResponse(int)"
});
formatter.result({
  "duration": 739696,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I create a user with following \u003cName\u003e \u003cJob\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 28,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 29,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 30,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APITest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I create a user with following Peter Manager",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 31
    },
    {
      "val": "Manager",
      "offset": 37
    }
  ],
  "location": "ApiStepDefinition.iCreateUserWithFollowing(String,String)"
});
formatter.result({
  "duration": 186514372,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.iReceiveErrorCodeInResponse(String\u003e)"
});
formatter.result({
  "duration": 30089696,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APITest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I create a user with following Liza Sales",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 31
    },
    {
      "val": "Sales",
      "offset": 36
    }
  ],
  "location": "ApiStepDefinition.iCreateUserWithFollowing(String,String)"
});
formatter.result({
  "duration": 312883016,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.iReceiveErrorCodeInResponse(String\u003e)"
});
formatter.result({
  "duration": 21457303,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#In given step it should be \u0027successfully\u0027 instead of \u0027unsuccessfully\u0027"
    },
    {
      "line": 33,
      "value": "#Scenario: LOGIN - SUCCESSFUL by a user"
    },
    {
      "line": 34,
      "value": "#  Given I login unsuccessfully with the following data"
    },
    {
      "line": 35,
      "value": "#    | Email              | Password   |"
    },
    {
      "line": 36,
      "value": "#    | eve.holt@reqres.in | cityslicka |"
    },
    {
      "line": 37,
      "value": "#  Then I should get a response code of 200"
    },
    {
      "line": 39,
      "value": "#new one created as same scenario for previous"
    }
  ],
  "line": 40,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I login successfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "eve.holt@reqres.in"
      ],
      "line": 42
    },
    {
      "cells": [
        "Password",
        "cityslicka"
      ],
      "line": 43
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefinition.i_login_successfully_with_the_following_data(String,String\u003e)"
});
formatter.result({
  "duration": 192541989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "ApiStepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "duration": 85934,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I login unsuccessfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "eve.holt@reqres.in"
      ],
      "line": 48
    },
    {
      "cells": [
        "Password",
        ""
      ],
      "line": 49
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I should get a response code of 400",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I should see the following response message:",
  "rows": [
    {
      "cells": [
        "error",
        "Missing password"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefinition.iLoginSuccesfullyWithFollowingData(String,String\u003e)"
});
formatter.result({
  "duration": 189676166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "ApiStepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "duration": 53917,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.iShouldSeeTheFollowingResponseMessage(String,String\u003e)"
});
formatter.result({
  "duration": 6029581,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Should see the list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-the-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "I wait for the user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefinition.iWaitForUserListToLoad()"
});
formatter.result({
  "duration": 3270593002,
  "status": "passed"
});
formatter.match({
  "location": "ApiStepDefinition.iShouldSeeThatEveryUserHasAUniqueID()"
});
formatter.result({
  "duration": 9677641,
  "status": "passed"
});
formatter.uri("src/test/java/UI-Test.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout items in the basket",
  "description": "Please use home page of https://www.saucedemo.com/",
  "id": "checkout-items-in-the-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UITest"
    }
  ]
});
formatter.before({
  "duration": 2084835190,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Check item total cost and tax",
  "description": "",
  "id": "checkout-items-in-the-basket;check-item-total-cost-and-tax",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login in with the following details",
  "rows": [
    {
      "cells": [
        "userName",
        "standard_user"
      ],
      "line": 8
    },
    {
      "cells": [
        "Password",
        "secret_sauce"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I add the following items to the basket",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 14
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I  should see 4 items added to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that the QTY count for each item should be 1",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I remove the following item:",
  "rows": [
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I  should see 3 items added to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \"FirstName\" for First Name",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I type \"LastName\" for Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I type \"EC1A 9JU\" for ZIP/Postal Code",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the CONTINUE button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Item total will be equal to the total of items on the list",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "a Tax rate of 8 % is applied to the total",
  "keyword": "And "
});
formatter.match({
  "location": "UIStepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1620468731,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.i_login_in_with_the_following_details(String,String\u003e)"
});
formatter.result({
  "duration": 1280418906,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.i_add_the_following_items_to_the_basket(String\u003e)"
});
formatter.result({
  "duration": 1369780066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "UIStepDefinition.i_should_see_items_added_to_the_shopping_cart(int)"
});
formatter.result({
  "duration": 18964557,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.i_click_on_the_shopping_cart()"
});
formatter.result({
  "duration": 1048132300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "UIStepDefinition.i_verify_that_the_QTY_count_for_each_item_should_be(int)"
});
formatter.result({
  "duration": 1289311512,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.i_remove_the_following_item(String\u003e)"
});
formatter.result({
  "duration": 340056877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 14
    }
  ],
  "location": "UIStepDefinition.i_should_see_items_added_to_the_shopping_cart(int)"
});
formatter.result({
  "duration": 17667965,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.i_click_on_the_CHECKOUT_button()"
});
formatter.result({
  "duration": 51320828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 8
    }
  ],
  "location": "UIStepDefinition.i_type_for_First_Name(String)"
});
formatter.result({
  "duration": 389262001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName",
      "offset": 8
    }
  ],
  "location": "UIStepDefinition.i_type_for_Last_Name(String)"
});
formatter.result({
  "duration": 357156964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EC1A 9JU",
      "offset": 8
    }
  ],
  "location": "UIStepDefinition.i_type_for_ZIP_Postal_Code(String)"
});
formatter.result({
  "duration": 354774193,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.i_click_on_the_CONTINUE_button()"
});
formatter.result({
  "duration": 1071687065,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinition.item_total_will_be_equal_to_the_total_of_items_on_the_list()"
});
formatter.result({
  "duration": 1055971769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 14
    }
  ],
  "location": "UIStepDefinition.a_Tax_rate_of_is_applied_to_the_total(int)"
});
formatter.result({
  "duration": 32065750,
  "status": "passed"
});
formatter.after({
  "duration": 649519333,
  "status": "passed"
});
});