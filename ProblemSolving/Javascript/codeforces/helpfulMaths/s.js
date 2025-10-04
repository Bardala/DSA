function helpfulMaths(s) {
  return s.split('+').sort().join('+');
}

// TC|O(N logN) SC|O(N)
function helpfulMaths(s) {
  // let's convert the string into array with ignoring +
  const arr = s.split('+');

  // sort the array in increasing order
  arr.sort();

  // convert the array into string and adding + between every two digits
  s = arr.join('+');

  // returning the sorted string
  return s;
}

// TC|O(N) SC|O(1)
function helpfulMaths(s) {
  // initialize counters by zero
  let one = 0,
    two = 0,
    three = 0;

  // check counts for every digit
  for (let c of s) {
    switch (c) {
      case '1':
        one += 1;
        break;
      case '2':
        two += 1;
        break;
      case '3':
        three += 1;
        break;
      default:
        break;
    }
  }

  // So now we have counted all digits, which is all information about the input string
  // let's empty the string to put it the new arrangement
  s = '';

  // first, let's put the ones
  for (let i = 0; i < one; i++) {
    s += '1+';
  }

  // then twos
  for (let i = 0; i < two; i++) {
    s += '2+';
  }

  // then threes
  for (let i = 0; i < three; i++) {
    s += '3+';
  }

  // returning the string without the leading '+'
  return s.substring(0, s.length - 1);
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim(); // read stdin
console.log(helpfulMaths(input));
