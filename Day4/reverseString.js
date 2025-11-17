//Reverse the given array
//["h","e","l","l","o"] --->["o","l","l","e","h"]


//we need to just swap the elem , 
//so take two pointer which run from right to left and another filled from left to right
function reverseString(arr) {
    //Check the arr should not be 0 
  if (arr.length === 0) return;

  //Intialise x , to maintain the reverse 
  let x=0;

  //Intilaise an array which reverse value to be filled
  let revers_arr = [];

  //initialising i with from right end, so that it can move to x
  for (let i = arr.length-1; i >= 0; i--) {
    //assignt the arr value in reverse_arr value
    revers_arr[x] = arr[i];
    //increase the x so that it move to next , right
    x = x + 1;
  }

  return revers_arr;
}

let arr_str = ["h", "e", "l", "l", "o"];

console.log(reverseString(arr_str));
