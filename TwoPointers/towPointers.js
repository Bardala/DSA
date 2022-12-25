/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number[]}
 */
function twoSum(arr, num) {
  let right = arr.length - 1,
    left = 0;
  while (right > left) {
    if (arr[left] + arr[right] === num) {
      return [left, right];
    } else if (arr[left] + arr[right] > num) {
      right--;
    } else left++;
  }
  return [];
}

var twoSum = (numbers, target) => {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] === target) return [l, r];
    else if (numbers[l] + numbers[r] > target) r--;
    else l++;
  }
  return [];
};
var arr = [1, 2, 3, 4, 5];
console.log(twoSum(arr, 9));
console.log(twoSum([2, 7, 11, 15], 9));

/**
 * Maximum SubArray With Fixed Length
 */
var nums = [1, 2, 3, 4, 5, 6, -3],
  m = 4;
console.log(maxSubArray(nums, m));
// 1+2+3+4 = 10
//   2+3+4+5 = 14 // 10-1+5
//     3+4+5+6 = 18 // 14-2+6
//       4+5+6-3 = 12 // 18-3-3
function maxSubArray(nums, m) {
  let left = 0,
    right = 0,
    sum = 0,
    arr = [],
    max = 0;
  for (let i = 0; i < m; i++) {
    sum += nums[i];
  }
  max = sum;
  while (left + m < nums.length) {
    right = left + m;
    sum = sum - nums[left] + nums[right];
    arr.push(max);
    max = Math.max(max, sum);
    right = left + m;
    left++;
  }
  console.log(arr);
  return max;
}

/**
 * Maximum SubArray constrains by given sum (m).
 */
// var nums = [2, 4, 3, 9, 6, 3, 1, 5],
//   m = 10;
// console.log(maxSubArrayLessThanM(nums, m));
// function maxSubArrayLessThanM(nums, m) {
//   let l = 0,
//     r = 0,
//     sum = 0,
//     max = 0;
//   while (r < n) {
//     while (r < n && sum + nums[r] <= m) (sum += nums[r]), r++;
//     (max = Math.max(max, sum)), (sum -= nums[l]), l++;
//   }
//   return max;
// }

/**
 * Remove Duplicates From Sorted Array;
 */
function removeDuplicates(nums) {
  if (nums.length == 0) return [];
  let l = 0,
    r = 1;
  while (r < nums.length)
    if (nums[l] === nums[r]) nums.splice(r, 1);
    else r++, l++;
  return nums;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1]));
// nested Loop O(N^2);
//
var maxSubArray = (nums) => {
  let sum = 0,
    max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    max > sum ? max : (max = sum);
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      max > sum ? max : (max = sum);
    }
  }
  return max > sum ? max : (max = sum);
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1, -2]));
console.log(maxSubArray([-1, 0, -2]));

//Two Pointers
/**
 * 00. Maximum SubArray
 */

var maxSubArray = (nums) => {
  let sum = 0,
    max = nums[0];
  for (let i = 0; i < nums.length; ) {
    sum += nums[i];
    max = Math.max(sum, max);
    if (nums[i] + (sum - nums[i]) < 0) {
      if (i !== 0) nums.splice(0, i + 1), (i = 0);
      else nums.shift();
      sum = 0;
    } else i++;
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([2, -1, 1, 1]));
console.log(maxSubArray([8, -19, 5, -4, 20]));
console.log(maxSubArray([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
