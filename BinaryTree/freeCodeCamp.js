// Binary Tree
// Depth First Search

class TreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

var depthFirstSearch = (root) => {
  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
// console.log(depthFirstSearch(a));

//        a
//       / \
//     b     c
//    / \   / \
//   d   e  f

// Recursive

var recursiveDepthFirstSearch = (root) => {
  if (!root) return [];
  console.log(root.val);
  let left = recursiveDepthFirstSearch(root.left);
  console.log(root.val);
  let right = recursiveDepthFirstSearch(root.right);
  console.log(root.val);
  return [root.val, ...left, ...right];
};
console.log(recursiveDepthFirstSearch(a));

var depthFirstSearch = (root) => {
  if (!root) return [];
  let left = depthFirstSearch(root.left);
  let right = depthFirstSearch(root.right);
  return [root.val, ...left, ...right];
};
// console.log(depthFirstSearch(null));
// console.log(depthFirstSearch(b));

// var breadthFirstSearch = (root) => {
//   if (!root) return [];
//   return [
//     root.val,
//     root.left.val,
//     root.right.val,
//     ...breadthFirstSearch(root.left),
//     ...breadthFirstSearch(root.right),
//   ];
// };
console.log(depthFirstSearch(null));
console.log("depthFirstSearch: ", depthFirstSearch(a));

const breadthFirstSearch = (root) => {
  if (!root) return null;

  let queue = [root];
  let values = [];

  while (queue.length) {
    let current = queue.shift();
    values.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return values;
};

console.log("breadthFirstSearch: ", breadthFirstSearch(a));

// search for element e in tree a
// 1- depth first search
var search = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();
    if (curr.left) {
      if (curr.left.val === target) return true;
      stack.push(curr.left);
    }
    if (curr.right) {
      if (curr.right.val === target) return true;
      stack.push(curr.right);
    }
  }
  return false;
};
// console.log(search(a, "8"));
//        a
//       / \
//     b     c
//    / \   / \
//   d   e  f

// stack = []

var search = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return search(root.left, target) || search(root.right, target);
};
console.log(search(a, "e"));
console.log(search(a, "f"));
console.log(search(a, "d"));
console.log(search(a, "5"));
//        a
//       / \
//     b     c
//    / \   / \
//   d   e  f

// stack = [a, b]

// 2- Breadth first search
var search = (root, target) => {
  if (!root) return false;
  let queue = [root];

  while (queue.length) {
    if (queue[0].val === target) return true;
    const curr = queue.shift();
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
};
