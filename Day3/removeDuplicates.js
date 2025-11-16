//We need to make fn , such that it remove the duplicate value from non-increasing sorted array
//Return the number of uniques value and the unique elem array
//Ex. [0,0,1,1,1,2,2,3,3,4] ---> [0,1,2,3,4,_,_,_] (keep the element after unique you want)

function removeDuplicateAndReturnUnique(arr) {
  let x = 0; //Take a variable which keep the uniques value , next to it

  for (let i = 0; i < arr.length; i++) {
    //Now to find the unique value ,
    //check the next value is greated than previous value
    //because the array is sorted

    if (arr[i] > arr[x]) {
      //if the unique value found , then increase the value of x to +1 ,
      //so that the current unique value can be placed next to previous one [0,1,2...]
      x = x + 1;
      arr[x] = arr[i]; //assign the current unique value to x position
    }
  }

  //Return the final unique value ,
  //since we are increasing the position of x , when we found unique value ,
  //That means the last position of x + 1 , will be total number of unique value
  return x + 1;
}

const arr = [0,0,1,1,1,2,2,3,3,4,4,5,6,7,7,9]

console.log(removeDuplicateAndReturnUnique(arr));