// Tail recursion reduces the space complexity of the function
// from O(n) to O(1) with the help of the tail-call-elimination method.
// As no new function call occurs, no new stack frames are created,
// and the function is created in constant memory space.

/**
 * Fibonacci
 */

// Head Recursion
var fibonacci = (num) => {
  // time complexity: O(2^n)
  // space complexity: O(n)
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};
// console.log(fibonacci(50));
// output:
// 12586269025
// [Done] exited with code=0 in 179.611 seconds

// Tail Recursion
var fibonacci = (num, res = 1, prev = 0) => {
  // time complexity: O(n)
  // space complexity: O(1)
  if (num <= 1) return res;

  return fibonacci(num - 1, res + prev, res);
};

console.log(fibonacci(500));
// 1.394232245616977e+104
// [Done] exited with code=0 in 0.136 seconds
