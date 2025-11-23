//Give two array in non descednig order , merger the array in sorted manner
//Donot return the new array , we need to merge in the given array , arr1 it self

//We will cover this ques with 3 approach
//1st appr --> merge two array and apply .sort() method  time-- o(m+n)log(m+n) ,, space -- o(m+n)
//2nd appr--> take copy of 1st aray , and compare each elem then pushed in copy arry , time -- o(m+n) , space - o(m+n)

//2nd approach sol
function merger(arr1, m, arr2, n) {
  //make copy of arr1
  arr_copy = arr1.slice(0, m);

  //condition  of checking and comparing the elem , in both array
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && arr_copy[p1] < arr2[p2])) {
      arr1[i] = arr_copy[p1];
      p1++;
    } else {
      arr1[i] = arr2[p2];
      p2++;
    }
  }
}
