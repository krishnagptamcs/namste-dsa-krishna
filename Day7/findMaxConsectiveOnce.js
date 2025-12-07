//From given binary arrya we need to find the max consecutive once number ;
//means , the "1" , which are coming together 
//[1,0,1,1,1,1,0,1,0] ----> 4 "1". are coming together , so the max concutive once number will be 4


function findMaxConsecutive (arr){
    //Intiate two variable ,which maintain the count
    let currentCount =0;
    let maxCount =0;

    for(let i=0; i<arr.length;i++ ){

        if(arr[i] == 1){
            //If the elem on current index is 1 then increse the value of current count
            currentCount++;
        }else{
            //if cuurent elem is not 1 , that means it is 0
            //then update the maxCount value , by comparing currentCount and maxCount , 
            //And at last reset the currentCount to 0 so that, it can start again
            maxCount = Math.max(maxCount,currentCount);
            currentCount = 0;
        }

    }

    //In last return the maxCount, make sure the loop can be end with currentCount , 
    //So in returning we need to return the max one
    return Math.max(maxCount,currentCount);


}

const arrs =[1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1]

console.log(findMaxConsecutive(arrs));