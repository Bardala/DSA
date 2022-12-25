let arr = [4, 8, 1, 0, 2, 7, 5];
function quickSort(arr) {
  let pivot = arr[Math.floor(arr.length / 2)];
}
// [4, 8, 1, 0, 2, 7, 5]          |     [0, 1, 2, 4, 5, 7, 8]

// [] [0] [4, 8, 1, 2, 7, 5]      |     [0, 1, 2, 4, 5, 7, 8]

//        [1] [2] [4, 8, 7, 5]    |     [1, 2, 4, 5, 7, 8]

//                [4, 5] [7] [8]  |     [4, 5, 7, 8]

//             [] [4] [5]         |     [4, 5]

// The base case is an empty array or array of one element
