/**
 **Dynamic programming can be implemented using two methods: 
 tabulation and memoization. 

 **Memoization
  is a top-down approach, where we start from the original problem and store the results of the sub-problems in a table or an array,
  so that we do not have to re-compute them later12.
 */
/* 
* Memoization 
is a top-down approach, where we start from the original problem 
and store the results of the sub-problems in a table or an array, 
so that we do not have to re-compute them later12. 
*/

// * Memoization Recipe
// 1. Make it work
// 2. Make it efficient
// 3. Add a memo object
// 4. Add a base case to return memo values
// 5. Store return values into the memo

// fibonacci
// // var fib = (n: number): number => {
// //   if (n <= 2) return 1;
// //   return fib(n - 1) + fib(n - 2);
// // };

var fib = function (n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
// console.log(fib(50));

// *TC|O(2^(n+m)) SC|O(n+m) brute force
// // var gridTraveler = function (n: number, m: number): number {
// //   if (n === 0 || m === 0) return 0;
// //   if (n === 1 || m === 1) return 1;

// //   return gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
// // };

// *TC|O(m*n) SC|O(n+m) memoized
var gridTraveler = (n: number, m: number, memo: Record<string, number> = {}): number => {
  const index: string = n + ',' + m;

  if (index in memo) return memo[index];
  if (n === 0 || m === 0) return 0;
  if (n === 1 || m === 1) return 1;

  memo[index] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[index];
};

// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(18, 18));

/**
 ** Time Complexity
 Sure, I'll try to explain it again. The time complexity of the recursive canSum function is the number of operations that the function performs in the worst case scenario. The worst case scenario is when none of the numbers in nums can sum up to the target, so we have to try every possible combination of numbers. 
To find the number of possible combinations, we can think of each recursive call as a branching point, where we have m choices of numbers to subtract from the target, where m is the length of nums. For example, if nums = [2, 3, 5] and target = 10, then we have 3 choices: subtract 2, subtract 3, or subtract 5. Each choice leads to a smaller target and a new recursive call. 
We can represent this process as a tree, where each node is a recursive call and each edge is a choice of number. The root node is the original target, and the leaf nodes are the base cases (when target is 0 or negative). Here is an example of such a tree:
![canSum tree](https://i.stack.imgur.com/9zZaT.png)
The time complexity is proportional to the number of nodes in this tree, since each node represents one recursive call. To count the number of nodes, we can use the formula for the number of nodes in a full binary tree: 2^(h+1) - 1, where h is the height of the tree. In our case, h is equal to n, where n is the original target, since we can make at most n recursive calls before reaching a base case. Therefore, the number of nodes is 2^(n+1) - 1, which is O(2^n).
Alternatively, we can use another formula for the number of nodes in a full m-ary tree: (m^(h+1) - 1) / (m - 1), where h is the height of the tree and m is the number of children per node. In our case, h is equal to n and m is equal to the length of nums. Therefore, the number of nodes is (m^(n+1) - 1) / (m - 1), which is O(m^n).
Both formulas give us the same asymptotic time complexity, O(2^n) or O(m^n), since they differ by a constant factor. This means that the function grows exponentially with respect to n or m.
 */
// *TC|O(m^n) SC|O(n) brute force, m = nums.length, n = target, OR
// *TC|O(2^n) SC|O(n), m = nums.length, n = target
// // function canSum(target: number, nums: number[]): boolean {
// //   if (target < 0) return false;
// //   if (!target) return true;

// //   for (let num of nums) {
// //     if (canSum(target - num, nums)) {
// //       return true;
// //     }
// //   }

// //   return false;
// // }

// *
// *memoized solution
// *TC|O(m*n) SC|O(m*n) memoized, m = nums.length, n = target
/**
 * *Time Complexity
The space complexity of this function is also O(n * m), 
because we have to store the results of all possible targets in the memo object, 
which has n keys and each key has a boolean value. Additionally, 
we have to account for the space used by the call stack, 
which can be as deep as m in the worst case (when none of the numbers can sum up to the target).
 */
function canSum(target: number, nums: number[], memo: Record<number, boolean> = {}): boolean {
  if (target in memo) return memo[target];
  if (target < 0) return false;
  if (!target) return true;

  for (let num of nums) {
    if (canSum(target - num, nums, memo)) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
}

// console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(7, [2, 4])); // false
// console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(300, [7, 14])); // false

/**
 * *howSum
 */

// *brute force
// *TC|O(n* m^n) SC|O(n*m), n: the length of the array, m: target
// // function howSum(target: number, nums: number[]): number[] {
// //   if (!target) return [];
// //   if (target < 0) return null;

// //   for (let num of nums) { O(n)
// //     let result: number[] = howSum(target - num, nums); O()
// //     if (result) {
// //       return [...result, num]; O(m)
// //     }
// //   }

// //   return null;
// // }

// *memoized
// *TC|O(n * m^2) SC|O(n * m^2)

function howSum(target: number, nums: number[], memo: Record<number, number[]> = {}): number[] {
  if (!target) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  for (let num of nums) {
    // TC|O(n)
    let result: number[] = howSum(target - num, nums, memo); // TC|O(m)
    if (result) {
      memo[target] = [...result, num]; // TC|O(m), SC|O(n * m * m)
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
}

// console.log(howSum(7, [2, 3])); // [3, 2, 2]
// console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
// console.log(howSum(7, [2, 4])); // null
// console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); // null

/*
 * *Best Sum
 */

function bestSum(target: number, nums: number[], result: number[] = null): number[] {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of nums) {
    const remainder = target - num;
    const returnedVal = bestSum(remainder, nums, result);

    if (returnedVal) {
      const combination = [...returnedVal, num];

      if (!result || result.length > combination.length) {
        result = combination;
      }
    }
  }

  return result;
}

// console.log(bestSum(8, [2, 3, 5]));

/**
 * Can-construct
 */
// TC|O(m*n^m) SC|O(m^2), m-> target length n-> wordBank length
// // function canConstruct(target: string, wordBank: string[]): boolean {
// //   if (target === '') return true;

// //   for (let str of wordBank) {
// //     if (target.indexOf(str) === 0) {
// //       const result = canConstruct(target.substring(str.length), wordBank);
// //       if (result) return true;
// //     }
// //   }

// //   return false;
// // }

// memoized
// TC|O(n*m^2) SC|O(m^2)
function canConstruct(
  target: string,
  wordBank: string[],
  memo: Record<string, boolean> = {},
): boolean {
  if (target === '') return true;
  if (target in memo) return memo[target];

  for (let str of wordBank) {
    const suffix = target.slice(str.length);
    if (target.indexOf(str) === 0 && canConstruct(suffix, wordBank, memo)) {
      memo[suffix] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
}

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
// console.log(canConstruct('eeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false

/**
 * Count Construct
 */

// // function countConstruct(target: string, wordBank: string[]): number {
// //   if (target === '') return 1;

// //   let totalNumWays = 0;

// //   for (let word of wordBank) {
// //     if (target.indexOf(word) === 0) {
// //       const suffix = target.slice(word.length);
// //       const numWaysForRest = countConstruct(suffix, wordBank);
// //       totalNumWays += numWaysForRest;
// //     }
// //   }

// //   return totalNumWays;
// // }

function countConstruct(
  target: string,
  wordBank: string[],
  memo: Record<string, number> = {},
): number {
  if (target === '') return 1;
  if (target in memo) return memo[target];

  let totalNumWays = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank, memo);
      totalNumWays += numWaysForRest;
    }
  }

  memo[target] = totalNumWays;
  return totalNumWays;
}

// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4

/**
 * All Construct
 */

// TC|O(n^m * m) SC|O(m*m)
// // function allConstruct(target: string, wordBank: string[]): string[][] {
// //   if (target === '') return [[]];

// //   const result: string[][] = [];

// //   for (let word of wordBank) {
// //     if (target.indexOf(word) === 0) {
// //       const suffix = target.slice(word.length);
// //       const suffixWays = allConstruct(suffix, wordBank);
// //       const targetWays = suffixWays.map(way => [word, ...way]);
// //       result.push(...targetWays);
// //     }
// //   }

// //   return result;
// // }

// TC|O(n * m^2) SC|O(n*m)
function allConstruct(
  target: string,
  wordBank: string[],
  memo: Record<string, string[][]> = {},
): string[][] {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result: string[][] = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
}

// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ]
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'abc', 'def' ] ]
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // [ [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ], [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't' ], [ 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot' ], [ 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't' ] ]
// console.log(allConstruct('eeeeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
