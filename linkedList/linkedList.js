/**linked list by me */

/**
 * linkedList problems on leetCode
 * https://leetcode.com/tag/linked-list/
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * Some Functions On LinkedLists
 */

// helper function
br = () => console.log("\n");

// main

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node2.next = node3;
node1.next = node2;

// print LinkedList recursively
function printValues(list) {
  let arr = [];
  printLinkedList(list);
  console.log(arr);

  function printLinkedList(list) {
    if (!list) return;
    arr.push(list.element);
    return printLinkedList(list.next);
  }
}
printValues(node1);
// 1
// 2
// 3

// sum of elements of linkedList (Recursive function)
//    1-> 2-> 3-> null
//   curr
// sum = 0 + 3 + 2 + 1

var sumList = (list) => {
  if (!list) return 0;
  return list.element + sumList(list.next);
};
console.log("Sum of linkedList by recursive function : ", sumList(node1));
// time complexity O(n)
// space complexity O(n)

// sum of elements of linkedList (iterative function)
var sumList = (list) => {
  let sum = 0;
  let curr = list;
  while (curr) {
    sum += curr.element;
    curr = curr.next;
  }
  return sum;
};
// time complexity O(n)
// space complexity O(1)

console.log("Sum of linkedList by iterator function : ", sumList(node1));

br();

var n1 = new Node("A");
var val = new Node("B");
var val2 = new Node("C");
var val3 = new Node("D");
val2.next = val3;
val.next = val2;
n1.next = val;

var n2 = new Node("E");
n2.next = new Node("F");
n2.next.next = new Node("G");
n2.next.next.next = new Node("H");

br();

var n1 = new Node("A");
var val = new Node("B");
var val2 = new Node("C");
var val3 = new Node("D");
val2.next = val3;
val.next = val2;
n1.next = val;

var n2 = new Node("E");
n2.next = new Node("F");
n2.next.next = new Node("G");
n2.next.next.next = new Node("H");

// zipper function

//   A-> B-> C-> D-> null
// tail  f
//

// E-> f-> G-> H-> null
// s

// iterator function
// function zipperLists(list1, list2) {
//   let tail = list1;
//   let f = list1.next;
//   let s = list2;
//   let count = 0;

//   while (f && s) {
//     if (count % 2 === 0) {
//       tail.next = s;
//       s = s.next;
//     } else {
//       tail.next = f;
//       f = f.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (f) tail.next = f;
//   if (s) tail.next = s;

//   return list1;
// }
// console.log(zipperLists(n1, n2));

// Recursive function

function zipperLists(list1, list2) {
  if (!list1 && !list2) return;
  if (!list1) return list2;
  if (!list2) return list1;

  const next1 = list1.next;
  const next2 = list2.next;

  list1.next = list2;
  list2.next = zipperLists(next1, next2);

  return list1;
}

// A-> B-> C-> H
// l1   n1

// E-> F-> G-> D
// l2  n2

// A-> E-> B-> F-> C-> G-> H-> D

console.log(zipperLists(n1, n2));
