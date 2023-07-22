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

console.log(palindrome("That red civic is a racecar"));
