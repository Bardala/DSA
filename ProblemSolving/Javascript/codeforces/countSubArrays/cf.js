const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const arr = input[1].split(' ').map(Number);

console.log(generateSubArrays(arr));

function generateSubArrays(arr) {
  let numberOfSubArrays = arr.length;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const leftElement = arr[j];
      const rightElement = arr[j + 1];

      if (leftElement < rightElement) numberOfSubArrays++;
      else if (j === arr.length - 1) break;
      else {
        i = j;
        break;
      }
    }
  }

  return numberOfSubArrays;
}

console.log(generateSubArrays([1, 6, 3, 7]));
