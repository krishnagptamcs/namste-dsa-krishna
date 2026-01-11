//Insertion sort
//arr--> [7,1,5,12,-10,0,4,3,2]

function insertionSort(arr) {
  //so first take the 0th elem as current index
  //start the loop form 1st index

  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let prev = i - 1;

    while (arr[prev] > current && prev >= 0) { //Importtant logic for instertion sort 
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }

  return arr;
}


const array =  [7,1,5,12,-10,0,4,3,2];

console.log(insertionSort(array));

