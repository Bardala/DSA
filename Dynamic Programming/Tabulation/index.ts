/* 
*Tabulation 
 is a bottom-up approach, 
 where we start from the smallest sub-problems and build up the solution for the larger ones. 
*/

// * Tabulation Recipe
// 1. Visualize the problem as a table
// 2. Size the table based on the inputs
// 3. Initialize the table with default values
// 4. Seed the trivial answer into the table
// 5. Iterate through the table
// 6. Fill further positions based on the current position

// TC|O(n) SC|O(n)
let fibTabulated = (n: number): number => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

fibTabulated = (n: number): number => {
  const table = [0, 1];

  for (let i = 2; i <= n; i++) {
    table.push(table[i - 1] + table[i - 2]);
  }

  return table[n];
};
// console.log(fibTabulated(6));

// TC|O(nm) SC|O(nm)
function gridTravelerTabulated(n: number, m: number) {
  const grid: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));

  grid[1][1] = 1;

  for (let i = 0; i <= n; i++)
    for (let j = 0; j <= m; j++) {
      if (i + 1 <= n) grid[i + 1][j] += grid[i][j];
      if (j + 1 <= m) grid[i][j + 1] += grid[i][j];
    }

  return grid[n][m];
}

// console.log(gridTravelerTabulated(3, 3));
// console.log(gridTravelerTabulated(18, 18));

/*
 *Can Sum
 */
function canSumTabulated(targetSum: number, numbers: number[]) {
  const table: boolean[] = Array(targetSum + 1).fill(false);

  // zero sum is always possible
  table[0] = true;

  for (let i = 0; i <= targetSum; i++)
    if (table[i]) for (const num of numbers) table[i + num] = true;

  return table[targetSum];
}

console.log(canSumTabulated(7, [2, 4]));
console.log(canSumTabulated(7, [2, 3]));
console.log(canSumTabulated(7, [5, 3, 4, 7]));
console.log(canSumTabulated(7, [2, 4]));
console.log(canSumTabulated(8, [2, 3, 5]));
console.log(canSumTabulated(300, [7, 14]));
