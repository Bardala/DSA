class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/*
 *1. Ugly number
 ** Time complexity: O(log⁡(N))
 ** SC|O(1)
 */

//  var isUgly = function (n) {
//   if (n < 0) return false;
//   function keepDividingWhileDivisible(dividend, divisor) {
//     while (dividend % divisor == 0) dividend /= divisor;
//     return dividend;
//   }
//   for (let factor of [2, 3, 5]) {
//     n = keepDividingWhileDivisible(n, factor);
//   }
//   return n == 1;
// };

function isUgly(n) {
  if (n === 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
}
console.log(isUgly(20));

/**
 * Two Sum
 ** Hash Table
 ** Time Complexity O(n)
 ** Space Complexity O(n)
 */
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
// console.log(twoSum([2, 7, 11, 15], 9));

/**
 * 2. Palindrome Number
 */
// function isPalindrome(x) {
//   return x == x.toString().split("").reverse().join("");
// }

// console.log(isPalindrome(123));

function isPalindrome(x) {
  let rev = 0;
  let num = x;
  while (num > 0) {
    rev = (num % 10) + rev * 10;
    num = Math.floor(num / 10);
  }
  return x == rev;
}

function isPalindrome(x, num = x, rev = 0) {
  if (x <= 0) return num === rev;

  rev = (x % 10) + rev * 10;
  x = Math.floor(x / 10);

  return isPalindrome(x, num, rev);
}
console.log(isPalindrome(010));

/**
 * 3. Roman to Integer
 ** Hash Table
 ** TC|O(N)   SC|O(N)
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */
// function romanToInt(s) {
//   let map = new Map();
//   map.set("I", 1);
//   map.set("V", 5);
//   map.set("IV", 4);
//   map.set("X", 10);
//   map.set("IX", 9);
//   map.set("L", 50);
//   map.set("XL", 40);
//   map.set("C", 100);
//   map.set("XC", 90);
//   map.set("D", 500);
//   map.set("CD", 400);
//   map.set("M", 1000);
//   map.set("CM", 900);

//   let arr = s.split("");
//   let res = 0;
//   let val = "";
//   if (arr.length === 1) return map.get(arr[0]);
//   while (arr.length > 0) {
//     let i = arr.length - 2;
//     val = arr[i] + arr[i + 1];
//     if (map.has(val)) {
//       res += map.get(val);
//       arr.pop();
//       arr.pop();
//     } else {
//       res += map.get(arr[i + 1]);
//       arr.pop();
//     }
//     if (arr.length == 1) {
//       res += map.get(arr[0]);
//       arr.pop();
//     }
//   }
//   return res;
// }

var romanToInt = (s) => {
  let res = 0;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    const num = map[s[i]];
    const nextNum = map[s[i + 1]];
    if (num < nextNum) {
      res += nextNum - num;
      i++;
    } else res += num;
  }
  return res;
};

//console.log(romanToInt("MCMXCIV"));

/**
 *4. Longest Common Prefix
 */

function longestCommonPrefix(strs) {
  if (strs.length === "") return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0)
      prefix = prefix.substring(0, prefix.length - 1);
  }
  return prefix;
}

const strs = ["flower", "flow", "flight"];
//console.log(longestCommonPrefix(strs));

/**
 * 5. Remove Duplicates from Sorted Array
 */
function removeDuplicates(nums) {
  if (nums.length == 0) return [];
  for (let i = 0; i < nums.length; )
    nums[i] === nums[i + 1] ? nums.splice(i, 1) : i++;
  return; //console.log(nums);
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3]);
removeDuplicates([1, 1, 2]);

/**
 * 6. Remove Element
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; ) nums[i] == val ? nums.splice(i, 1) : i++;
  return [nums.length, nums];
};

var nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
//console.log(removeElement(nums, val));

/**
 *7. Reverse String
 */
// var reverseString = function (s) {
//   let temp = "";
//   for (let i = 0; i < s.length / 2; i++) {
//     temp = s[i];
//     s[i] = s[s.length - 1 - i];
//     s[s.length - 1 - i] = temp;
//   }
//   return s;
// };

function reverseString(s) {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++, end--;
  }
  return s;
}
//console.log(reverseString(["o", "l", "l", "e", "h"]));

/**
 * 8. Reverse String II
 */
function reverseStr(s, k) {
  let arr = s.split("");
  arr = arr.splice(0, k).reverse();
  return arr.join("") + s.slice(k);
}
//console.log(reverseStr("abcdefg", 3));

/**
 *9. Factorial Trailing Zeroes
 */
// var trailingZeroes = function (n) {
//   let count = 0;
//   for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);
//   return count;
// };

// function zeros(n) {
//   return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
// }
function trailingZeroes(num) {
  const divider = Math.floor(num / 5);
  let res = 0;
  for (let val = Math.floor(divider / 5); val > 0; ) {
    res += val;
    val = Math.floor(val / 5);
  }
  return divider + res;
}
//test
// for (let i = 0; i <= 200; i++) {
//   console.log(`${i}! = ` + trailingZeroes(i));
// }

/**
 *10. Is Subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  if (t.indexOf(s) > 0) return true;

  let map = new Map();
  let tSequence = "";

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], s[i]);
    }
  }

  for (let i of t) if (map.has(i)) tSequence += i;

  return s === tSequence;
}
let s = "leeeeeetcode";
let t =
  "yyyyylyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyytyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyoyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
// console.log(isSubsequence(s, t));

/**
 *11. Find Pivot Index
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 0) return 0;
  let leftSum = 0,
    sum = 0;
  for (let i of nums) sum += i;
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) leftSum += nums[i - 1];
    if (leftSum === sum - leftSum - nums[i]) return i;
  }
  return -1;
};
var arr = [1, 7, 3, 6, 5, 6];
//console.log(pivotIndex(arr));

/**
 * 12. Running Sum of 1d Array
 */
function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) nums[i] = nums[i] + nums[i - 1];
  return nums;
}
var arr = [1, 2, 3, 4];
//console.log(runningSum(arr));
// Output: [1,3,6,10]

/**
 * 13. The kth Factor of n
 */
function kthFactor(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) arr.push(i);
  return k > arr.length ? -1 : arr[k - 1];
}
//console.log(kthFactor(7, 3));

/**
 * 14. Longest Subarray of 1's After Deleting One Element
 */

// var longestSubarray = function (A) {
//   let i = 0,
//     j,
//     k = 1;
//   for (j = 0; j < A.length; ++j) {
//     if (A[j] == 0) k--;
//     if (k < 0 && A[i++] == 0) k++;
//   }
//   return j - i - 1;
// };

var longestSubarray = function (nums) {
  let repo = [0],
    counter = 0,
    max = 0,
    temp = 0;
  for (let i of nums) {
    i ? repo.push(repo.pop() + 1) : repo.push(0);
    counter += i;
  }
  if (counter === nums.length) return counter - 1;
  for (let i = 0; i < repo.length - 1; i++) {
    temp = repo[i] + repo[i + 1];
    max > temp ? max : (max = temp);
  }
  return max;
};
//console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));

/**
 * 15. Check If Two String Arrays are Equivalent
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") == word2.join("");
};

/**
 * 16. Binary Search
 */
var search = function (nums, target) {
  if (target === nums[0]) {
    return 0;
  }
  let end = nums.length - 1,
    start = 0,
    res = 0,
    mid = Math.ceil(nums.length / 2);
  for (let i = 1; i <= Math.ceil(Math.log2(nums.length)); i++) {
    if (target === nums[mid]) {
      res = mid;
      break;
    } else if (target > nums[mid]) start = mid;
    else end = mid;
    mid = Math.ceil((end + start) / 2);
  }
  return res ? res : -1;
};

var nums = [-1, 0, 3, 5, 9, 12],
  target = 6;
//console.log(search(nums, target));
//console.log(search([0], 0));

/**
 *17. Search Insert Position
 */
var searchInsert = function (nums, target) {
  let end = nums.length - 1,
    start = 0,
    res = 0,
    mid = Math.ceil(nums.length / 2);
  if (target === nums[0] || target < nums[0]) {
    return 0;
  } else if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (let i = 1; i <= Math.ceil(Math.log2(nums.length)); i++) {
    if (target === nums[mid]) {
      res = mid;
      break;
    } else if (target > nums[mid]) start = mid;
    else end = mid;
    mid = Math.ceil((end + start) / 2);
  }
  return mid;
};
var nums = [1, 3, 5, 6],
  target = 88;
//console.log(searchInsert(nums, target));

