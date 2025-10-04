// function helpXenia(s: string): string {
//   const map = new Map<string, number>();
//   map.set('1', 0)
//   map.set('2', 0)
//   map.set('3', 0)

//   for (let c of s) {
//     const counts = map.get(c)!;
//     map.set(c, counts + 1 );
//   }

// }
function helpXenia(s) {
  let one = 0,
    two = 0,
    three = 0;

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

  s = '';

  for (let i = 0; i < one; i++) {
    s += '1+';
  }

  for (let i = 0; i < two; i++) {
    s += '2+';
  }

  for (let i = 0; i < three; i++) {
    s += '3+';
  }

  return s.substring(0, s.length - 1);
}

console.log(helpXenia('3+2+1'));
console.log(helpXenia('1+1+3+1+3'));
console.log(helpXenia('2'));
