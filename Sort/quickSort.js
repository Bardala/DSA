/** Quick Sort 
 * It is a divide and conquer algorithm.
  It works by selecting a 'pivot' element from the array and partitioning the other elements into 
  two sub-arrays according to whether they are less than or greater than the pivot.
  The sub-arrays are then sorted recursively. This can be done in-place, 
  requiring small additional amounts of memory to perform the sorting.
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let midIndex = Math.floor(arr.length / 2);
  let pivot = arr[midIndex];
  let left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    if (curr <= pivot && i !== midIndex) left.push(curr);
    else if (curr > pivot) right.push(curr);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [4, 8, 1, 0, 2, 7, 5];
console.log(quickSort(arr));
console.log(quickSort([1, 2, 5, 5, 0, 0, 0, 4, -2, 3]));

// [4, 8, 1, 0, 2, 7, 5]          |     [0, 1, 2, 4, 5, 7, 8]

// [] [0] [4, 8, 1, 2, 7, 5]      |     [0, 1, 2, 4, 5, 7, 8]

//        [1] [2] [4, 8, 7, 5]    |     [1, 2, 4, 5, 7, 8]

//                [4, 5] [7] [8]  |     [4, 5, 7, 8]

//             [] [4] [5]         |     [4, 5]

// The base case is an empty array or array of one element
