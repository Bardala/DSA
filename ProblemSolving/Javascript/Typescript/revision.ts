import { TreeNode } from "./DS"

/* 1. Trees */
/**
 * 1.1 Binary Tree Inorder Traversal (easy)
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 * Stack
 * TC|O(N) SC|O(N)
 */

//       1
//    /    \
//   2      3
// /  \    / \
// 4   5  6   7

// [4, 2, 5, 1, 6, 3, 7]

//       4
//     /   \
//    2     5
//   / \    / \
//  1  6   3   7

function inorderTraversal(root: TreeNode | null, res: number[] = []): number[] {
    if (!root) return res

    inorderTraversal(root.left, res)
    res.push(root.val)
    inorderTraversal(root.right, res)
    return res
};

function inorderTraversalIteratively(root: TreeNode | null): number[] {
    let stack: TreeNode[] = []
    let res: number[] = []
    let curr: TreeNode | null = root

    while (stack.length > 0 || curr) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop() as TreeNode
        res.push(curr.val)
        curr = curr.right
    }
    return res
}

/**
 * 1.2 Invert Binary Tree (easy)
 * https://leetcode.com/problems/invert-binary-tree/description/
 * Stack
 * TC|O(N) SC|O(N)
 */

//       1
//    /    \
//   2      3
// /  \    / \
// 4   5  6   7

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root

    let left: TreeNode = root.left as TreeNode
    let right: TreeNode = root.right as TreeNode

    root.left = invertTree(right)
    root.right = invertTree(left)

    return root
};

/**
 * 1.3 Maximum Depth of Binary Tree (easy)
 * Queue
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 * TC|O(N) SC|O(N), TC|O(N) SC|O(H) where H is the height of the tree 
 * The maximum amount of space occurs when the queue contains all the nodes in the last level of the tree,
  which can be up to n/2 nodes. Therefore, the space complexity is O(n/2),
  which is equivalent to O(n) in big O notation. 😊
  */

// The best answer between this answer and the last answer depends on the shape and size of the tree. If the tree is balanced and has many nodes, then the iterative answer using a queue may be better, as it uses less space than the recursive answer.
// However, if the tree is skewed or has few nodes, then the recursive answer may be better,
// as it uses less time than the iterative answer. 😊

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    let queue: TreeNode[] | null = [root] as TreeNode[]
    let depth: number = 0

    while (queue.length > 0) {
        for (let i = queue.length; i > 0; i--) {
            let curr = queue.shift() as TreeNode | null

            if (curr) {
                if (curr.left) queue.push(curr.left)
                if (curr.right) queue.push(curr.right)
            }
        }

        depth++
    }
    return depth
};

function maxDepthRecursively(root: TreeNode | null): number {
    if (!root) return 0
    return 1 + Math.max(maxDepthRecursively(root.left), maxDepthRecursively(root.right))
}

/**
 * 1.4 Same Tree (easy)
 * https://leetcode.com/problems/same-tree/description/
 * TC|O(N) SC|O(N)
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

function isSameTreeIteratively(p: TreeNode | null, q: TreeNode | null): boolean {
    let stackP = [p] as TreeNode[]
    let stackQ = [q] as TreeNode[]

    while (stackP.length > 0) {
        let p = stackP.pop() as TreeNode | null
        let q = stackQ.pop() as TreeNode | null

        if (p?.val !== q?.val) return false

        if (p) {
            stackP.push(p.left!)
            stackP.push(p.right!)
        }

        if (q) {
            stackQ.push(q.left!)
            stackQ.push(q.right!)
        }
    }
    return true
};

// const p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// const q = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// const r = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))


// console.log(isSameTreeIteratively(p, q)) // true
// console.log(isSameTreeIteratively(p, r)) // false

/**
 * 1.5 Subtree of Another Tree (easy)
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 * TC|O(NM) SC|O(N+M)
 * There is another albeit less efficient solution that operates in O(n+m) time and O(n+m) space complexity that uses a string representation of the tree.
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false
    if (isSame(root, subRoot!)) return true
    return isSubtree(root.left!, subRoot) || isSubtree(root.right!, subRoot)

    function isSame(p: TreeNode, q: TreeNode): boolean {
        if (!p && !q) return true
        if (!p || !q) return false
        if (p.val !== q.val) return false
        return isSame(p.left!, q.left!) && isSame(p.right!, q.right!)
    }
};

/**
 * 1.6 Lowest Common Ancestor of a Binary Tree (medium)
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 * TC|O(N) SC|O(N)
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (p.val === root.val || q.val === root.val) return root
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
    return root
};

/**
 * 1.7 Binary Tree Level Order Traversal (medium)
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * TC|O(N) SC|O(N)
 */
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    let queue: TreeNode[] = [root]
    let res: number[][] = []

    while (queue.length > 0) {
        let level: number[] = []
        for (let i = queue.length; i > 0; i--) {
            let curr: TreeNode = queue.shift()
            level.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        res.push(level)
    }
    return res
};
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log(levelOrder(root))

