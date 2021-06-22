// This is a rough draft and I'm just doing some late night practice to get a commit in today
// this solution has not been approved by an exercism mentor
// but it passes all tests
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

export class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.accountOpened = false;
  }

  checkStatus() {
    if (!this.accountOpened) {
      throw new ValueError();
    }
  }

  open() {
    if (this.accountOpened) {
      throw new ValueError();
    }

    this.accountOpened = true;
  }

  close() {
    this.checkStatus();
    this.accountOpened = false;
    this.accountBalance = 0;
  }

  deposit(amount) {
    this.checkStatus();

    if (amount < 0) {
      throw new ValueError();
    }

    this.accountBalance += amount;
  }

  withdraw(amount) {
    this.checkStatus();

    if (this.accountBalance < amount || amount < 0) {
      throw new ValueError();
    }

    this.accountBalance -= amount;
  }

  get balance() {
    this.checkStatus();
    
    return this.accountBalance;
  }
}

