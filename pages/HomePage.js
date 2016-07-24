var HomePage = function() {

    /**
     * Navigates to the page
     */
    this.get = function() {
        return browser.get('/');
    }

    this.signup = function() {
        return element(by.css('nav.nav .header-link-signup')).click();
    }


}
module.exports = new HomePage();