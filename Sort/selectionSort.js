// *Selection Sort:
// 1. Find the smallest element in the array
// 2. Swap it with the first element
// 3. Repeat the process with the second element and so on
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// [5, 3, 8, 4, 2] => 2 is the smallest element, swap it with the first element 5
// [2, 3, 8, 4, 5] => 3 is the smallest element, swap it with the second element 3
// [2, 3, 8, 4, 5] => 4 is the smallest element, swap it with the third element 8
// [2, 3, 4, 8, 5] => 5 is the smallest element, swap it with the fourth element 8
// [2, 3, 4, 5, 8]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestPosition = i + getSmallestElement(arr.slice(i));

    [arr[i], arr[lowestPosition]] = [arr[lowestPosition], arr[i]];
  }
  return arr;
}

function getSmallestElement(arr) {
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[minIndex] > arr[i]) minIndex = i;
  }

  return minIndex;
}

console.log(selectionSort([5, 3, 8, 4, 2]));
console.log(selectionSort([38, 27, 43, 3, 9, 82, 10]));
console.log(selectionSort([]));
console.log(selectionSort([1]));
