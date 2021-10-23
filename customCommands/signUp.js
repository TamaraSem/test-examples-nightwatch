/* eslint-disable no-console */
const util = require('util')
const EventEmitter = require('events')
const config = require('../pageObjects/signUp')

function SignUp() {
  EventEmitter.call(this)
}

util.inherits(SignUp, EventEmitter)

SignUp.prototype.command = function () {
  var randomString = (Math.random() + 1).toString(36).substring(4)
  var randomPassword = Math.random().toString(36).slice(4) + Math.random().toString(36).slice(4)
  var signUp = this.client.api.page.signUp()
  signUp
    .navigate()
    .waitForElementPresent('@buttonAcceptCoockies')
    .click('@buttonAcceptCoockies')
    .setValue(signUp.el('@inputWithId', 'name'), randomString)
    .assert.value(signUp.el('@inputWithId', 'name'), randomString)
    .setValue(signUp.el('@inputWithId', 'email'), `${randomString}@mail.ru`)
    .assert.value(signUp.el('@inputWithId', 'email'), `${randomString}@mail.ru`)
    .setValue(signUp.el('@inputWithId', 'password'), randomPassword)
    .assert.value(signUp.el('@inputWithId', 'password'), randomPassword)
    .click('@checkboxSignupTerms')
    .click('@checkboxSignupSubscribe')
    .click('@buttonSignUp')
    .waitForElementPresent(signUp.el('@elementWithText', 'Check your email'), () => {
      this.emit('complete')
    })
}

module.exports = SignUp