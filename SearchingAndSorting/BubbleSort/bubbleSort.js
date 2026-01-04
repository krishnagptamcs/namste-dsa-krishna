//Bubble Sort is a basic sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they're in the wrong order, causing the largest unsorted element to "bubble up" to its correct position with each pass

//Sort this arr in asc --> [5,4,9,1,0]

function bubbleSort(arr) {
  //take n as lnegth of array
  let n = arr.length;

  //For first itration vertical which will be run n-1
  for (let i = 0; i < n - 1; i++) {
    //Now inside first iteration (vertical) run
    //the second loop whhich run along with element (adjecent) horizontal wise
    //Coz in each iteration the elem which is max/min , will get its real posititon either top last or top first, 
    for (let j = 0; j < n - 1 - i; j++) {
      //Now swap the value if the adjecent value are greater than
      if (arr[j] > arr[j + 1]) {
        //swap the value
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