/**
 * 18. Binary Tree Postorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];
  function helper(root) {
    if (root) {
      helper(root.left);
      helper(root.right);
      res.push(root.val);
    }
  }
  helper(root);
  return res;
};
// Input: root = [1,null,2,3]
// Output: [3,2,1]

/**
 *00. First Bad Version
 */
var solution = function (isBadVersion) {
  /**
     * @param {leteger} n Total versions
     * @return {leteger} The first bad version
     * 
     Scenario #1: isBadVersion(mid) => false
      1 2 3 4 5 6 7 8 9
      G G G G G G B B B       G = Good, B = Bad
      |       |       |
      left    mid    right

      Scenario #2: isBadVersion(mid) => true
      1 2 3 4 5 6 7 8 9
      G G G B B B B B B       G = Good, B = Bad
      |       |       |
      left    mid    right

     */
  return function (n) {
    let lo = 0;
    let hi = n - 1;
    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(mid)) hi = mid - 1;
      else lo = mid + 1;
    }
    return lo;
  };
};

/**
 * 19. Squares of a Sorted Array
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) nums[i] = nums[i] ** 2;
  return nums.sort((a, b) => a - b);
};
var nums = [-4, -1, 0, 3, 10];

/**
 * 20. Rotate Array
 */
// var rotate = function(nums, k) {
//   for (let i = 0; i < k; i++) {
//        nums.unshift(nums.pop());
//    }
// };
// var rotate = function(nums, k) {
//   nums.splice(nums.length - k, k)
// };
var rotate = function (nums, k) {
  if (k > nums.length && k % 2 !== 0) return nums.reverse();
  return nums.splice(nums.length - k, k).concat(...nums);
};

var nums = [1, 2],
  k = 5;
//console.log(rotate(nums, k));

/**
 * 21. Valid Parentheses
 ** Regex
 ** stack O(n) ,
 * Set is better than Map to store () {} [], Map doesn't work with me
 */
var isValid = (str) => {
  let set = new Set(),
    arr = str.split(""),
    check = "";
  set.add("()");
  set.add("[]");
  set.add("{}");
  if (str.length % 2 !== 0) return false;
  for (let i = 0; i < str.length && i >= 0; ) {
    check = arr[i] + arr[i + 1];
    if (set.has(check) && i == 0) {
      arr.splice(i, 2);
      if (arr.length == 0) return true;
    } else if (set.has(check)) arr.splice(i, 2), i--;
    else i++;
  }
  return arr.length == 0;
};

var isValid = (str) => {
  for (let i = str.length / 2; i > 0; i--) {
    str = str.replace(/\(\)|\[\]|\{\}/, "");
  }
  return str.length == 0;
};

// Stack
var isValid = (str) => {
  let stack = [];

  for (let c of str)
    switch (c) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (stack.pop() !== c) return false;
    }

  return stack.length === 0;
};
//test
//console.log(isValid("([{({})}])"));
//console.log(isValid("([{})}])"));
//console.log(isValid("()[]{}"));

/**
 * 22. Move Zeroes
 */
var moveZeroes = function (nums) {
  for (let i = 0, j = 0; i < nums.length; i++)
    nums[j] === 0 ? nums.push(...nums.splice(j, 1)) : j++;
  return nums;
};
//tests
var nums = [0, 1, 0, 3, 12];
//console.log(moveZeroes(nums));
//console.log(moveZeroes([0, 0]));
//console.log(moveZeroes([0, 0, 1]));

/**
 * 23. Two Sum II - Input Array Is Sorted
 *
 * the function below help you to get key from Map by its value :
 function getByValue(map, searchValue) { 
  for (let [key, value] of map.entries()) {
    if (value === searchValue) return key;
  }
}
 */
var twoSum = function (numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) map.set(numbers[i], i);
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i]))
      return [i + 1, map.get(target - numbers[i]) + 1];
  }
};
// test
var numbers = [2, 7, 11, 15],
  target = 9;
//console.log(twoSum(numbers, target));
var numbers = [2, 3, 4],
  target = 6;
//console.log(twoSum(numbers, target));
var numbers = [-1, 0],
  target = -1;
//console.log(twoSum(numbers, target));

/**
 * 24. Merge Two Sorted Lists
 ** Tail Recursion
 ** TC: O(n + m) , SC: O(n + m)
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(0); // dummy node to start the result list with a dummy node
  let current = head; // current node to build the result list

  while (list1 && list2) {
    // if list1 or list2 is null, the loop will stop
    if (list1.val < list2.val) {
      current.next = list1; // add list1 node to the result list
      list1 = list1.next; // move list1 to the next node
    } else {
      current.next = list2; // add list2 node to the result list
      list2 = list2.next; // move list2 to the next node
    }
    current = current.next; // move current to the next node
  }
  current.next = list1 || list2; // add the remaining nodes to the result list
  return head.next; // return the result list without the dummy node
};

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// Tail Recursion
var mergeTwoLists = (l1, l2, head) => {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val < l2.val) {
    head = l1;
    head.next = mergeTwoLists(l1.next, l2);
  } else {
    head = l2;
    head.next = mergeTwoLists(l1, l2.next);
  }
  return head;
};

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// console.log(mergeTwoLists(list1, list2))

/**
 * 25. Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let match = s.match(/\w+/gi);
  return match[match.length - 1].length;
};
//console.log(lengthOfLastWord("   fly me   to   the moon  "));

/**
 * 26. Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
/**
 * Your solution must deal with big numbers like:
     [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 0, 0, 0] and bigger.
 */
// var plusOne = function (digits) {
//   let num = 0;
//   let str = digits.join("");
//   num = parseInt(str);
//   num++;
//   console.log(num);
//   str = num.toString(); // my mistake was -> str = toString(num)
//   digits = str.split("");
//   return digits;
// };// this solution does not work with big numbers.

var plusOne = (digits) => {
  let length = digits.length;
  for (let i = 1; i < length + 1; i++) {
    if (digits[length - i] + 1 == 10) {
      digits.splice(length - i, 1, 0);
      if (digits.length - i == 0) {
        digits.unshift(0);
        length = digits.length;
      }
    } else {
      digits.splice(length - i, 1, digits[length - i] + 1);
      break;
    }
  }
  return digits;
};

// test
//console.log(plusOne([9]));
//console.log(plusOne([9, 1]));
//console.log(plusOne([1, 9, 9, 9]));
//console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 0, 0, 0]));

/**
 * 27. Add Binary
 * to convert binary to decimal : parseInt(binary, 2)
 * to convert decimal to binary : decimal.toString(2)
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
};
// test
//console.log(addBinary("11", "1"));

var addBinary = function (a, b) {
  let sum = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let x = i >= 0 ? a[i] - "0" : 0;
    let y = j >= 0 ? b[j] - "0" : 0;
    let temp = x + y + carry;
    sum = (temp % 2) + sum;
    carry = Math.floor(temp / 2);
    i--;
    j--;
  }
  if (carry != 0) sum = carry + sum;
  return sum;
};

//console.log(addBinary("1010", "1011"));
//console.log(5 % 6);

/**
 * 28. Sqrt(x)
 */
var mySqrt = function (x) {
  for (let i = 1; ; i++) {
    if (x == i ** 2) return i;
    else if (x < i ** 2) return i - 1;
  }
};
//console.log(mySqrt(9));

var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid ** 2 == x) return mid;
    else if (mid ** 2 < x) left = mid + 1;
    else right = mid - 1;
  }
  return right;
};

/**
 * 29. Climbing Stairs
 */
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
//console.log(climbStairs(3));
//console.log(climbStairs(4));
//console.log(climbStairs(5));
/**
 * 30. Substring with Concatenation of All Words
 */
var merge = function (nums1, m, nums2, n) {
  if (m === 0) return (nums1 = nums2);
  nums1 = nums1.splice(0, m).concat(...nums2);
  nums1 = nums1.sort((a, b) => a - b);
  return nums1;
};
//console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
//console.log(merge([1], 1, [], 0));
// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;
//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
//   return nums1;
// }

/**
 * 31. Longest Substring Without Repeating Characters
 ** Sliding Window && Hash Map
 ** TC : O(n), SC : O(n)
 */
