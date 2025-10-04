function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i <= j; ) {
    const strChar = str[i].toLowerCase();
    const reverseChar = str[j].toLowerCase();

    if (strChar === ' ') {
      i++;
      continue;
    }
    if (reverseChar === ' ') {
      j--;
      continue;
    }
    if (strChar !== reverseChar) return false;
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome('Race car'));
console.log(isPalindrome('hello'));

function findDuplicates(nums) {
  nums = nums.sort();
  const result = [];
  let currentDuplicate;

  for (let i = 0; i < nums.length - 1; i++) {
    const currentElement = nums[i];
    const nextElement = nums[i + 1];

    if (currentDuplicate === currentElement) continue;

    if (currentElement === nextElement) {
      result.push(currentElement);
      currentDuplicate = currentElement;
    }
  }

  return result;
}

console.log(findDuplicates([1, 2, 3, 4, 5])); // => []
console.log(findDuplicates([1, 2, 3, 2, 1, 4])); // => [2, 1]
console.log(findDuplicates([7, 7, 7, 7])); // => [7]
console.log(typeof null);
console.log('5' + 3 - 2);
