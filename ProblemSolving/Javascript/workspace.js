function findSubsets(subset, nums, output, index) {
  // Base Condition
  if (index == nums.length) {
    subset.push(output);
    return;
  }

  // Not Including Value which is at Index
  findSubsets(subset, nums, [...output], index + 1);

  // Including Value which is at Index
  output.push(nums[index]);
  findSubsets(subset, nums, [...output], index + 1);
}

// Driver Code
let nums = [1, 2, 3];
let subset = [];
findSubsets(subset, nums, [], 0);
console.log(subset);
// Create a recursive function that takes the following parameters, input array, the current index, the output array, or current subset,
// if all the subsets need to be stored then a vector of the array is needed if the subsets need to be printed only then this space can be ignored.
// First, print the subset (output array) that has been sent to the function and then run a for loop starting from the ‘index’ to n-1 where n is the size of the input array. We use a loop to demonstrate that we have exactly n number of choices to choose from when adding the first element to our new array.
// Inside the loop, we call the function for the next index after inserting that particular index and then in the next call, we again have (n-1) choices to choose from and so it goes.
// Whenever a call is made for the last index of the array : in that function call, the loop is not run as the condition i<A.size() is not fulfilled and hence, we backtrack to the last recursion call and call the function for the next index after removing the element at that current index.
