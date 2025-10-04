/**
 * Reverse String
 */

function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.substring(1)) + str[0];
}
// console.log(reverseString("hello"));

// hello

// call stack

// ello
// llo
// lo
// o
// ''

/**
 * 00. Palindrome String
 *
 * String & Recursion
 */

function isPalindromeStr(str) {
  // base case
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1]) return isPalindromeStr(str.substring(1, str.length - 2));
  // Addition base case to handle non-palindromes
  return false;
}
// console.log(isPalindromeStr("racecar"));

/**
 * Convert Decimal to Binary
 */

var decimalToBinary = (num, str = '') => {
  if (num === 0) return str || 0;

  str = (num % 2) + str;
  return decimalToBinary(Math.floor(num / 2), str);
};
// console.log(typeof decimalToBinary(233));

// 233 / 2   1
// 116 / 2   0
// 58  / 2   0
// 29  / 2   1
// 14  / 2   0
// 7   / 2   1
// 3   / 2   1
// 1   / 2   1
// 11101001

/**
 * Sum
 */
// 10 + (10 - 1);

function sum(num, res = 0) {
  if (num === 0) return res;

  res += num;
  return sum(num - 1, res);
}
// console.log(sum(10));

function sum(num) {
  if (num <= 1) return num;

  return num + sum(num - 1);
}
console.log(sum(10));

/**
 * Binary Search
 *
 ** The number is in order
 */

function search(arr, num, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === num) return mid;

  if (num > arr[mid]) return search(arr, num, mid + 1, right);

  return search(arr, num, left, mid - 1);
}

var arr = [];
for (let i = 0; i <= 10; i++) {
  arr.push(i);
}
// console.log(search(arr, 6));

/**
 * Merge Sort
 */

var mergeSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid); // analysis the right part
    mergeSort(arr, mid + 1, end); // analysis the left part
    merge(arr, start, mid, end);
  }
  return arr;

  function merge(data, start, mid, end) {
    let temp = [];
    let i = start,
      j = mid + 1,
      k = 0;
    // While both sub-array has values, then try and merge them in sorted order
    while (i <= mid && j <= end) {
      if (data[i] <= data[j]) temp[k++] = data[i++];
      else temp[k++] = data[j++];
    }

    // Add the rest of the values from the left sub-array into the result
    while (i <= mid) temp[k++] = data[i++];

    // Add the rest of the values from the right sub-array into the result
    while (j <= end) temp[k++] = data[j++];

    for (let i = start; i <= end; i++) data[i] = temp[i - start];
  }
};

var arr = [-5, 20, 10, 3, 2, 0];
// console.log(mergeSort(arr));

/**
 * Reverse LinkedList
 *
 ** Tail recursion
 ** Head recursion
 */
class Node {
  constructor(value, next) {
    this.value = value || 0;
    this.next = next || null;
  }
}

// var list = new Node(1);
// list.next = new Node(2);
// list.next.next = new Node(3);
// list.next.next.next = new Node(4);
// list.next.next.next.next = new Node(5);
var list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

// Head Recursion
var reverseList = list => {
  if (!list || !list.next) return list;

  let pointer = reverseList(list.next);
  list.next.next = list;
  list.next = null;
  return pointer;
};
// console.log("Head Recursion\n", reverseList(list));
// 1-> 2-> 3-> 4->  5-> 4-> null

// Tail Recursion
var reverseList = (list, prev = null) => {
  if (!list) return prev;

  let next = list.next;
  list.next = prev;
  return reverseList(next, list);
};
// console.log("Tail Recursion\n", reverseList(list));

/**
 * Merge Sorted LinkedList
 */
var list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(7);
list.next.next.next = new Node(12);
list.next.next.next.next = new Node(20);

var list2 = new Node(5);
list2.next = new Node(10);
list2.next.next = new Node(11);
list2.next.next.next = new Node(16);
list2.next.next.next.next = new Node(17);
// 1 -> 2 -> 7 -> 12 -> 20
// 5 -> 10 -> 11 -> 16 -> 17
// 1 -> 2 -> 5 -> 7 -> 10 -> 11 -> 12 -> 16 -> 17 -> 20

// Head Recursion
var sortedMerge = (list1, list2) => {
  //base case
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.value <= list2.value) {
    list1.next = sortedMerge(list1.next, list2);
    return list1;
  } else {
    list2.next = sortedMerge(list1, list2.next);
    return list2;
  }
};

// It is not a Tail Recursion
var sortedMerge = (list1, list2, res = new Node()) => {
  //base case
  if (!list1) return list2;
  if (!list2) return list1;
  let p = res;
  if (list1.value <= list2.value) {
    p.next = list1;
    sortedMerge(list1.next, list2);
  } else {
    p.next = list2;
    sortedMerge(list1, list2.next);
  }
  return res.next;
};
console.log(sortedMerge(list, list2));

// Tail Recursion
var mergeTwoLists = (l1, l2, head) => {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val < l2.val) {
    head = l1;
    head.next = mergeTwoListsTs(l1.next, l2);
  } else {
    head = l2;
    head.next = mergeTwoListsTs(l1, l2.next);
  }
  return head;
};
/**
 * factorial
 */
// Head Recursion
var factorial = num => {
  if (num === 1) return 1;

  return num * factorial(num - 1);
};

// Tail Recursion
var factorial = (num, res = 1) => {
  if (num === 1) return res;

  return factorial(num - 1, res * num);
};

console.log(factorial(4));

/**
 * Fibonacci
 */
// Head Recursion
var fibonacci = num => {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};
// console.log(fibonacci(50));
// it can't be done, stop : [Done] exited with code=1 in 65.801 seconds

// Tail Recursion
var fibonacci = (num, res = 1, prev = 0) => {
  if (num <= 1) return res;

  return fibonacci(num - 1, res + prev, res);
};

// console.log(fibonacci(500));
// 1.394232245616977e+104
// [Done] exited with code=0 in 0.159 seconds

/**
 *  Reverse Integer
 */
// Tail recursion
function reverse(x, rev = 0, sign = 1) {
  if (rev / 10 > 2 ** 31 - 1 || rev / 10 < (-2) ** 31) return 0;
  if (x < 0) sign = -1;
  if (x == 0) return (sign * rev) / 10;

  rev += Math.abs(x) % 10;
  x = Math.floor(Math.abs(x) / 10);
  return reverse(x, rev * 10, sign);
}
console.log(reverse(-2143847412));
