var util = require('util');   
module.exports = {
  url: 'https://miro.com/signup/',
  commands: [ {
    el: function (elementName, data) {
      var element = this.elements[elementName.slice(1)];
      return util.format(element.selector, data);
    }
  }],
  elements: {
    inputName: {
      selector: '//input[@id="name"]',
    },
    inputEmail: {
      selector: '//input[@id="email"]',
    },
    inputPassword: {
      selector: '//input[@id="password"]',
    },
    checkboxSignupTerms: {
      selector: '//label[@for="signup-terms"]',
    },
    checkboxSignupSubscribe: {
      selector: '//label[@for="signup-subscribe"]',
    },
    labelFor: {
      selector: '//label[@for="%s"]',
    },
    buttonAcceptCoockies: {
    selector: '//button[text()="Accept All Cookies"]'
    },
    buttonSignUp: {
    selector: '//button[@class="signup__submit"]'
    },
    inputWithId: {
      selector: "//input[@id='%s']"
    },
    elementWithText: {
      selector: "//*[text()='%s']"
    },
    buttonSignUpWithGoogle: {
      selector: '//button[@id="kmq-google-button"]'
    },
    buttonContinueToSignUp: {
      selector: '//button[@data-autotest-id="mr-form-gdpr-btn-signin-1"]'
    }
  }
  }