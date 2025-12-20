//To find sum of first of all n natural number via recursion


function sumOfAlln(n){

    //Firt when use recursion then write the Base case
    if(n ===0) return 0;

    //Recursive calling this fn sumOfAlln
    return n + sumOfAlln(n-1)

}

console.log(sumOfAlln(100));