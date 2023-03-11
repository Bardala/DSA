let a = Array(9);
let b = [2, 4, 6, 8];
for (let i = 0, l = 1; l < 10; i++, l += 2) {
  a[i] = l;
}
console.log(a);

const merge = (a, b, lastA, lastB) => {
  let indexMerge = lastA + lastB - 1;
  let indexA = lastA - 1;
  let indexB = lastB - 1;

  while (indexB >= 0) {
    if (a[indexA] > b[indexB]) {
      a[indexMerge--] = a[indexA--];
    } else {
      a[indexMerge--] = b[indexB--];
    }
  }
};

merge(a, b, 5, 4);

console.log(a);
