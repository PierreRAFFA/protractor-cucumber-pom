var fs = require('fs');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var homePage = require('../pages/HomePage');
var signupPage = require('../pages/SignupPage');
var loginPage = require('../pages/LoginPage');

module.exports = function() {

    //change the default timeout to prevent issues
    this.setDefaultTimeout(500 * 1000);

    /**
     * Event Handlers (https://github.com/cucumber/cucumber-js#event-handlers)
     */
    this.registerHandler('AfterScenario', function (event, callback) {
        // clear localStorage
        browser.executeScript('window.localStorage.clear();');
        callback();
    });

    /**
     * Hooks (https://github.com/cucumber/cucumber-js#hooks)
     */
    this.Before(function (scenario, callback) {
        console.log("Executed before each scenario");
        callback();
    });

    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            webDriver.takeScreenshot().then(function(stream){
                scenario.attach(stream, 'image/png', callback);
            }, function(err) {
                callback(err);
            });
        }else {
            callback();
        }
    });


    /**
     * Given Methods
     */
    this.Given(/I am on the homepage/, function(callback) {
        homePage.get().then(function() {
            callback();
        });
    });


    /**
     * When Methods
     */
    this.When(/I SignUp$/, function(callback) {
        homePage.signup().then(function() {
            callback();
        });
    });
    this.When(/I Log in$/, function(callback) {
        expect(browser.getCurrentUrl())
            .to.eventually.equal('https://www.upwork.com/signup/')
            .and.then(function() {
            signupPage.login().then(function() {
                callback();
            });
        });
    });

    this.When(/^I Log in with (.*) and (.*)$/, function (username, password, callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(browser.getCurrentUrl())
            .to.eventually.equal('https://www.upwork.com/ab/account-security/login')
            .and.then(function() {
                loginPage.setUsername(username);
                loginPage.setPassword(password);
                callback();
            });
    });

    /**
     * Then Methods
     */

    this.Then(/^I Should be logged in$/, function (callback) {

        //mocked here
        setTimeout(function() {
            callback()
        }, 2000);
    });




};
