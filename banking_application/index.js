// Create a customer object with name and balance properties
const customer = {
  name: 'Saurav Kumar',
  balance: 5000
};

// Function to deposit money into the customer's account
function deposit(amount) {
  this.balance += amount;
  console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
}

// Function to withdraw money from the customer's account
function withdraw(amount) {
  if (amount > this.balance) {
    console.log(`Insufficient funds. Current balance is ${this.balance}.`);
  } else {
    this.balance -= amount;
    console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
  }
}

// Call the deposit and withdraw functions using the customer object's methods
customer.deposit = deposit;
customer.withdraw = withdraw;

// Deposit 100 into the customer's account
customer.deposit(100); // Deposited 100. New balance is 600.

// Withdraw 50 from the customer's account
customer.withdraw(50); // Withdrew 50. New balance is 550.

// Try to withdraw 700 from the customer's account (insufficient funds)
customer.withdraw(700); // Insufficient funds. Current balance is 550.
