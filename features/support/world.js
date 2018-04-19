const { setWorldConstructor } = require('cucumber');
const Account = require('../../models/account');

class World {
  constructor() {
    this.account = new Account();
  }

  /**
   * Initializa acount with a given account name & amount
   * 
   * @param {string} accountName 
   * @param {float} initialAmount 
   */
  initAccount(accountName, initialAmount) {
    this.account.initAccount(accountName, initialAmount);
  }

  /**
   * Withdraw a given amount from the current account
   * 
   * @param {float} amount 
   */
  withdraw(amount) {
    this.account.withdraw(amount);
  }

  /**
   * Get the current amount
   * 
   * @returns {float} The current Amount
   */
  currentAmount() {
    return this.account.getAmount();
  }
}

setWorldConstructor(World);