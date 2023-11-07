const trailingZeroes = (n: number): number =>
  n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));

console.log(trailingZeroes(50));