var lengthOfLongestSubstring = function (s) {
  let arr = s.split(""),
    repeats = 0,
    set = new Set(),
    i = 0;
  if (arr.length === 1) return 1;
  while (arr.length !== 0 && arr.length >= i) {
    if (set.has(arr[i]) || i == arr.length) {
      i > repeats ? (repeats = i) : repeats;
      arr.shift();
      set.clear();
      i = 0;
    } else {
      set.add(arr[i]);
      if (arr.length === 1) i;
      else i++;
    }
  }
  return repeats;
};
//test
//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
//console.log(lengthOfLongestSubstring("b"));
//console.log(lengthOfLongestSubstring("pwwkew"));
//console.log(lengthOfLongestSubstring("au"));

var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    max = 0;
  let set = new Set();
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right++]);
      max = Math.max(max, right - left);
    } else {
      set.delete(s[left++]);
    }
  }
  return max;
};
//test
//console.log(lengthOfLongestSubstring("abcabcbb"));

/**
 * 32. Reverse Words in a String III
 *
 * @param {string} s
 * @returns string
 */

var reverseWords = function (s) {
  let reversed = "",
    reversedString = "";
  for (let i of s) {
    if (i !== " ") {
      reversed = i + reversed;
    } else {
      reversedString.length !== 0
        ? (reversedString += " " + reversed)
        : (reversedString += reversed);
      reversed = "";
    }
  }
  return reversedString.length === 0
    ? reversed
    : reversedString + " " + reversed;
};
//console.log(reverseWords(`Let's take LeetCode contest`));
//console.log(reverseWords(`ehhhhhheh`));

var reverseWords = function (s) {
  let arr = s.split(" ");
  let reversed = "";
  for (let i of arr) {
    reversed += i.split("").reverse().join("") + " ";
  }
  return reversed.trim();
};
//console.log(reverseWords(`Let's take LeetCode contest`));
//console.log(reverseWords(`ehhhhhheh`));

var reverseWords = function (s) {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};
//console.log(reverseWords(`Let's take LeetCode contest`));
//console.log(reverseWords(`ehhhhhheh`));

var reverseWords = function (s) {
  return s.split("").reverse().join("").split(" ").reverse().join(" ");
};

/**
 * 33. Middle of the Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let index = 0;
  let indexOfMiddleVal = Math.ceil(lengthOfLinkedList(head) / 2);

  function lengthOfLinkedList(head) {
    let count = 0;
    while (head.next) {
      head = head.next;
      count++;
    }
    return count;
  } // O(N)

  while (head.next) {
    if (index === indexOfMiddleVal) return head;
    head = head.next;
    index++;
  }
  return head;
}; // O(0.5 N) -> O(N)
// total -> O(N)*O(N) = O(N^2)

// [65,66,26,77,96,  86,11,21,13,80], length = 9;
// [00,01,02,03,04,  05,06]
// indexOfMiddleVal = (9 / 2) + 1 = 4 + 1 = 5

// [1,2,3,4,5], length = 4
// [0,1,2,3,4]
// indexOfMiddleVal = (4 / 2) + 1 = 3

var middleNode = function (head) {
  let A = [head];
  while (A[A.length - 1].next != null) A.push(A[A.length - 1].next);
  return A[Math.trunc(A.length / 2)];
};
/**
 * Complexity Analysis
    Time Complexity: O(N), where NNN is the number of nodes in the given list.
    Space Complexity: O(N), the space used by A.
 */

var middleNode = function (head) {
  // I like that solution
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
//  Complexity Analysis
//     Time Complexity: O(N), where NNN is the number of nodes in the given list.
//     Space Complexity: O(1), the space used by slow and fast.

/**
 * 34. Remove Nth Node From End of List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = (head, n) => {
  let tempList = new ListNode(0);
  tempList.next = head;
  slow = fast = tempList;
  for (let i = 0; i < n; i++) fast = fast.next;
  while (fast.next) (slow = slow.next), (fast = fast.next);
  slow.next = slow.next.next;
  return tempList.next;
};

var removeNthFromEnd = function (head, n) {
  let root = head;
  let clone = head;
  let len = 0;

  while (clone) {
    len++;
    clone = clone.next;
  }

  let count = len - n;
  if (count === 0) return head.next;
  while (root && count > 1) {
    root = root.next;
    count--;
  }

  root.next = root.next && root.next.next;
  return head;
};

var removeNthFromEnd = function (head, n) {
  const help = (root, count) => {
    if (root.next) count = help(root.next, count);

    if (count === n) root.next = root.next.next;
    return ++count;
  };
  const count = help(head, 0);
  return count === n ? head.next : head;
};

var removeNthFromEnd = function (head, n) {
  const root = new ListNode(0);
  root.next = head;
  let front = root;
  let back = root;
  while (n >= 0) {
    front = front.next;
    n--;
  }
  while (front) {
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return root.next;
};

var removeNthFromEnd = function (head, n) {
  let tempList = new ListNode(0);
  tempList.next = head;

  // set variables for next node and current node
  let slow = tempList;
  let fast = tempList;

  // set fast to n nodes ahead of slow
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // While we haven't reached the end of the list
  // set slow to n nodes behind fast
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // set slow.next to two nodes ahead of slow
  // then return the nth node of the list
  slow.next = slow.next.next;
  return tempList.next;
};
// Time complexity is 0(n)
// Space complexity 0(1)

/**
 * 35. Maximum Subarray with fixed length
 *
 * Two Poleters Algorithm
 */
var nums = [1, 2, 3, 4, 5, 6, -3],
  m = 4;
//console.log(maxSubArrayWithFixedLength(nums, m));
// 1+2+3+4 = 10
//   2+3+4+5 = 14 // 10-1+5
//     3+4+5+6 = 18 // 14-2+6
//       4+5+6-3 = 12 // 18-3-3
function maxSubArrayWithFixedLength(nums, m) {
  let left = 0,
    right = 0,
    sum = 0,
    max = 0;
  for (let i = 0; i < m; i++) {
    sum += nums[i];
  }
  max = sum;
  while (left + m < nums.length) {
    right = left + m;
    sum = sum - nums[left] + nums[right];
    max = Math.max(max, sum);
    right = left + m;
    left++;
  }
  return max;
}

/**
 * 36. Maximum Subarray
 *
 * Two Poleters Algorithm
 */
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//console.log(maxSubArray(nums));
function maxSubArray(nums) {
  let l = 0,
    r = 1,
    sum = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}
//Two Poleters
/**
 * 37. Maximum SubArray
 */

// if nums[i] + "the Sum of elements before this element" is negative :
//  That means the value of the current index is bigger than the last sum,
// so we won't need this element
// so we will remove this index and all the indexes before it
var maxSubArray = (nums) => {
  let sum = 0,
    max = nums[0];
  for (let i = 0; i < nums.length; ) {
    sum += nums[i];
    max = Math.max(sum, max);
    if (nums[i] + (sum - nums[i]) < 0) {
      nums.splice(0, i + 1);
      i = 0;
      sum = 0;
    } else i++;
  }
  return max;
};

// var maxSubArray = function (nums) {
//   let max = nums[0];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum > max) {
//       max = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return max;
// };

var maxSubArray = function (nums) {
  // Initialize the max sum...
  let maxSum = nums[0];
  // Traverse all the element through the loop...
  for (let i = 1; i < nums.length; i++) {
    // nums[i] represents the largest sum of all subarrays ending with index i...
    // then its value should be the larger one between nums[i]...
    // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
    // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    // if nums[i] > maxSum then maxSum = nums[i]...
    if (nums[i] > maxSum) maxSum = nums[i];
  }
  return maxSum; // return the contiguous subarray which has the largest sum...
};

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//console.log(maxSubArray([1]));
//console.log(maxSubArray([5, 4, -1, 7, 8]));
//console.log(maxSubArray([-2, -1]));
//console.log(maxSubArray([2, -1, 1, 1]));
//console.log(maxSubArray([8, -19, 5, -4, 20]));
//console.log(maxSubArray([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));

/**
 * 31(again). Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set(),
    left = 0,
    right = 0,
    max = 0;
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
    } else {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      right++;
    }
    max = Math.max(max, set.size);
  }
  return max;
};
//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("qrsvbspk"));

/**
 * 38. Permutation in String
 ** Sliding Window
 ** TC|O(n) SC|O(1)
 */

var checkInclusion = function (s1, s2) {
  let map = new Map();
  let weight = 0;
  for (let i = 0; i < s1.length; i++) {
    if (!map.has(s1[i])) {
      map.set(s1[i], i + 1);
    }
    weight += map.get(s1[i]);
  }
  for (let i = 0; i < s2.length; i++) {
    let permutationWeight = 0;
    let set = new Set();
    if (map.has(s2[i])) {
      for (let j = i; j < s1.length + i; j++) {
        if (map.has(s2[j])) {
          set.add(s2[j]);
          permutationWeight += map.get(s2[j]);
        } else if (permutationWeight > weight) break;
      }
      if (permutationWeight == weight && isMapHasSetKeys(map, set)) {
        return true;
      }
    }
  }
  function isMapHasSetKeys(map, set) {
    let count = 0;
    for (i of set) {
      map.has(i);
      count++;
    }
    return map.size == count;
  }
  return false;
};

var checkInclusion = (s1, s2) => {
  let start = 0,
    end = s1.length - 1,
    windowWeight = 0,
    weight = 0;

  for (let i = 0; i < s1.length; i++) {
    weight += s1.charCodeAt(i);
    windowWeight += s2.charCodeAt(i);
  }

  while (end < s2.length) {
    if (
      windowWeight === weight &&
      isPermutation(s1, s2.substring(start, end + 1))
    )
      return true;
    end++;
    if (end === s2.length) return false;
    windowWeight += s2[end].charCodeAt(0);
    windowWeight -= s2[start++].charCodeAt(0);
  }
  return false;

  function isPermutation(s1, s2) {
    for (let i of s1) if (!s2.includes(i)) return false;

    return true;
  }
};

//console.log(checkInclusion("abo", "eidbaooo"));
//console.log(checkInclusion("ab", "eidboaoo"));
//console.log(checkInclusion("hello", "ooolleoooleh"));
//console.log(checkInclusion("abc", "ccccbbbbaaaa"));
//console.log(checkInclusion("abc", "bbbca"));

/**
 * 39. Longest Palindromic Substring
 */
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let subStr = "";
    let reverse = "";
    for (let j = i; j <= s.length; j++) {
      reverse = s[j] + reverse;
      subStr = s.slice(i, j + 1);
      if (subStr == reverse) subStr.length > res.length ? (res = subStr) : res;
    }
  }
  return res;
};
// improve the solution
// var longestPalindrome = function (s) {
//   let res = " ";
//   for (let i = 0; i < s.length; i++) {
//     let subStr = "";
//     for (let j = res.length; j <= s.length; j++) {
//       subStr = s.slice(i, j);
//       let reverse = "";
//       for (let i of subStr) {
//         reverse = i + reverse;
//       }
//       if (subStr == reverse) subStr.length > res.length ? (res = subStr) : res;
//     }
//   }
//   return res == " " ? (res = s[0]) : res;
// };

