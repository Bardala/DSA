function drawX(n) {
  let firstHalf = '';
  let secHalf = '';

  for (let r = 0; r < Math.ceil(n / 2); r++) {
    let row = '';
    let reversedRow = '';

    const numberOfBeginningAstrict = r;
    const numberOfMiddleAstrict = n - 2 - numberOfBeginningAstrict * 2;

    // draw beginning *
    for (let i = 0; i < numberOfBeginningAstrict; i++) {
      row += '*';

      // draw the reversed row from the beginning
      reversedRow += '*';
    }

    // then draw \
    if (r !== Math.ceil(n / 2) - 1) {
      row += `\\`;

      // reverse \ to / for reversed row
      reversedRow += '/';
    }

    // draw middle *
    for (let i = 0; i < numberOfMiddleAstrict; i++) {
      row += '*';

      // middle `*`s of the both rows are the same
      reversedRow += '*';
    }

    // if we in the middle row don't draw / or \, draw X for just the first half, as it contains the middle row
    if (r !== Math.ceil(n / 2) - 1) {
      row += '/';
      reversedRow += '\\';
    } else row += 'X';

    // draw end *
    for (let i = 0; i < numberOfBeginningAstrict; i++) {
      row += '*';
      reversedRow += '*';
    }

    // after draw every row add it for its half
    firstHalf += row + '\n';

    // don't first middle row to second half, as we added it for the first.
    if (r !== Math.ceil(n / 2) - 1)
      // add row in a reverse order for second half
      secHalf = reversedRow + '\n' + secHalf;
  }

  return firstHalf + secHalf;
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim(); // read stdin
console.log(drawX(input));
