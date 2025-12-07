//From the given array find the single number which are not repeating itself
//arr --[1,2,1,3,3] ---> ans will be 2 ,

//Approach -> Make a hashmap , and store all the number in key value , key will be arr elem , and value will be how many time they are appear

function findSingleNum(arr) {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    //check the current elem is present in hashmap or not
    //if it not present assign with value 1
    if (!hashMap[arr[i]]) {
      hashMap[arr[i]] = 1;
    } else {
      //if it is already present
      //increase the current value , by 1
      hashMap[arr[i]]++;
    }
  }

  //finally return the hashmap key whose value is 1

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]] === 1) {
      return arr[i];
    }
  }
}

const arrs = [1,0,2,2,5,5,0,1,10];

console.log(findSingleNum(arrs));

//This apporach can be done with xor as well , 1 ^ 1 --> 0 , same number cancel out , diffrent number remain 0
