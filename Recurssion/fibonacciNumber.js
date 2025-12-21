//Find the fibonacci number at given index
//fibonacci number --> 0,1,1,2,3,5,8,13.........


function fibonacciNum(n){
    
    //Base case
    if(n<=1) return n;

    return fibonacciNum(n-1) + fibonacciNum(n-2);
}


console.log(fibonacciNum(5));

