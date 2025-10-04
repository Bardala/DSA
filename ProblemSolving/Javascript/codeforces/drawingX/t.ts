function drawX(n: number) {
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
      reversedRow += '*';
    }

    // then draw \
    if (r !== Math.ceil(n / 2) - 1) {
      row += `\\`;
      reversedRow += '/';
    }

    // draw middle *
    for (let i = 0; i < numberOfMiddleAstrict; i++) {
      row += '*';
      reversedRow += '*';
    }

    if (r !== Math.ceil(n / 2) - 1) {
      row += '/';
      reversedRow += '\\';
    } else row += 'X';

    // draw end *
    for (let i = 0; i < numberOfBeginningAstrict; i++) {
      row += '*';
      reversedRow += '*';
    }

    firstHalf += row + '\n';
    if (r !== Math.ceil(n / 2) - 1) secHalf = reversedRow + '\n' + secHalf;
  }

  return firstHalf + secHalf;
}

console.log(drawX(3));
console.log(drawX(5));
console.log(drawX(7));
