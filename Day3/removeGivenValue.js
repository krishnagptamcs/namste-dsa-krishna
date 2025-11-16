//From the array we need to remove the given value , and replace them with non equal value (which is given)
//and the return the non unique value
//Arr [0,1,5,9,3,9,7,6,3] , given value =3 ,
//mod array [0,1,5,9,9,7,6] , total non eual value -->7

function removeGivenVal(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  return x;
}
