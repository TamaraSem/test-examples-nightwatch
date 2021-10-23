module.exports = {
  'Happy flow basic registration' : function (browser) {
    var signUp = browser.page.signUp()
    // I moved basic Sign up to custom function as expected that it will be reused for other tests in future.
    signUp
    .signUp()
  },
  'Sign up with Google': function (browser) {
    var signUp = browser.page.signUp()
    signUp
    .navigate()
    .click('@buttonSignUpWithGoogle')
    .click(signUp.el('@labelFor', 'tos-signup-terms'))
    .click(signUp.el('@labelFor', 'tos-signup-subscribe'))
    .click('@buttonContinueToSignUp')
    .assert.urlContains('https://accounts.google.com/')
    //same way for Sign up with Slack, Facebook, etc.
  },
  'Check validation errors': function (browser) {
    var signUp = browser.page.signUp()
    signUp
    .navigate()
    .click('@buttonSignUp')
    .waitForElementVisible(signUp.el('@elementWithText', 'Please enter your name.'))
    .waitForElementVisible(signUp.el('@elementWithText', 'Please enter your email address.'))
    // same way all validation errors
  },
}