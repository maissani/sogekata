module.exports = class Account {
  
  // We decided to have Imutable Account for security reasons
  constructor() {
    this.account = {
      name: undefined,
      amount: 0,
    };
  }

  /**
   * Initialize acount with an account name & amount
   * 
   * @param {string} accountName 
   * @param {float} initialAmount 
   */
  initAccount(accountName, initialAmount) {
    this.account = Object.assign({}, this.account, {
      name: accountName,
      amount: initialAmount,
    });
  }

  /**
   * Withdraw given amount from current account
   * 
   * @param {float} amount 
   */
  withdraw(amount) {
    this.account = Object.assign({}, this.account, {
      amount: this.account.amount - amount,
    });
  }

  /**
   * Get the current amount for the current account
   * 
   * @returns {float} The current account amount
   */
  getAmount() {
    return this.account.amount;
  }
};