//console.log(longestPalindrome("eabcb"));
//console.log(longestPalindrome("abb"));
//console.log(longestPalindrome("bananas"));
//console.log(longestPalindrome("babad"));
//console.log(longestPalindrome("cbbd"));

// Enhanced Java Solution O(n)

// class Solution {
//   public String longestPalindrome(String s) {
//       if (s == null || s.length() < 1) return "";
//       let start = 0, end = 0;
//       for (let i = 0; i < s.length(); i++) {
//           let len1 = expandAroundCenter(s, i, i);
//           let len2 = expandAroundCenter(s, i, i + 1);
//           let len = Math.max(len1, len2);
//           if (len > end - start) {
//               start = i - (len - 1) / 2;
//               end = i + len / 2;
//           }
//       }
//       return s.substring(start, end + 1);
//   }

//   private let expandAroundCenter(String s, let left, let right) {
//       let L = left, R = right;
//       while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
//           L--;
//           R++;
//       }
//       return R - L - 1;
//   }
// }

/**
 * 40.
 *
 */
function SubArraySum(arr, s) {
  let left = 0;
  let right = 1;
  let sum = arr[left] + arr[right];
  while (left < right) {
    if (sum > s) {
      sum -= arr[left];
      left++;
    } else if (sum < s) {
      right++;
      sum += arr[right];
    } else {
      return [left + 1, right + 1];
    }
  }
}
//console.log(SubArraySum([1, 2, 3, 7, 5], 12));
//console.log(SubArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));

/**
 * 41. Flood Fill
 * Depth First Search (DFS) Algorithm
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = (image, sr, sc, color) => {
  let oldColor = image[sr][sc];
  if (oldColor == color) return image; // if the old color is the same as the new color, return the image
  dfs(sr, sc); // start from the source
  function dfs(sr, sc) {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= image.length || // if you put this at the first it will make an error
      sc >= image[sr].length ||
      image[sr][sc] != oldColor
    )
      return; // if the source is out of the image or the color is not the old color, return
    image[sr][sc] = color; // change the color
    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
  }
  return image;
};

var image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1, // [1, 1]
  color = 2;
//console.log(floodFill(image, sr, sc, color));
//[[2,2,2],
// [2,2,0],
// [2,0,1]]

var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] == newColor) return image;
  let oldColor = image[sr][sc];
  let queue = [[sr, sc]];
  while (queue.length) {
    let [x, y] = queue.shift();
    image[x][y] = newColor;
    if (x > 0 && image[x - 1][y] == oldColor) queue.push([x - 1, y]);
    if (x < image.length - 1 && image[x + 1][y] == oldColor)
      queue.push([x + 1, y]);
    if (y > 0 && image[x][y - 1] == oldColor) queue.push([x, y - 1]);
    if (y < image[0].length - 1 && image[x][y + 1] == oldColor)
      queue.push([x, y + 1]);
  }
  return image;
};
//console.log(floodFill(image, sr, sc, color));

/**
 * 42. Number of Islands
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      maxArea = Math.max(maxArea, search(i, j));
    }
  }
  return maxArea;

  function search(row, colum) {
    if (
      row < 0 ||
      colum < 0 ||
      row >= grid.length ||
      colum >= grid[0].length ||
      grid[row][colum] == 5 ||
      grid[row][colum] == 0
    )
      return 0;
    grid[row][colum] = 5;
    return (
      1 +
      search(row + 1, colum) +
      search(row - 1, colum) +
      search(row, colum + 1) +
      search(row, colum - 1)
    );
  }
};

let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
//console.log(maxAreaOfIsland(grid));

/**
 * 43. Merge Two Binary Trees
 * Binary Tree
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     let val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(let x) { val = x; }
 * }
 */
var mergeTrees = (root1, root2) => {
  if (root1 == null) return root2;
  if (root2 == null) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
//  Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

/**
 * 44. Reverse Linked List
 * LinkedList
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//recursive solution
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

/**
 * 45. Isomorphic Strings
 */
var isIsomorphic = function (s, t) {
  let map = new Map(),
    map2 = new Map();
  let arr = [],
    arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i + 1);
    }
    arr.push(map.get(s[i]));
    if (!map2.has(t[i])) {
      map2.set(t[i], i + 1);
    }
    arr2.push(map2.get(t[i]));
  }
  return arr.join("") == arr2.join("");
};
// enhanced solution
var isIsomorphic = function (s, t) {
  let map = new Map(),
    map2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i + 1);
    }
    if (!map2.has(t[i])) {
      map2.set(t[i], i + 1);
    }
    if (map.get(s[i]) != map2.get(t[i])) return false;
  }
  return true;
};
// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("badc", "baba"));

/**
 * 46. Remove Duplicates from Sorted List
 * LinkedList
 */
var deleteDuplicates = function (head) {
  let currentNode = head;
  if (head == null) return null;
  while (currentNode.next) {
    if (currentNode.val == currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};

/**
 * 47.  Add Two Numbers
 ** linkedList
 */

// Definition for singly-linked list.
//    l1 = 2-> 4-> 3
//    l2 = 5-> 6-> 4

// list1 = 0-> 2-> 4-> 3
// list2 = 0-> 5-> 6-> 4
//         0-> 7-> 0-> 8

//342 + 465 = 807.
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry !== 0) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curr = curr.next;
  }

  return dummyHead.next;
}

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

//console.log(addTwoNumbers(l1, l2));
//console.log(addTwoNumbers(new ListNode(0), new ListNode(0)));

/**
 * 48. Reverse LinkedList
 *
 ** LinkedList & Recursion
 */

// 1-> 2-> 3-> 4

// head = 1-> 2-> 3-> 4
// prev = null
// next = 2-> 3-> 4
// head.next = null
// null-> 2

// head = 2-> 3-> 4
// prev = 1-> 2-> 3-> 4
// next = 3-> 4
// head.next = prev

// head = 3-> 4
// prev = 2-> 3-> 4
// next = 4
// head.next = prev

// head = 4
// prev = 3-> 4
// next = null
// head.next = prev

// head = null
// prev = 4

function reverse(head, prev = null) {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverse(next, head);
}
var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
// console.log(reverse(l1));

