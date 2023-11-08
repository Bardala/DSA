function findMaxLength(nums: number[]): number {
  if (nums.length <= 1) return 0;
  let start = 0,
    end = 0,
    maxLength = 0,
    ones = 0,
    zeroes = 0;

  while (end < nums.length) {
    nums[end] === 1 ? ones++ : zeroes++;
    ones === zeroes && (maxLength = Math.max(maxLength, end - start + 1));
    end++;
  }
  end--;
  while (start < nums.length) {
    nums[start] === 1 ? ones-- : zeroes--;
    start++;
    ones === zeroes && (maxLength = Math.max(maxLength, end - start + 1));
  }
  return maxLength;
}

let arr = [
  0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
  1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1,
  1,
];

console.log(findMaxLength(arr));
