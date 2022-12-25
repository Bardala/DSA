/**
 * Class LinkedList and some methods
 */

class LinkedList {
  //A constructor enables you to provide any custom initialization
  //that must be done before any other methods can be called on an instantiated object.

  constructor() {
    this.head = null;
  }
  // methods
  add(ele) {
    let node = new Node(ele);
    let curr = this.head;

    if (!curr) {
      this.head = node;
      return node;
    }

    while (curr.next) curr = curr.next;

    curr.next = node;
    return node;
  }

  values() {
    let vals = [];
    let curr = this.head;
    while (curr) {
      vals.push(curr.element);
      curr = curr.next;
    }
    return vals;
  }

  addAt(ind, ele) {
    let curr = this.head;
    let node = new Node(ele);

    if (ind === 0) {
      node.next = curr;
      this.head = node;
      return;
    }

    for (let i = 0; i < ind; i++) {
      if (ind - 1 === i) {
        node.next = curr.next;
        curr.next = node;
        return;
      }
      curr = curr.next;
    }
  }

  remove(ele) {
    let curr = this.head;

    if (curr.element === ele) {
      this.head = curr.next;
      return;
    }

    while (curr) {
      if (curr.next.element === ele) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  removeAt(ind) {
    let curr = this.head;

    if (ind === 0) {
      this.head = curr.next;
      return;
    }

    for (let i = 0; i <= ind; i++) {
      if (ind - 1 === i) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  removeDuplicates() {
    let currentNode = this.head;

    if (this.head == null) return null;

    while (currentNode.next) {
      if (currentNode.element == currentNode.next.element) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  clear() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  //   reverse() {
  //     let curr = this.head;
  //     let next = null;
  //     let prev = null;

  //     while (curr) {
  //       next = curr.next;
  //       curr.next = prev;
  //       prev = curr;
  //       curr = next;
  //     }
  //     this.head = prev;
  //   }

  reverse(head = this.head, prev = null) {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverse(next, head);
  }
}

let list = new LinkedList();

for (let i = 0; i < 5; i++) list.add(i);

console.log(list.values());
// [ 0, 1, 2, 3, 4 ]

list.remove(4);
console.log(list.values());
// [ 0, 1, 2, 3 ]

list.removeAt(3);
console.log(list.values());

var ind = 3;
list.addAt(ind, "Islam");
console.log("Add at index ", ind, " [Islma] : ", list.values());

// list.clear();
// console.log(`clear list and print its length : ${list.values().length}`);
// console.log(list.isEmpty());

list.reverse();
console.log(list.values());
let arr = [1, 2, 3, 4, 4, 4];
for (let i in arr) list.add(...arr);
console.log(list.values());
list.removeDuplicates();
console.log(list.values());

// var reverseList = function (head) {
//   if (!head || !head.next) return head;
//   let newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// };

let node = new Node(1);
node.next = list.head;
console.log("node : ", node);

function reverse(head, prev = null) {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverse(next, head);
}

let res = reverse(node);
console.log("reverse node : ", res);

console.log("\n", list.values());
list.reverse();
console.log(" reverse list : ", list.values());