// 3 Hours
/**
 * 49. Swap Nodes in Pairs
 *
 ** LinkedList
 */
//https://leetcode.com/problems/swap-nodes-in-pairs/
var swapPairs = function (head) {};

/**
 * 00. Contains Duplicate
 *
 * Brute Force - Linear Search
 * HeapSort
 * QuickSort
 * Hash Set
 */
// Brute Force - Linear Search
// Time O(N^2) | Space O(1)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  return false;
};
// console.log(containsDuplicate([0, 4, 5, 0, 3, 6]));
// console.log(containsDuplicate([1, 2, 3, 4]));

// Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
// Time O(N * log(N)) | Space O(1)
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) return true;
  }
  return false;
};

// Hash Set
// Time O(N) | Space O(N)
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    set.add(nums[i]);
    if (set.has(nums[i + 1])) return true;
  }
  return false;
};

/**
 * 50. Valid Anagram
 *
 * Hash Map
 * Heap Sort
 * Quick Sort
 *
 ** String.prototype.localeCompare()
 */

// Hash Map
// * Hash Map - Frequency Counter
// * Time O(s + t) | Space O(N)

// var isAnagram = function (s, t) {
//   let map = new Map();
//   let firstSum = 0,
//     secondSum = 0;
//   if (s.length !== t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (!map.has(s[i])) {
//       map.set(s[i], i + 1);
//       firstSum += i + 1;
//     } else {
//       firstSum += map.get(s[i]);
//     }
//   }

//   for (let j = 0; j < t.length; j++) {
//     console.log(t[j]);
//     if (map.has(t[j])) {
//       secondSum += map.get(t[j]);
//     }
//   }

//   return firstSum === secondSum;
// };

// Time complexity O(n + m)
// Space complexity O(n)
// Perfect Solution

var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;
  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
};
//console.log(isAnagram("anagram", "nagaram"));

// var isAnagram = (s, t) => {
//   let counts = {};
//   for (let i of s) {
//     counts[i] = (counts[i] || 0) + 1;
//   } // O(n) -> n = s.length
//   for (let j of t) {
//     if (!counts[j]--) return false;
//   } // O(m) -> m = t.length
//   return Object.values(m).every((v) => !v);
// };

// var isAnagram = (s, t) => {
//   let counts = {};
//   if (t.length !== s.length) return false;
//   for (let i of s) counts[i] = (counts[i] || 0) + 1; // O(n) -> n = s.length
//   for (let j of t) if (!counts[j]--) return false; // O(m) -> m = t.length
//   return false;
// };

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * logN) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = (s, t) => {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  return reorder(s) === reorder(t); /* Time O(N * logN) | Space O(N) */
};

const reorder = (str) =>
  str
    .split("") /* Time O(N)          | Space O(N) */
    .sort((a, b) =>
      a.localeCompare(b)
    ) /* Time O(N * log(N)) | Space O(1 || log(N)) */
    .join(""); /* Time O(N)          | Space O(N) */
// console.log(isAnagram("anagram", "nagaram"));

/**
 * 51. Reverse Integer
 *
 ** Tail recursion
 ** Time complexity O(log n) ,There are roughly (log n) digits in x
 // TC | O(n) n-> number of digits in x
 ** Space complexity O(1), because of Tail Recursion
 */
function reverseInt(x, rev = 0, sign = 1) {
  if (rev / 10 > 2 ** 31 - 1 || rev / 10 < (-2) ** 31) return 0;
  if (x < 0) sign = -1;
  if (x == 0) return (sign * rev) / 10;

  rev += Math.abs(x) % 10;
  x = Math.floor(Math.abs(x) / 10);
  return reverseInt(x, rev * 10, sign);
}
// console.log(reverseInt(-2143847412));

/**
 * 52. Group Anagrams
 ** Hash Map
 ** time complexity O(n*l*log l) n-> strs.length l-> str.length
 ** space complexity O(n*l) n-> strs.length l-> str.length
 */

const groupAnagrams = function (strs) {
  let groups = {};
  strs.forEach((str) => {
    // O(n) n-> strs.length
    const sortedStr = [...str].sort().join(""); // O(log l) l-> str.length  // O(l)
    if (groups[sortedStr]) groups[sortedStr].push(str);
    else groups[sortedStr] = [str];
  });
  return Object.values(groups);
};

// var st = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(st));
// console.log(groupAnagrams(st));
// console.log(
//   groupAnagrams([
//     "cab",
//     "tin",
//     "pew",
//     "duh",
//     "may",
//     "ill",
//     "buy",
//     "bar",
//     "max",
//     "doc",
//   ])
// );

// var groupAnagrams = function (strs) {
//   let map = setValueForEachStr();
//   let stringsAfterOrdered = orderStrs(strs);
//   let output = compareStrs(stringsAfterOrdered);
//   return output;

//   function setValueForEachStr() {
//     let map = new Map();
//     let j = 1;
//     let letters = "abcdefghijklmnopqrstuvwxyz";
//     for (let i of letters) {
//       map.set(i, j);
//       j++;
//     }
//     return map;
//   }

//   function orderStrs(strs) {
//     let arr = [];
//     for (let j of strs) {
//       let sum = 0;
//       for (let i of j) sum += map.get(i);
//       arr.push([j, sum, j.length]);
//     }
//     arr.sort((a, b) => a[1] - b[1]);
//     return arr;
//   }

//   function compareStrs(arr) {
//     let res = [];

//     for (let i = 0, k = 0; i < arr.length; k++, i++) {
//       res.push([arr[i][0]]);
//       while (
//         i < arr.length - 1 &&
//         arr[i][1] == arr[i + 1][1] &&
//         arr[i][2] == arr[i + 1][2]
//       ) {
//         res[k].push(arr[i + 1][0]);
//         i++;
//       }
//     }
//     return res;
//   }
// };

/**
 * 53. Top K Frequent Elements
 ** Hash Map
 ** Time complexity O(n log n) n-> nums.length
 ** Space complexity O(n) n-> nums.length
 */
var topKFrequent = function (nums, k) {
  let map = {};

  nums.forEach((num) => {
    // O(n) n-> nums.length
    if (map[num]) map[num][1] += 1;
    else map[num] = [num, 1];
  });

  return Object.values(map)
    .sort((a, b) => b[1] - a[1]) // O(n log n) n-> nums.length
    .map((d) => d[0]) // O(n) n-> nums.length
    .splice(0, k); // O(1)
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

/**
 * 54. Product of Array Except Self
 *
 ** Prefix Sum || division
 ** TC|O(n) SC|O(n)
 */

// var productExceptSelf = function (nums) {
//   let leftPrefix = [1];
//   let rightPrefix = [1];

//   for (let i = 0; i < nums.length; i++) {
//     leftPrefix[i + 1] = leftPrefix[i] * nums[i];
//   }
//   console.log(leftPrefix);
//   for (let j = nums.length - 1, i = 0; j >= 0; j--, i++) {
//     rightPrefix.unshift(rightPrefix[0] * nums[j]);
//   }
//   console.log(rightPrefix);

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = leftPrefix[i] * rightPrefix[i + 1];
//   }
//   return nums;
// };

// -> fastest Solution By Division
// var productExceptSelf = function(nums) {
//   let res = [];
//   let pro = 1, zeros = 0;

//   for (let i of nums){
//       if (i !== 0) pro *= i;
//       else {
//           zeros ++;
//           if(zeros === 2) break;
//           };
//   }

//   for(let j of nums){
//       switch (zeros) {
//           case 0 :
//               res.push(pro / j);
//               break;
//           case 1 :
//               if (j !== 0) res.push(0);
//               else res.push(pro);
//               break;
//           default :
//               res.push(0);
//               break;

//       }
//   }

//   return res;
// };

// Time complexity O(n) n-> nums.length
// Space complexity O(n) n-> nums.length
// my own solution
// var productExceptSelf = (nums) => {
//   let val = 1;
//   let res = [1];

//   for (let j = nums.length - 1; j >= 0; j--) {
//     res.unshift(res[0] * nums[j]);
//   }//[[120,]60,20,5,1]

//   for (let i = 0; i <= nums.length; i++) {
//     res[i] = val * res[i + 1];
//     val *= nums[i];
//   }//[60,]
//   res.pop();
//   return res;
// };

// Enhancing last solution
var productExceptSelf = (nums) => {
  let val = 1;
  let res = [1];

  for (let j = nums.length - 1; j > 0; j--) {
    res.unshift(res[0] * nums[j]);
  }

  for (let i = 0; i < nums.length; i++) {
    res[i] = val * res[i];
    val *= nums[i];
  }
  return res;
};
// console.log(productExceptSelf([2, 3, 4, 5]));

/**
 * 54. Longest Consecutive Sequence
 ** Hash Set
 ** Time complexity O(n) n-> nums.length
 ** Space complexity O(n) n-> nums.length
 */

var longestConsecutive = (nums) => {
  let set = new Set(nums);
  let length;
  let longest = 0;

  for (let i of nums) {
    if (!set.has(i - 1)) {
      length = 0;

      while (set.has(i + length)) length++;

      longest = Math.max(longest, length);
    }
  }
  return longest;
};
// console.log(longestConsecutive([100, 1, 200, 3, 2, 4]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

/**
 * 55. Valid Palindrome
 ** Hash Set
 ** Two Pointers & Reverse Approach
 ** Time complexity O(n) n-> nums.length
 ** Space complexity O(1)
 */

//* Hash Set
//* Reverse String Approach
//* Time complexity O(n) n-> nums.length
//* Space complexity O(n) n-> nums.length

var isPalindrome = function (s) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let set = new Set(alphabet);
  let word = "",
    reverse = "",
    letter = "";
  for (let l of s) {
    letter = l.toLowerCase();
    if (set.has(letter)) {
      word += letter;
      reverse = letter + reverse;
    }
  }
  return word === reverse;
};

