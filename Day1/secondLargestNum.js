//To return the second larrgets number from arry
function secondLargest (arr){

    let firsLarg = -Infinity;
    let secondLarg = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>firsLarg){
            secondLarg = firsLarg;
            firsLarg = arr[i]  
        }else if(arr[i]>secondLarg && arr[i] !== firsLarg){
            secondLarg = arr[i]
        }
    }

    return secondLarg;
}

const arr = [4,9,0,2,7,1];

console.log(secondLargest(arr));