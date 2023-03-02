// Binary Tree
// Depth First Search

class BinaryTree {
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

let a = new BinaryTree("a");
let b = new BinaryTree("b");
let c = new BinaryTree("c");
let d = new BinaryTree("d");
let e = new BinaryTree("e");
let f = new BinaryTree("f");

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

// Recursive
var depthFirstSearch = (root) => {
  if (!root) return [];
  let left = depthFirstSearch(root.left);
  let right = depthFirstSearch(root.right);
  return [root.val, ...left, ...right];
};
console.log(depthFirstSearch(null));
console.log(depthFirstSearch(a));
console.log(depthFirstSearch(b));
