//To get the sum of all the odd eleme in an array
//arr --> [5,4,3,2,1] ---> total 9

let arr = [5, 4, 3, 2, 1];

function sumOfAllOdd(n) {
  //Base case
  if (n < 0) return 0;

  if (arr[n] % 2 !== 0) {
    //In case of odd
    return arr[n] + sumOfAllOdd(n - 1);
  } else {
    //In case of even
    return sumOfAllOdd(n - 1);
  }
}