/**
 * 1.8 Validate Binary Search Tree (medium)
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 * TC|O(N) SC|O(N)
 */

function isValidBST(root: TreeNode | null, min: number = -Infinity, max: number = Infinity): boolean {
    if (!root) return true
    if (root.val >= max || root.val <= min) return false
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};

function isValidBSTInorderTraverse(root: TreeNode | null): boolean {
    let res = inorderTraversal(root)
    for (let i = 0; i < res.length; i++) {
        if (res[i] > res[i + 1]) return false
    }
    return true;
}

/**
 * 1.9 Kth Smallest Element in a BST (medium)
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 * TC|O(H + K) SC|O(H) H is the height of the tree 
*/
const binaryTree = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4))

// function kthSmallest(root: TreeNode | null, k: number): number {
//     let stack: TreeNode[] = [root]
//     let curr: TreeNode = root
//     let res: number[] = []

//     while (curr || stack.length > 0) {
//         while (curr) {
//             stack.push(curr)
//             curr = curr.left
//         }

//         curr = stack.pop()
//         res.push(curr.val)
//         if (res.length === k) return res.pop()
//         curr = curr.right
//     }

// };

// Improved version of the above solution, we don't need array to store all elements 
// we just need a counter to keep track of the number of elements we have visited
// we also can dismiss the counter and just decrease k by 1 each time we visit a node
// TC|O(H + k) SC|O(H) H is the height of the tree, H = logN for a balanced tree
function kthSmallest(root: TreeNode | null, k: number): number {
    let stack: TreeNode[] = [root]
    let curr: TreeNode = root
    let counter = 0

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop()
        counter++
        if (counter === k) return curr.val
        curr = curr.right
    }

};

/**
 * 1.10 Construct Binary Tree from Preorder and Inorder Traversal (medium)
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
*/


/**
 * 1.11 Binary Tree Maximum Path Sum (hard)
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 * TC|O(N) SC|O(H) H is the height of the tree
*/
function maxPathSum(root: TreeNode | null): number {
    let max_path_in_the_tree: number = -Infinity
    findMaxPath(root)
    return max_path_in_the_tree

    function findMaxPath(node: TreeNode): number {
        if (!node) return 0

        const leftSum: number = findMaxPath(node.left)
        const rightSum: number = findMaxPath(node.right)

        const current_max_path = Math.max(
            node.val,
            node.val + leftSum,
            node.val + rightSum,
        )

        max_path_in_the_tree = Math.max(
            max_path_in_the_tree,
            current_max_path,
            node.val + leftSum + rightSum
        )

        return current_max_path
    }
};
//     5
//    / \
//   4   8
//  /   / \
// 11  13  4
// / \      \
// 7  2      1


/**
 * 1.12 Serialize and Deserialize Binary Tree (hard)
 */

/*
 * Encodes a tree to a single string.
 */
// [1,2,3,null,null,4,5,null,null,null,null]
// 1,2,3,4,[5]
function serialize(root: TreeNode | null): string {
    if (!root) return `-1001`
    let queue: TreeNode[] = [root]
    let curr: TreeNode
    let res: string = `${root.val},`

    while (queue.length > 0) {
        curr = queue.shift()

        if (curr) {
            if (curr.left) {
                queue.push(curr.left)
                res += `${curr.left.val},`
            }
            else res += '-1001,'
            if (curr.right) {
                queue.push(curr.right)
                res += `${curr.right.val},`
            }
            else res += '-1001,'
        }
    }

    return res
};

/*
 * Decodes your encoded data to tree.
 */
