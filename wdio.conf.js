exports.config = {
    runner: 'local',

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    specs: ['./test/specs/add.product.specs.js'],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:appPackage': 'com.saucelabs.mydemoapp.android',
        'appium:appActivity': 'com.saucelabs.mydemoapp.android/.view.activities.SplashActivity',
        'appium:noReset': true,
    }],

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results'
        }]
    ],
    mochaOpts: {
        timeout: 60000
    }
};