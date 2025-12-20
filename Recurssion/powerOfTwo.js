//Find the given number is power of 2 or not
//8 , power of 2
//6 ,not power of two
//3 not power of two coz it is odd

function powerOfTwo(n) {
  if (n == 1) return true;

  if (n < 1 || n % 2 !== 0) return false;

  return powerOfTwo(n / 2);
}
