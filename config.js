
exports.config = {
    baseUrl: 'https://upwork.com/',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    },

    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'features/*.feature'
    ],

    jasmineNodeOpts: {
        showColors: true
    },

    cucumberOpts: {
        require: 'features/stepDefinitions.js',
        format: 'pretty' // or summary
    },

    onPrepare: function() {

        //force the window to resize to display a desktop render in the case of upwork.com
        browser.driver.manage().window().maximize();
    }
};
