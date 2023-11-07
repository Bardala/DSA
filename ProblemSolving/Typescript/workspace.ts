function subsets(nums: number[]): number[][] {
  let solution: number[][] = [];
  backtrack([], 0);
  return solution;

  function backtrack(subset: number[], index: number): void {
    // bounding condition
    if (index == nums.length) {
      solution.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    backtrack(subset, index + 1);
    subset.pop();
    backtrack(subset, index + 1);
  }
}

console.log(subsets([1, 2, 3]));
