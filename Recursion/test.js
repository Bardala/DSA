// reverse linkedlist

class Node {
  constructor(value, next) {
    this.value = value || 0;
    this.next = next || null;
  }
}
var list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

function reverseList(list) {
  if (!list || !list.next) return list;

  let pointer = reverseList(list.next);
  list.next.next = list;
  list.next = null;
  return pointer;
}

function reverseList(list, prev = null) {
  if (!list) return prev;

  let next = list.next;
  list.next = prev;
  prev = list;
  return reverseList(next, prev);
}
console.log(reverseList(list));

// Merge Sorted Linkedlist
var list2 = new Node(5);
list2.next = new Node(10);
list2.next.next = new Node(11);
list2.next.next.next = new Node(16);
list2.next.next.next.next = new Node(17);
var list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(7);
list.next.next.next = new Node(12);
list.next.next.next.next = new Node(20);
// 1 -> 2 -> 7 -> 12 -> 20
// 5 -> 10 -> 11 -> 16 -> 17
// 1 -> 2 -> 5 -> 7 -> 10 -> 11 -> 12 -> 16 -> 17 -> 20

//Head Recursion

// Tail Recursion

var sortedMerge = (list1, list2, res = null) => {
  //base case
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.value <= list2.value) {
    res = list1;
    res.next = sortedMerge(list1.next, list2, res.next);
  } else {
    res = list2;
    res.next = sortedMerge(list1, list2.next, res.next);
  }
  return res;
};

console.log(sortedMerge(list, list2));
