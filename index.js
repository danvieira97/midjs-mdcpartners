// Factorial task
function factorial(number) {
  const numberArray = Array.from({ length: number }, (_, index) => index + 1);

  const factorialNumber = numberArray.reduce((total, num) => total * num);

  return factorialNumber;
}

console.log(factorial(5));
