//We need to find the one missing number from given array , 
//The missing number will be lie in between 0 to n

//Apporoach :- we will take the actual sum of given array
// & we will take out the sum from number 0 to n , and we find the diff , of value the diffrence will be our missing number


function findMissingNumber (arr){
//Take out the last number of arr
let n = arr.length

//Find the actual sum upto n
let actualSum = n * (n + 1) / 2

let tempSum = 0

for(let i=0; i<arr.length ; i++){
  tempSum = tempSum + arr[i]
}


//Retrun the diffrence of actual sum and temp sum
return actualSum -  tempSum;


}

const arrs = [0,1,4,2,5,3,7];

console.log(findMissingNumber(arrs));