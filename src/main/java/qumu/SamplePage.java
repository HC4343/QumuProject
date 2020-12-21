package qumu;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SamplePage extends BasePage {
    public SamplePage() {
        PageFactory.initElements(driver, this);
    }

/**
 * You can use this class to add page objects and methods.
 */

    @FindBy(id="user-name")
    public WebElement userName;

    @FindBy(id="password")
    public WebElement password;

    @FindBy(id = "login-button")
    public WebElement loginButton;

    @FindBy(xpath = "//div[@class=('inventory_item_name')]")
    public List<WebElement> addToChartElements;

    @FindBy(css = ".fa-layers-counter.shopping_cart_badge")
    public WebElement shoppingCart;

    @FindBy(css = ".btn_action.checkout_button")
    public WebElement checkoutButton;

    @FindBy(id="first-name")
    public WebElement firstName;

    @FindBy(id="last-name")
    public WebElement lastName;

    @FindBy(id="postal-code")
    public WebElement postalCode;

    @FindBy(css=".btn_primary.cart_button")
    public WebElement continueButton;

    @FindBy(css=".inventory_item_price")
    public List<WebElement> totalPriceOfItems;

    @FindBy(css = ".summary_subtotal_label")
    public WebElement itemTotalPrice;

    @FindBy(css = ".summary_tax_label")
    public WebElement taxPrice;

    @FindBy(css = ".summary_total_label")
    public WebElement totalPriceAfterTax;


    public void login(String userNameStr, String passwordStr) {
        userName.sendKeys(userNameStr);
        password.sendKeys(passwordStr);
        loginButton.click();
    }

    public WebElement addToCart(String item){
        String xpath = "//*[text()='" + item + "']/parent::a/parent::div/parent::div/div[3]/div/following-sibling::button";
        return driver.findElement(By.xpath(xpath));
    }

    public WebElement getQuantity(String item){
        String xpath = "//*[text()='" + item + "']/parent::a/parent::div/parent::div/div[1]";
        return driver.findElement(By.xpath(xpath));
    }

    public WebElement removeItem(String item){
        String xpath = "//*[text()='" + item + "']/parent::a/parent::div/div[2]/button";
        return driver.findElement(By.xpath(xpath));
    }
}
