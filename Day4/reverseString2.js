//Another method without taking any space , another array
//["h","e","l","l","o"] --->["o","l","l","e","h"]

function reverseString2(arr) {
  //we need to swap the top 1st to top last ,
  //arr[i] <---> arr[arr.length-1-i]

  const half_arr = Math.floor(arr.length / 2); //this will return half of the array
  let n = arr.length - 1;

  for (let i = 0; i < half_arr; i++) {

    //swap the value by taking an temperary variable 
    let temp = arr[i];
    arr[i]= arr[n-i];
    arr[n-i] = temp;
    
  }

  return arr;
}

let arr_str = ["h", "e", "l", "l", "o"];

console.log(reverseString2(arr_str));