//  '1,2,-1,-1,4,5,-1,-1,-1,-1'
function deserialize(data: string): TreeNode | null {
    if (data === '-1001') return null

    let arr: number[] = data.split(',').map(Number)
    let root: TreeNode = new TreeNode(arr.shift())
    let curr: TreeNode
    let queue: TreeNode[] = [root]
    let num: number

    while (queue.length > 0) {
        curr = queue.shift()

        if (arr.length > 0) {
            num = arr.shift()
            if (num !== -1001) {
                curr.left = new TreeNode(num)
                queue.push(curr.left)
            } else curr.left = null
        }

        if (arr.length > 0)
            num = arr.shift()
        if (num !== -1001) {
            curr.right = new TreeNode(num)
            queue.push(curr.right)
        } else curr.right = null
    }

    return root
};

/**Backtracking */
/**
 * 2.1 Subsets (medium)
 * https://leetcode.com/problems/subsets/description/
 * TC|O(N * 2^N) SC|O(N)
 */
function subsets(nums: number[]): number[][] {
    let solution: number[][] = [];
    backtrack([], 0);
    return solution;

    function backtrack(subset: number[], index: number): void {
        // bounding condition
        if (index == nums.length) {
            solution.push([...subset]);
            return;
        }

        subset.push(nums[index]);
        backtrack(subset, index + 1);
        subset.pop();
        backtrack(subset, index + 1);
    }
}

/**
 * 2.2 Combination Sum (medium)
 * https://leetcode.com/problems/combination-sum/description/
 * TC|O(N * 2^N) SC|O(N)
 * The time complexity is O(N * 2^N) because in the worst case, we will have a total of 2^N combinations,
  ex: [1,1,1,1,1,1,1,1,1,1], target = 10 => 2^10 = 1024 combinations 
 * For each combination, we need to copy it into the solution array, which will take O(N) time.
 * Therefore, the overall time complexity is O(N * 2^N).
 * The space complexity is O(N) because we need to store the current combination in memory during the backtracking process.
 * In the worst case, the size of the combination would be equal to the size of the input array.
 */

function combinationSum(candidates: number[], target: number): number[][] {
    let solution: number[][] = []
    backtrack([], 0, 0)
    return solution

    function backtrack(combination: number[], index: number, sum: number): void {
        // bounding condition
        if (sum === target) {
            solution.push([...combination])
            return
        } else if (sum > target || index >= candidates.length) return

        combination.push(candidates[index])
        sum += candidates[index]
        backtrack(combination, index, sum)

        sum -= combination.pop()
        backtrack(combination, index + 1, sum)
    }

};

/**
 * 2.3 Permutations (medium)
 * https://leetcode.com/problems/permutations/description/
 */

// function permute(nums: number[]): number[][] {
//     const result = [];

//     if (nums.length === 1) {
//         return [nums];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i];
//         const remaining = [...nums].filter((num) => num != current);
//         let perms = permute(remaining);

//         for (let j = 0; j < perms.length; j++) {
//             result.push([...perms[j], current])
//         }
//     }
//     return result;
// };
// function permute(nums: number[]): number[][] {
//     let solution: number[][] = []
//     let used: boolean[] = new Array(nums.length).fill(false) // keep track of used elements
//     backtrack([], used) // start with an empty permutation and no used elements

//     return solution

//     function backtrack(curr: number[], used: boolean[]): void {
//         if (curr.length === nums.length) { // base case: permutation is complete
//             solution.push([...curr]) // add a copy of curr to solution
//             return
//         }
//         for (let i = 0; i < nums.length; i++) { // try all possible positions
//             if (used[i]) continue // skip if element is already used
//             curr.push(nums[i]) // add element to curr
//             used[i] = true // mark element as used
//             backtrack(curr, used) // recurse with updated curr and used
//             curr.pop() // remove element from curr
//             used[i] = false // mark element as unused
//         }
//     }
// };
function permute(nums: number[]): number[][] {
    const res: number[][] = [];

    function helper(idx: number) {
        if (idx === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let i = idx; i < nums.length; i++) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            helper(idx + 1);
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }

    helper(0);
    return res;
}

/**
 * 2.4 Subsets II (medium)
 * https://leetcode.com/problems/subsets-ii/description/
 * TC|O(N * 2^N) SC|O(N)
 */
function subsetsWithDup(nums: number[]): number[][] {
    let solution: number[][] = [];
    nums.sort((a, b) => a - b);
    backtrack([], 0);
    return solution;

    function backtrack(subset: number[], index: number): void {
        // bounding condition
        if (index == nums.length) {
            solution.push([...subset]);
            return;
        }

        subset.push(nums[index]);
        backtrack(subset, index + 1);
        subset.pop();

        // skip duplicates
        while (nums[index] === nums[index + 1]) {
            index += 1
        }

        backtrack(subset, index + 1);
    }
}
