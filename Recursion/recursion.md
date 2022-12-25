# RECURSION

# types of recursion

- https://www.geeksforgeeks.org/types-of-recursions/

## What is Recursion?

- Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem (as opposed to iteration).

- The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science.

- A recursive algorithm must have a base case. The base case is a solution to the base case.

- A recursive algorithm must change its state and move toward the base case.

- A recursive algorithm must call itself, recursively.

- In general, a recursive algorithm can be defined as follows:

- If the problem can be solved easily, solve it.

- Otherwise, divide the problem into a number of subproblems that are smaller instances of the same problem, and solve each subproblem by recursion. If the subproblem solutions are simple enough, combine them to solve the problem; otherwise, divide each subproblem into a number of even smaller subproblems and apply the same strategy.

- The solution to the original problem is the solution to the final subproblem.

## Pors and Cons of Recursion

### Pros

- Bridges the gap between the elegance and complexity.
- Reduces the need for complex loops and auxiliary data structures.
- Can reduce the complexity easily with memoization.
- Works really well with recursive structures like trees and graphs.

### Cons

- Slowness due to CPU overhead.
- Can lead to out of memory errors / stack overflow exceptions.
- Dan be unnecessarily complex if poorly constructed.

## Recursion vs. Iteration

- Iteration is a method of solving a problem where the solution depends on solutions to previous instances of the same problem (as opposed to recursion).

- Iteration is a more efficient approach than recursion.

- Iteration is more efficient because it does not require the creation of a new stack frame for each recursive call.
