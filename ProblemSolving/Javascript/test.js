function subsets(nums) {
    let solution = [];
    backtrack([], 0);
    return solution;

    function backtrack(subset, index) {
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
