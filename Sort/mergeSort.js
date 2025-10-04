// *Merge Sort
// 1. Divide the array into halves
// 2. Recursively divide the array until it is in single elements
// 3. Merge the divided arrays back together
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// [5, 3, 8, 4, 2]
// [5, 3] [8, 4, 2]
// [5] [3] [8] [4, 2]
// [5] [3] [8] [4] [2]

// [3, 5] [4, 8] [2]
// [3, 4, 5, 8] [2]
// [2, 3, 4, 5, 8]

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge2(left, right);
}

function merge2(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([5, 3, 8, 4, 2]));
