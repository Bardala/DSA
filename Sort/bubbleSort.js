// Bubble Sort

// Bubble Sort is the simplest sorting algorithm that works
// by repeatedly swapping the adjacent elements if they are in wrong order.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(bubbleSort([1, 2, 5, 5, 0, 0, 0, 4, -2, 3]));

// 1, 2, 5, 5, 0, 0, 0, 4, -2, 3
//          |  |
// 1, 2, 5, 0, 5, 0, 0, 4, -2, 3
//             |  |
// 1, 2, 5, 0, 0, 5, 0, 4, -2, 3
//                |  |
// 1, 2, 5, 0, 0, 0, 5, 4, -2, 3
//                   |  |
// 1, 2, 5, 0, 0, 0, 4, 5, -2, 3
//                      |  |
// 1, 2, 5, 0, 0, 0, 4, -2, 5, 3
//                         |  |
// 1, 2, 5, 0, 0, 0, 4, -2, 3, 5
//                            |  |
// 1, 2, 5, 0, 0, 0, 4, -2, 3, 5
//       |  |
// 1, 2, 0, 5, 0, 0, 4, -2, 3, 5
//          |  |
// 1, 2, 0, 0, 5, 0, 4, -2, 3, 5
//             |  |
// 1, 2, 0, 0, 0, 5, 4, -2, 3, 5
//                |  |
// 1, 2, 0, 0, 0, 4, 5, -2, 3, 5
//                   |  |
// 1, 2, 0, 0, 0, 4, -2, 5, 3, 5
//                      |  |
// 1, 2, 0, 0, 0, 4, -2, 3, 5, 5
//    |  |
// 1, 0, 2, 0, 0, 4, -2, 3, 5, 5
// ....
