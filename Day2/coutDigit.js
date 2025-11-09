//Count the digit , present in given interger 
//84373883 ----> 8

function countDigit (num) {
    if(num == 0) return 1;

    //always take the positive number
    num = Math.abs(num);

    //initilaise the count
    let count = 0;

    //Run this  loop , till the divide number not become 0
    while(num > 0){
        //divide num by 10
        //223/10 ---> 22 , remainder will be 3
        num = Math.floor(num/10)
        count++;
    
    }

    return count;

}


console.log(countDigit(3458837472934849348));