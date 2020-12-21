package qumu;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Method;
import io.restassured.response.Response;
import org.glassfish.grizzly.utils.ArraySet;
import org.json.JSONObject;
import org.testng.Assert;
import org.testng.AssertJUnit;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;

import java.util.*;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class ApiStepDefinition {

    Response response;
    List<Object> allUsers;
    int totalUsers;

    @Given("^I get the default list of users for on page (.*)")
    public void iGetTheDefaultListofusersforonpage(String pageNum) {

            given().
                    baseUri(LoadProp.getproperty("apiUri")).
                    basePath("/api/users").
                    accept(ContentType.JSON).
                    queryParam("page", pageNum ).
            when().
                    request(Method.GET).prettyPeek().
            then().
                    statusCode(200).
                    contentType(ContentType.JSON);

    }

    @When("I get the list of all users within every page")
    public void iGetTheListOfAllUsers() {

        allUsers = new ArrayList<>();

        for(int i=1; i<=2; i++) {
            response = given().
                    baseUri(LoadProp.getproperty("apiUri")).
                    basePath("/api/users").
                    accept(ContentType.JSON).
                    queryParam("page", i).
                    when().
                    request(Method.GET);

            Assert.assertEquals(response.statusCode(), 200);
            Assert.assertEquals(response.contentType(), "application/json; charset=utf-8");

            List<Object> users = response.path("data");
            allUsers.addAll(users);

        }
            totalUsers = response.path("total");

        System.out.println("AllUsers = " + allUsers);
        System.out.println("totalUsers = " + totalUsers);
    }

    @Then("I should see total users count equals the number of user ids")
    public void iShouldMatchTotalCount() {

        Assert.assertEquals(allUsers.size(), totalUsers);
    }

    @Given("I make a search for user (.*)")
    public void iMakeASearchForUser(String sUserID) {

        response = given().
                baseUri(LoadProp.getproperty("apiUri")).
                basePath("/api/users/" + sUserID).
                accept(ContentType.JSON).
                when().
                request(Method.GET).prettyPeek();

    }

    @Then("I should see the following user data")
    public void IShouldSeeFollowingUserData(Map<String,String> userData) {

        Assert.assertEquals(response.statusCode(),200);
        Assert.assertEquals(response.contentType(),"application/json; charset=utf-8");

        String expectedFirstName = userData.get("first_name");
        String actualFirstName = response.path("data.first_name");

        String expectedEmail = userData.get("email");
        String actualEmail = response.path("data.email");

        Assert.assertEquals(expectedFirstName,actualFirstName);
        Assert.assertEquals(expectedEmail, actualEmail);
    }

    @Then("I receive error code (.*) in response")
    public void iReceiveErrorCodeInResponse(int responseCode) {

        Assert.assertEquals(response.statusCode(),responseCode);
        Assert.assertEquals(response.contentType(),"application/json; charset=utf-8");
    }

    @Given("I create a user with following (.*) (.*)")
    public void iCreateUserWithFollowing(String sUsername, String sJob) {

        JSONObject payload = new JSONObject();
        payload.put("name", sUsername);
        payload.put("job", sJob);

        response = given().
                baseUri(LoadProp.getproperty("apiUri")).
                basePath("/api/users").
                accept(ContentType.JSON).
                body(payload.toString()).
                contentType(ContentType.JSON).
                when().
                request(Method.POST).prettyPeek();
    }

    @Then("response should contain the following data")
    public void iReceiveErrorCodeInResponse(List<String> list) {

        String name = list.get(0);
        String job = list.get(1);
        String id = list.get(2);
        String createdAt = list.get(3);

        Assert.assertFalse(response.path(name).toString().isEmpty());
        Assert.assertFalse(response.path(job).toString().isEmpty());
        Assert.assertFalse(response.path(id).toString().isEmpty());
        Assert.assertFalse(response.path(createdAt).toString().isEmpty());
    }

    @Given("^I login successfully with the following data$")
    public void i_login_successfully_with_the_following_data(Map<String,String> userData) {

        JSONObject payload = new JSONObject();
        payload.put("email", userData.get("Email"));
        payload.put("password", userData.get("Password"));

        response = given().
                baseUri(LoadProp.getproperty("apiUri")).
                basePath("/api/login").
                accept(ContentType.JSON).
                body(payload.toString()).
                contentType(ContentType.JSON).
                when().
                request(Method.POST).prettyPeek();
    }


    @Given("I login unsuccessfully with the following data")
    public void iLoginSuccesfullyWithFollowingData(Map<String,String> userData) {

        JSONObject payload = new JSONObject();
        payload.put("email", userData.get("Email"));
        payload.put("password", userData.get("Password"));

        response = given().
                baseUri(LoadProp.getproperty("apiUri")).
                basePath("/api/login").
                accept(ContentType.JSON).
                body(payload.toString()).
                contentType(ContentType.JSON).
                when().
                request(Method.POST).prettyPeek();
    }

    @Given("^I wait for the user list to load$")
    public void iWaitForUserListToLoad() throws InterruptedException {
        response = given().
                baseUri(LoadProp.getproperty("apiUri")).
                basePath("/api/users").
                accept(ContentType.JSON).
                queryParam("delay","3").
                when().
                request(Method.GET).prettyPeek();

        //Thread.sleep(3000);
    }

    @Then("I should see that every user has a unique id")
    public void iShouldSeeThatEveryUserHasAUniqueID() {

        List<Integer> uniqueIds = response.path("data.id");

        System.out.println("uniqueIds.size() = " + uniqueIds.size());

        boolean flag = false;

        for(int i=0; i<uniqueIds.size(); i++){
            int count = 0;
            for(int j=0; j<uniqueIds.size(); j++){
                if(uniqueIds.get(i)==uniqueIds.get(j)){
                    count++;
                }
                if(count>1){
                    flag = true;
                    return;
                }
            }
        }

        Assert.assertEquals(false, flag);
    }

    @Then("^I should get a response code of (\\d+)$")
    public void iShouldGetAResponseCodeOf(int responseCode) {

        Assert.assertEquals(responseCode,response.statusCode());
    }

    @And("^I should see the following response message:")
    public void iShouldSeeTheFollowingResponseMessage(Map<String,String> userData) {
        String expectedErrorMessage = userData.get("error");
        String actualErrorMessage = response.path("error");

        Assert.assertEquals(expectedErrorMessage,actualErrorMessage);

    }
}
