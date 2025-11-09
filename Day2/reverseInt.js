//To reverse the given number
//4331---> 1334

function reverseNum(num) {
  let x = num;
  let isGivenNumberIsNegative = false;

  if (num < 0) {
    x = Math.abs(num);
    isGivenNumberIsNegative = true;
  }

  let reverse = 0;

  while (x > 0) {
    let rem = x % 10;
    reverse = reverse * 10 + rem;

    x = Math.floor(x / 10);
  }

  if (isGivenNumberIsNegative) {
    isGivenNumberIsNegative = false;
    return (reverse = -Math.abs(reverse));
  }

  return reverse;
}

console.log(reverseNum(4321));