//* Hash Set
//* Two Pointers Approach
//* Time complexity O(n) n-> nums.length
//* Space complexity O(1) constant because it is O(2*set.length)

var isPalindrome = (s) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let set = new Set(alphabet);

  for (let l = 0, r = s.length - 1; l < r; ) {
    while (!set.has(s[l].toLowerCase()) && l < r) l++;
    while (!set.has(s[r].toLowerCase()) && l < r) r--;

    if (s[l++].toLowerCase() !== s[r--].toLowerCase()) return false;
  }
  return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("0P"));
// console.log(isPalindrome(".,"));

/**
 * 56. 3Sum
 ** Two Pointers && Divide and Conquer
 ** Time Complexity O(n^2) -> O(n log(n)) + O(n^2)
 ** Space Complexity O(n)
 */
// Brute Force
// Time Complexity O(n^3)
// Space Complexity O(strArr.length + n ) n -> nums.length
var threeSum = (nums) => {
  let res = [],
    strArr = [],
    newArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          newArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          !strArr.includes(newArr.join("")) ? res.push(newArr) : res;
          strArr.push(newArr.join(""));
        }
      }
    }
  }
  return res;
};

// Two Pointers && Divide and Conquer
// Time Complexity O(n^2) -> O(n log(n)) + O(n^2)
//
var threeSum = (nums) => {
  let res = [],
    set = new Set();
  nums = nums.sort((a, b) => a - b); // O(n log(n))
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    let sortedArr = nums.slice(i + 1);
    for (let l = 0, r = sortedArr.length - 1; l < r; ) {
      // O(n)
      let action = nums[i] + sortedArr[l] + sortedArr[r];
      action > 0 && r--;
      action < 0 && l++;
      if (action === 0) {
        let newArr = [nums[i], sortedArr[l], sortedArr[r]].sort(
          //join -> O(1)
          (a, b) => a - b
        );
        !set.has(newArr.join("")) && res.push(newArr); //join -> O(1)
        l++;
        r--;
        set.add(newArr.join("")); //join -> O(1)
      }
    }
  }
  return res;
};

var threeSum = (nums) => {
  let res = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let l = i + 1, r = nums.length - 1; l < r; ) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) l++;
      else if (sum > 0) r--;
      else {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++, r--;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return res;
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([1, -1, -1, 0]));
// console.log(threeSum([-2, 0, 0, 2, 2]));

/**
 * 57. Container With Most Water
 *
 ** Two Pointers
 ** TC : O(n), SC : O(1)
 */
var maxArea = function (height) {
  let maxArea = 0;

  for (let l = 0, r = height.length - 1; l < r; ) {
    min = Math.min(height[l], height[r]);
    area = min * (r - l);
    maxArea = Math.max(maxArea, area);

    height[l] > height[r] ? r-- : l++;
  }
  return maxArea;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));

/**
 * 58. Best Time to Buy and Sell Stock
 *
 **Sliding Window / Two Pointers
 ** TC : O(n), SC : O(1)
 */
var maxProfit = function (prices) {
  let max = 0;
  for (let l = 0, r = l + 1; r < prices.length; ) {
    if (prices[l] < prices[r]) {
      max = Math.max(prices[r++] - prices[l], max);
    } else {
      l = r;
      r++;
    }
  }
  return max;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));

/**
 * 59. Letter Combinations of a Phone Number
 ** Tail Recursion, Iteration, HashMap,BackTracking
 ** TC|O(n* 4^n) n-> res.length, SC|O(n)
 */
var letterCombinations = function (digits) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function iterate(digits, res = [""]) {
    if (digits === "") return res;

    let lastIndex = digits.length - 1;
    let next = [];
    let arr = map[digits[lastIndex]];

    for (let c of arr) for (let i of res) next.push(c + i); // O(n* 4^n) n-> res.length

    digits = digits.substring(0, digits.length - 1);
    return iterate(digits, next);
  }

  return iterate(digits);
};

// console.log(letterCombinations('23'))

/**
 * 60. Largest Number
 ** Sorting TC|O(n log(n)) SC|O(1)
 */
// Brute Force TC|O(n^2) SC|O(n)
var largestNumber = function (nums) {
  nums = nums.map((n) => n.toString());

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < nums[j] + nums[i]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  res = nums.join("");
  return res == 0 ? "0" : res;
};

// TC|O(n log(n)) SC|O(1)
var largestNumber = (nums) => {
  nums = nums.sort((a, b) => b + "" + a - (a + "" + b)).join("");

  return nums == 0 ? "0" : nums;
};
// console.log(largestNumber([123,897,89, 4, 99]))

/**
 * 61. Convert Integer to the Sum of Two No-Zero Integers
 ** Math
 */

var getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i++)
    if (isNoZeros(n - i, n - (n - i))) return [n - i, n - (n - i)];

  function isNoZeros(n1, n2) {
    while (n1 > 0) {
      if (n1 % 10 === 0 && n1 > 0) return false;
      n1 = Math.floor(n1 / 10);
      if (n2 % 10 === 0 && n2 > 0) return false;
      n2 = Math.floor(n2 / 10);
    }
    return true;
  }
};
// console.log(getNoZeroIntegers(1010));
// console.log(getNoZeroIntegers(4040));

/**
 * 62. Minimum Flips to Make a OR b Equal to c
 ** Math
 */

var minFlips = function (a, b, c) {
  let map = {
    "000": 0,
    "001": 1,
    "010": 1,
    "011": 0,
    100: 1,
    101: 0,
    110: 2,
    111: 0,
  };
  let flips = 0;
  let zeros = "000000000000000000000000000000000000000000000000000000000000";

  a = a.toString(2);
  b = b.toString(2);
  c = c.toString(2);

  let maxLength = Math.max(a.length, b.length, c.length);

  a = zeros.substring(0, maxLength - a.length) + a;
  b = zeros.substring(0, maxLength - b.length) + b;
  c = zeros.substring(0, maxLength - c.length) + c;

  for (let i = 0; i < maxLength; i++) {
    flips += map[a[i] + b[i] + c[i]];
  }

  return flips;
};

var minFlips = (a, b, c) => {
  let ret = 0;
  while (a > 0 || b > 0 || c > 0) {
    if (((a & 1) | (b & 1)) !== (c & 1)) {
      ret += (a & 1) === 1 && (b & 1) === 1 ? 2 : 1;
    }
    a >>>= 1;
    b >>>= 1;
    c >>>= 1;
  }
  return ret;
};

// Since the a, b and c are all int, we could set the traversal times and calculate with a mask.
// The code could be like this:
var minFlips = (a, b, c) => {
  let ret = 0;
  let mask = 1;
  for (let i = 1; i < 32; ++i) {
    if (((a & mask) | (b & mask)) !== (c & mask)) {
      ret += (a & mask) === mask && (b & mask) === mask ? 2 : 1;
    }
    mask <<= 1;
  }
  return ret;
};

// console.log(minFlips(2,6,5))
// console.log(minFlips(2,4,7))
// console.log(minFlips(10,9,1))

/**
 * 63. Power of Two
 ** Bit Manipulation
 */

var isPowerOfTwo = (n) => n > 0 && !(n & (n - 1));
// console.log(isPowerOfTwo(1))

