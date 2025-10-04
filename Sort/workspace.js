function mergeSort2(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort2(arr.slice(0, mid));
  let right = mergeSort2(arr.slice(mid));

  return merge2(left, right);
}

function merge2(arr1, arr2) {
  let result = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length)
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

console.log(mergeSort2([2, 32, 22, 2, 3, 3, 1, 1, 4]));
