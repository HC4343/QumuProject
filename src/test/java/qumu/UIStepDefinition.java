package qumu;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;

public class UIStepDefinition {

    SamplePage samplePage = new SamplePage();
    public static List<String> itemPurchased;

    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() throws InterruptedException {
        HomePage.homePage();
        Thread.sleep(1000);
    }

    @Given("^I login in with the following details$")
    public void i_login_in_with_the_following_details(Map<String,String> userData) throws InterruptedException {
        String userName = userData.get("userName");
        String password = userData.get("Password");

        samplePage.login(userName,password);

        Thread.sleep(1000);
    }

    @Given("^I add the following items to the basket$")
    public void i_add_the_following_items_to_the_basket(List<String> list) throws InterruptedException {
        itemPurchased = list;

        for (String each:itemPurchased) {
            samplePage.addToCart(each).click();
            Thread.sleep(300);
        }
    }

    @Given("^I  should see (\\d+) items added to the shopping cart$")
    public void i_should_see_items_added_to_the_shopping_cart(int numberOfItems) throws Throwable {
        String expectedNumberOfItems = String.valueOf(numberOfItems);
        String actualNumberOfItems = samplePage.shoppingCart.getText();

        Assert.assertEquals(expectedNumberOfItems,actualNumberOfItems);
    }

    @Given("^I click on the shopping cart$")
    public void i_click_on_the_shopping_cart() throws Throwable {
        samplePage.shoppingCart.click();

        Thread.sleep(1000);
    }

    @Given("^I verify that the QTY count for each item should be (\\d+)$")
    public void i_verify_that_the_QTY_count_for_each_item_should_be(int quantity) throws Throwable {
        String expectedQuantity = String.valueOf(quantity);
        String actualQuantityOfEachItem;

        for (String each:itemPurchased) {
            actualQuantityOfEachItem= samplePage.getQuantity(each).getText();

            Thread.sleep(300);

            Assert.assertEquals(expectedQuantity,actualQuantityOfEachItem);
        }
    }

    @Given("^I remove the following item:$")
    public void i_remove_the_following_item(List<String> item) throws Throwable {
        for (String each:item) {
            samplePage.removeItem(each).click();
            Thread.sleep(300);
        }
    }

    @Given("^I click on the CHECKOUT button$")
    public void i_click_on_the_CHECKOUT_button() throws Throwable {
        samplePage.checkoutButton.click();
    }

    @Given("^I type \"([^\"]*)\" for First Name$")
    public void i_type_for_First_Name(String firstName) throws Throwable {
        samplePage.firstName.sendKeys(firstName);

        Thread.sleep(300);
    }

    @Given("^I type \"([^\"]*)\" for Last Name$")
    public void i_type_for_Last_Name(String lastName) throws Throwable {
        samplePage.lastName.sendKeys(lastName);

        Thread.sleep(300);
    }

    @Given("^I type \"([^\"]*)\" for ZIP/Postal Code$")
    public void i_type_for_ZIP_Postal_Code(String postalCode) throws Throwable {
        samplePage.postalCode.sendKeys(postalCode);

        Thread.sleep(300);
    }

    @When("^I click on the CONTINUE button$")
    public void i_click_on_the_CONTINUE_button() throws Throwable {
        samplePage.continueButton.click();

        Thread.sleep(1000);
    }

    @Then("^Item total will be equal to the total of items on the list$")
    public void item_total_will_be_equal_to_the_total_of_items_on_the_list() throws Throwable {
        List<WebElement> list = samplePage.totalPriceOfItems;

        double totalAmount = 0;
        for (WebElement each:list) {
            String amount = each.getText();
            amount = amount.replace("$","");
            totalAmount += Double.valueOf(amount);
            System.out.println("each = " + amount);
        }

        System.out.println("totalAmount = " + totalAmount);

        double itemTotal = Double.valueOf(samplePage.itemTotalPrice.getText().replace("Item total: $",""));
        System.out.println("itemTotal = " + itemTotal);

        Assert.assertEquals(itemTotal,totalAmount);

        Thread.sleep(1000);
    }

    @Then("^a Tax rate of (\\d+) % is applied to the total$")
    public void a_Tax_rate_of_is_applied_to_the_total(int taxRate) throws Throwable {
        double itemTotal = Double.valueOf(samplePage.itemTotalPrice.getText().replace("Item total: $",""));

        double tax = itemTotal * taxRate / 100;
        System.out.println("tax = " + tax);
        BigDecimal bd = new BigDecimal(tax).setScale(2, RoundingMode.HALF_UP);
        tax = bd.doubleValue();
        System.out.println("tax = " + tax);

        double taxApplied = itemTotal + tax;
        System.out.println("taxApplied = " + taxApplied);

        double totalAmount = Double.valueOf(samplePage.totalPriceAfterTax.getText().replace("Total: $",""));
        System.out.println("totalAmount = " + totalAmount);

        Assert.assertEquals(taxApplied,totalAmount);
    }

}
