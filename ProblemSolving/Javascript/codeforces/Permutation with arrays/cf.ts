const readline = require('readline');

function isPermutation(arr1, arr2) {
  const numsMap = new Map();

  for (let num of arr1) {
    const numCounts = numsMap.get(num);
    if (numsMap.has(num)) numsMap.set(num, numCounts + 1);
    else numsMap.set(num, 1);
  }

  for (let num of arr2) {
    const numCounts = numsMap.get(num);
    if (!numsMap.has(num) || numCounts === 0) return false;
    numsMap.set(num, numCounts - 1);
  }

  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on('line', line => {
  inputLines.push(line.trim());
  if (inputLines.length === 3) {
    const n = parseInt(inputLines[0]);
    const arr1 = inputLines[1].split(' ').map(Number);
    const arr2 = inputLines[2].split(' ').map(Number);

    const result = isPermutation(arr1, arr2);
    console.log(result ? 'yes' : 'no');
    rl.close();
  }
});
