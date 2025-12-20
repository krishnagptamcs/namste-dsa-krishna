//Find the factorial of given number

function factorial(n) {
  //Base case
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
