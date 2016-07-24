var LoginPage = function() {

    /**
     * Navigates to the page
     */
    this.get = function() {
        browser.get('/ab/account-security/login');
    }

    this.setUsername = function(value) {
        element(by.css('#login_username')).sendKeys(value);
    }

    this.setPassword = function(value) {
        element(by.css('#login_password')).sendKeys(value);
    }

}
module.exports = new LoginPage();