/**
 * 64. Number of 1 Bits
 ** Bit Manipulation
 */
var hammingWeight = function (n) {
  let counter = 0;
  while (n) {
    n = n & (n - 1);
    counter++;
  }
  return counter;
};
// console.log(hammingWeight(00000000000000000000000000001011))

/**
 * 65. Longest Substring with At Least K Repeating Characters
 ** Sliding Window
 ** TC|O(n), SC|O(1)
 */
// My solution
var characterReplacement = function (s, k) {
  let st = 0,
    e = 0,
    map = {},
    max = 0,
    strLength = 0,
    mostRepeating = 0;

  while (e < s.length) {
    map[s[e]] = (map[s[e]] || 0) + 1;
    strLength = e - st + 1;
    // mostRepeating = Object.keys(map)
    //     .reduce((acc, x) => Math.max(acc, map[x]), 0)
    mostRepeating = Math.max(mostRepeating, map[s[e]]);

    if (strLength - mostRepeating > k) {
      map[s[st]]--;
      st++, e++;
      max = Math.max(max, strLength - 1);
      continue;
    }

    e++;
    max = Math.max(max, strLength);
  }
  return max;
};

var characterReplacement = function (s, k) {
  let st = 0,
    map = [],
    max = 0,
    strLength = 0,
    mostRepeating = 0;

  for (let e = 0; e < s.length; e++) {
    map[s[e]] = (map[s[e]] || 0) + 1;
    strLength = e - st + 1;
    mostRepeating = Math.max(mostRepeating, map[s[e]]);

    if (strLength - mostRepeating > k) {
      map[s[st]]--;
      st++;
    }

    max = Math.max(max, e - st + 1);
  }
  return max;
};

// console.log(characterReplacement('ABAB', 2))
// console.log(characterReplacement("AABA", 0))
// console.log(characterReplacement('AABABBA', 1))

/**
 * 66. Find Minimum in Rotated Sorted Array
 ** TC|O(logN) SC|O(1)
 ** Binary Search
 */

var findMin = function (nums) {
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (mid >= 0 && nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
};
// console.log(findMin([3, 1, 2]));

var findMin = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = ~~((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
};

/*
 * 67. Search in Rotated Sorted Array
 ** Binary Search
 ** TC|O(logN) SC|O(1)
 */
// solved in java

/**
 * 68. Search in Rotated Sorted Array II
 ** Binary Search
 ** Tc|O(logN)
 */
// solved in java

/**
 * 69. Search in a Sorted Array of Unknown Size
 * Sorted Search, No Size
 */
// Java

/**
 * 10.5 Sparse Search
 */
/**
 *  Given a sorted array of strings that is interspersed with empty strings, write a 
method to find the location of a given string
 */
// Java
function spareSearch(strings, str) {
  if (strings === null || str === null || str === "") return -1;
  return spareSearch(strings, str, 0, strings.length - 1);

  function spareSearch(stings, str, first, last) {
    if (first > last) return -1;
    let mid = (last + first) / 2;

    if (strings[mid] === "") {
      const left = mid - 1;
      const right = mid + 1;
      for (;;) {
        if (left > first && right > last) return -1;
        else if (left >= first && strings[left] !== "") {
          mid = left;
          break;
        } else if (right < last && strings[right] !== "") {
          mid = right;
          break;
        }
        left--;
        right++;
      }
    }
    if (str === strings[mid]) return mid;
    else if (str.localeCompare(strings[mid]) < 0)
      // search left
      return spareSearch(strings, str, first, mid - 1);
    else return spareSearch(strings, str, mid + 1, last);
  }
}

var strings = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];
// console.log(spareSearch(strings, "ball"));

/**
 * 70. Delete the Middle Node of a Linked List
 */
// in java

/**
 * Remove Nth Node From End of List
 */
// in java

var removeNthFromEnd = (head, n) => {
  if (!head.next && n === 1) return null;
  let k;
  return checkOther(head, n);

  function checkOther(head, n) {
    if (!head.next) {
      k = n;
      return head;
    }
    checkOther(head.next, n);
    k--;
    if (k === 0) head.next = head.next.next;
    if (k === 1) return head.next;
    return head;
  }
};

/**
 * Delete Middle Node:
 *  Implement an algorithm to delete a node in the middle (i.e., any node but 
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to 
that node. 
EXAMPLE 
Input:the node c from the linked list a->b->c->d->e->f 
Result: nothing is returned, but the new linked list looks like a ->b->d->e->f
 */
// java
var deleteMidNode = (node) => {
  while (!node || !node.next) return false;
  node.data = node.next.data;
  node.next = node.next.next;
  return true;
};

/**
 * 71. Partition List
 */
var partition = function (head, x) {
  let fdum = new ListNode(0),
    bdum = new ListNode(0),
    front = fdum,
    back = bdum,
    curr = head;
  while (curr) {
    if (curr.val < x) (front.next = curr), (front = curr);
    else (back.next = curr), (back = curr);
    curr = curr.next;
  }
  (front.next = bdum.next), (back.next = null);
  return fdum.next;
};
let head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(0);
console.log(partition(head, 3));
// 1-> 4-> 3-> 2-> 5-> 2
// 1-> 2-> 2-> 4-> 3-> 5
for (let node = head; node; node = node.next) {
  console.log(node.val);
}

/**
 * 72. Binary Tree Inorder Traversal
 */
var a = new TreeNode("a");
var b = new TreeNode("b");
var c = new TreeNode("c");
var d = new TreeNode("d");
var e = new TreeNode("e");
var f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

//        a
//       / \
//     b     c
//    / \   / \
//   d   e  f

var inorderTraversal = function (root, list = []) {
  if (!root) return [];
  inorderTraversal(root.left, list);
  list.push(root.val);
  inorderTraversal(root.right, list);
  return list;
};
// console.log(inorderTraversal(a));

/**
 * 73. Invert Binary Tree
 */

//        a
//       / \
//     b     c
//    / \   / \
//   d   e  f
var invertTree = function (root) {
  let res = new TreeNode(root.val);
  let p = res;
  let stack = [];
  let curr = root;
  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
      if (curr) {
        p.right = curr;
        p = p.right;
      }
    }
    curr = stack.pop();
    curr = curr.right;
    if (curr) {
      p.left = curr;
      p = p.left;
    }
  }
  return res;
};
// console.log(invertTree(a));

/**
 * 74. Maximum Depth of Binary Tree
 ** Tree, DFS, BFS
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    for (let i = queue.length; i > 0; i--) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    depth++;
  }
  return depth;
};

/**
 * 75. Search a 2D Matrix
 */
// class Solution {
//   boolean state = false;
//   public boolean searchMatrix(int[][] matrix, int target) {
//       for (int[] array: matrix) {
//           binarySearch(array, target);
//       }
//       return state;
//   }
//   public void binarySearch(int[] array, int target){
//       int low = 0, high = array.length - 1;
//       while(low <= high) {
//           int mid = (low + high) / 2;
//           if (array[mid] > target) {
//               high = mid - 1;
//           } else if (array[mid] < target) {
//               low = mid + 1;
//           } else {
//               state = true;
//               return;
//           }
//       }
//       return;
//   }
// }

/**
 * 76. Arranging Coins
 */
var arrangeCoins = function (n) {
  let low = 1,
    high = n;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let guess = Math.floor((mid * (mid + 1)) / 2);
    if (guess == n) return mid;
    if (guess > n) high = mid - 1;
    else low = mid + 1;
  }
  return high;
};
//java
/**
 class Solution {
    public int arrangeCoins(int n) {
        long i = 0;
        int counter = 1;
        long num = new Long(n);
        while (true) {
            i += counter;
            if (num == i) return counter;
            else if (num < i) return counter - 1;
            counter ++;
        }
    }
}


// 1, 3, 6, 10, 15

// 5
// 5  
// 1, 3, 6, 10, 15, 21
// 1, 2, 3,  4,  5,  6
 */
/**
class Solution {
    public int arrangeCoins(int n) {
        return (int)(Math.sqrt(2 * (long)n + 0.25) - 0.5); 
    }
}

// n <= k(k+1)/2
// using complete the square technique

// 2n <= k**2 + k
// 2n <= (k + 1/2)^2 - 1/4
// 2n + 1/4 <= (k + 1/2)^2
// sqrt(2n + 1/4) <= k + 1
// sqrt(2n + 1/4) - 1/2 <= k
// k = sqrt(2n + 1/4) - 1/2
 */

