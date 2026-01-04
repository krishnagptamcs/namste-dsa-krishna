//Binary search is an efficient search algorithm that finds the position of a target value within a sorted array or list. It works by repeatedly dividing the search space in half, which gives it a time complexity of O(log n), making it much faster than linear search for large datasets

//From the given array return the target, if it is present inn array retrurn 1 other wise -1
function search(arr, target) {
  //so using binary search first get the left and right part
  let left = 0;
  let right = arr.length - 1;

  //since the array is sorted we need to find the range where it is lie to left side or right side
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
