const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('an existing client named {string} with {float} EUR in his account', function (accountName, initialAmount) {
  this.initAccount(accountName, initialAmount);
});

When('he withdraws {float} EUR from his account', function (amount) {
  this.withdraw(amount);
});

Then('the new balance is {float} EUR', function (amount) {
  expect(this.currentAmount()).to.eql(amount);
});