/**
 * 78. Min Stack
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.min.length === 0 || this.min[this.min.length - 1] >= val) {
      this.min.push(val);
    }
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack[this.stack.length - 1] === this.min[this.min.length - 1])
      this.min.pop();
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}

class MinStack {
  constructor() {
    this.stack = [];
    this.minArr = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.minArr.length === 0) {
      this.minArr.push(val);
    } else if (val <= this.minArr[this.minArr.length - 1]) {
      this.minArr.push(val);
    }
    this.stack.push(val);
  }
  /**
   * @return {void}
   */
  pop() {
    let popped = this.stack.pop();
    if (popped === this.minArr[this.minArr.length - 1]) {
      this.minArr.pop();
    }
    return popped;
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.minArr[this.minArr.length - 1];
  }
}

class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.min.length === 0 || this.min[this.min.length - 1] >= val) {
      this.min.push(val);
    }
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack[this.stack.length - 1] === this.min[this.min.length - 1])
      this.min.pop();
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}

/*
class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStc;

    public MinStack() {
        stack = new Stack();
        minStc = new Stack();
    }
    
    public void push(int val) {
        if (stack.empty() || val <= minStc.peek()) {
            minStc.push(val);
        }
        stack.push(val);
    }
    
    public void pop() {
        int popped = stack.pop();
        if (popped == minStc.peek()) { // stack.peek().eqauls(minStc.peek())
            minStc.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStc.peek();
    }
}
*/

/**
 * 79. Baseball Game
 */
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];
  let sum = 0;
  for (let i of operations) {
    switch (i) {
      case "+":
        sumOp = stack[stack.length - 1] + stack[stack.length - 2];
        sum += sumOp;
        stack.push(sumOp);
        break;
      case "D":
        doubleOp = stack[stack.length - 1] * 2;
        sum += doubleOp;
        stack.push(doubleOp);
        break;
      case "C":
        removedElement = stack[stack.length - 1];
        sum -= removedElement;
        stack.pop();
        break;
      default: // any integer
        stack.push(parseInt(i));
        sum += stack[stack.length - 1];
    }
  }

  return sum;
};
// ["5","2","C","D","+"]
// [5] | sum = 5
// [5, 2] | sum = 7
// [5] | sum = 5
// [5, 10] | sum = 15
// [5, 10, 15] | sum  = 15 + 10 + 5 = 30
// sum = 30

// ["5","-2","4","C","D","9","+","+"]
// [5]
// [5, -2]
// [5, -2, 4]
// [5, -2]
// [5, -2, -4]
// [5, -2, -4, 9]
// [5, -2, -4, 9, 5]
// [5, -2, -4, 9, 5, 14]
// sum = 27

// Java
/*
class Solution {
    public int calPoints(String[] operations) {
        // define constants for operations
        final String PLUS = "+";
        final String DOUBLE = "D";
        final String CANCEL = "C";

        // use a stack to store previous scores
        Stack<Integer> stack = new Stack<>();
        int sum = 0;
        for (String i: operations) {
            switch (i) {
                case PLUS :
                    int sumOp = stack.peek() + stack.get(stack.size() -2);
                    sum += sumOp;
                    stack.push(sumOp);
                    break;
                case DOUBLE :
                    int doubled = stack.peek() * 2;
                    sum += doubled;
                    stack.push(doubled);
                    break;
                case CANCEL :
                    int removedEle = stack.pop();
                    sum -= removedEle;
                    break;
                default: 
                    int num = Integer.parseInt(i);
                    sum += num;
                    stack.push(num);
            }
        }
        return sum;
    }
}
*/

/**
 * 80. Same Tree
 ** Tree, DFS, BFS
 */
var isSameTree = function (p, q) {
  if (!q && !p) return true;
  if (!q || !p) return false;
  if (q.val !== p.val) return false;
  return true && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSameTree = function (p, q) {
  let stackP = [p];
  let stackQ = [q];
  while (stackQ.length > 0 || stackP.length > 0) {
    let currP = stackP.pop();
    let currQ = stackQ.pop();
    if (currP?.val !== currQ?.val) return false;
    if (currP?.right || currQ?.right) {
      stackP.push(currP.right);
      stackQ.push(currQ.right);
    }
    if (currP?.left || currQ?.left) {
      stackP.push(currP.left);
      stackQ.push(currQ.left);
    }
  }
  return true;
};

/**
 * 81.Lowest Common Ancestor of a Binary Search
 * Tree, DFS
 */
var lowestCommonAncestor = function (root, p, q) {
  // If root is null or equal to either p or q, return root
  if (root.val === p.val || root.val === q.val) return root;
  // If both p and q are smaller than root, find LCA in left subtree
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  // If both p and q are larger than root, find LCA in right subtree
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  // If one of p or q is smaller and one is larger than root, return root as LCA
  return root;
};

/**
 * 82. Binary Tree Level Order Traversal
 * Tree, BFS, Queue
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level); // [[1],]
  }
  return result;
};

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [[root]];
  let res = [[root.val]];
  while (queue.length > 0) {
    let { vals, nodes } = addLevel(queue.shift());
    if (vals.length === 0) break;
    res.push(vals);
    queue.push(nodes);
  }
  return res;

  function addLevel(arr) {
    let vals = [];
    let nodes = [];
    while (arr.length > 0) {
      let curr = arr.shift();
      if (curr.left) {
        vals.push(curr.left.val);
        nodes.push(curr.left);
      }
      if (curr.right) {
        vals.push(curr.right.val);
        nodes.push(curr.right);
      }
    }
    return { vals, nodes };
  }
};

// create a tree [3,9,20,null,null,15,7]
// var b = new TreeNode(3);
// var c = new TreeNode(9);
// var d = new TreeNode(20);
// var e = new TreeNode(15);
// var f = new TreeNode(7);

// b.left = c;
// b.right = d;
// d.left = e;
// d.right = f;

// console.log(levelOrder(b));

/**
 * 83. Validate Binary Search Tree
 * Tree, DFS
 * Time: O(n) Space: O(h) h is the height of the tree
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

var isValidBST = function (root) {
  let res = inorderTraverse(root);
  console.log(res);
  for (let i = 1; i < res.length; i++) if (res[i] <= res[i - 1]) return false;
  return true;

  function inorderTraverse(root, res = []) {
    if (!root) return [];
    inorderTraverse(root.left, res);
    res.push(root.val);
    inorderTraverse(root.right, res);
    return res;
  }
};

/**
 * 84. Lowest Common Ancestor of a Binary Tree
 * Tree, DFS
 * Time: O(n) Space: O(h) h is the height of the tree
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val == p.val || root.val == q.val) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (left || right) return left || right;
};

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};

/**
 * 85. Kth Smallest Element in a BST
 * Tree, DFS
 * Recursive TC|O(N) SC|O(N), iteration TC|O(H + K) SC|O(H)
 */
// Recursive
var kthSmallest = function (root, k) {
  let res = inorderTraverse(root);
  return res[k - 1];

  function inorderTraverse(root, res = []) {
    if (!root) return [];
    inorderTraverse(root.left, res);
    res.push(root.val);
    inorderTraverse(root.right, res);
    return res;
  }
};

// Iteration
var kthSmallest = function (root, k) {
  let stack = [];
  let curr = root;
  let res = [];
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    if (res.length == k) return res.pop();
    curr = curr.right;
  }
};

/**
 * 86. Construct Binary Tree from Inorder and Postorder Traversal
 * Tree, DFS
 * Time: O(n) Space: O(h) h is the height of the tree
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}

// test
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const root = buildTree(preorder, inorder);
// console.log(root);

// tree
//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * 87. Binary Tree Maximum Path Sum
 * Tree, DFS
 * Time: O(n) Space: O(h) h is the height of the tree
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -1000;
  def(root);
  return max;

  function def(root) {
    if (!root) return 0; // the smallest value
    // let max = root.val
    let left = def(root.left);
    let right = def(root.right);

    max = Math.max(
      max,
      root.val,
      root.val + left,
      root.val + right,
      root.val + left + right
    );

    let maxSum = Math.max(root.val, root.val + left, root.val + right);

    return maxSum;
  }
};

// make a tree [-10,9,20,null,null,15,7]
let a = new TreeNode(-10);
a.left = new TreeNode(9);
a.right = new TreeNode(20);
a.right.left = new TreeNode(15);
a.right.right = new TreeNode(7);

// console.log(maxPathSum(a));
// tree
//     -10
//    / \
//   9   20
//      / \
//     15  7
// max = 42
