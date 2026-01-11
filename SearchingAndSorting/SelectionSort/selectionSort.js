//Selection Sort is a comparison-based sorting algorithm. It sorts by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element.

function selectionSort(arr) {
  //array lenght
  let n = arr.length;
  //iteration
  //In each iteration it find the min element and put in the starting index
  //here we are asssuming , the 0th position is the min value
  for (let i = 0; i < n - 1; i++) {
    //second iteration finding the minimum value and replacing with 0th position
    //this loop is only for finding the min element/value
    let min = i;
    for (j = i + 1; j < n - 1; j++) {
      if (arr[j] < arr[min]) {
        //if the current value is min than replace/ swap
        min = j;
      }
    }
  }

  return arr;
}
