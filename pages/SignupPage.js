var SignupPage = function() {

    /**
     * Navigates to the page
     */
    this.get = function() {
        browser.get('/signup');
    }

    this.login = function() {
        return element(by.css('a[href="/login"]')).click();
    }


}
module.exports = new SignupPage();