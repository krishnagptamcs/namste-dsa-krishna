//shift all the non zero in first with keeping the relative order
//arr = [1,0,3,0,12] --->[1,3,12,0,0]

function movedZero(arr) {
  //Take two pointer , one will iterate  which check non zero number
  //if non zero number found then moved to anohter pointer position

  let x = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }

  //now fill the all remainig value with 0

  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log(movedZero([1, 0, 0, 0, 3, 6, 7, 12, 0]));
