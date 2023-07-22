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
