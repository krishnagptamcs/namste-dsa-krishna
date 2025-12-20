//To find the sum of all element in an array 
//array --->>>>> [1,2,3,4,5,6,7,8]

//So in this sapproach take the first elem , and sum of all the other elem in a cycle , so always pass like this 



let arr =[5,4,3,2,1,2];

function sumOfAllElem(n){

    //First base case: , when to return /stop
    if(n ===0) return arr[0];

    //Taking the first elem + remaing sum of all the other elem
    return arr[n] + sumOfAllElem(n-1)
}


console.log(sumOfAllElem(arr.length -1));
