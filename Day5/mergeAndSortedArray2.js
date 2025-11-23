//3rd approach

function sorted2(arr1, n, arr2, m) {
  //Taking the opointers to last elem postition
  let p1 = n - 1;
  let p2 = m - 1;

  for (let i = n + m - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && arr1[p1] > arr2[p2]) {
      arr1[i] = arr1[p1];ß
      p1--;
    } else {
      arr1[i] = arr2[p2];
      p2--;
    }
  }
}
