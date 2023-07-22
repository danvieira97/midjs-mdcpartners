// Factorial task
function factorial(number) {
  const numberArray = Array.from({ length: number }, (_, index) => index + 1);

  const factorialNumber = numberArray.reduce((total, num) => total * num);

  return factorialNumber;
}

// console.log(factorial(5));

// Palindrome task
function palindrome(string) {
  const stringArray = string.split(" ");

  const palindromeWords = stringArray.filter((word) => {
    const isPalindrome = word
      .split("")
      .reverse()
      .toString()
      .replaceAll(",", "")
      .toLowerCase();

    if (isPalindrome === word) {
      return isPalindrome;
    }
  });

  return palindromeWords;
}

// console.log(palindrome("That red civic is a racecar"));

// Data structure task
class Stack {
  constructor(...number) {
    this.items = [];
    this.items.push(...number);
  }

  push(item) {
    if (item) {
      this.items.push(item);
      return this.items;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "The stack is alredy empty";
    }
    this.items.pop();
    return this.items;
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }
}

// const myStack = new Stack(1, 2, 3);
// console.log(myStack);
// console.log(myStack.push(4));
// console.log(myStack.pop());
// console.log(myStack.isEmpty());

// Object Oriented task
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    if (value > this.checkBalance()) {
      return console.log("Insuficient founds");
    }
    this.balance -= value;
  }

  checkBalance() {
    // console.log(`Your balance is: ${this.balance}`);
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(name, balance, save) {
    super(name, balance);

    this.save = save;
  }

  saves(value) {
    if (value > this.checkBalance()) {
      return console.log("You cant save this value");
    }
    this.balance -= value;
    return (this.save += value);
  }

  checkSaves() {
    console.log(`Your save is: ${this.save}`);
    return this.save;
  }
}

class CheckingAccount extends BankAccount {
  constructor(name, balance) {
    super(name, balance);

    this.payments = [];
  }

  payment(value) {
    if (value > this.checkBalance()) {
      return console.log(`Your founds are insuficient`);
    }
    this.balance -= value;
    this.payments.push(new Date().toISOString());

    return console.log(
      `Payment: ${
        this.payments[this.payments.length - 1]
      } completed successfully. Your balace now is: ${this.balance}`
    );
  }

  checkPayments() {
    return console.log(this.payments);
  }
}

const ca = new CheckingAccount("CA-123", 500);
ca.payment(100);
ca.payment(150);

const sa = new SavingsAccount("SA-789", 1000, 300);
sa.saves(250);
sa.deposit(100);
