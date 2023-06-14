import { ListNode, TreeNode, GraphNode } from "./classes"

/**
 * @Trees
*/
/**
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
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
 * @Trees
 * 1.10 Construct Binary Tree from Preorder and Inorder Traversal (medium)
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
*/


/**
 * @Trees
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
 * @Trees
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

/**
 * @Backtracking 
 * Time Complexity : The time complexity of a backtracking algorithm depends on the number of possible solutions and the constraints of the problem.
    In general, the time complexity can be expressed as O(b^d),
    where b is the branching factor (the number of choices at each level) and d is the depth of the search tree (the maximum length of a solution).
 * Space Complexity : The space complexity of a backtracking algorithm depends on the amount of memory used by the recursive calls and the auxiliary data structures. 
    In general, the space complexity can be expressed as O(d + s), where d is the maximum depth of the recursion and s is the size of the auxiliary data structures.
*/
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
 * @Backtracking
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
 * @Backtracking
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
 * @Backtracking
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

/**
 * @Backtracking
 * 2.5 Combination Sum II (medium)
 * https://leetcode.com/problems/combination-sum-ii/description/
 * TC|O(N * 2^N) SC|O(N)
 */
function combinationSum2(candidates: number[], target: number): number[][] {
    const solution: number[][] = []
    candidates.sort((a, b) => a - b)
    backtrack([], 0, 0)
    return solution

    function backtrack(combination: number[], sum: number, index: number): void {
        if (index === candidates.length || sum > target) {
            if (sum === target) {
                solution.push([...combination])
            }
            return
        }

        sum += candidates[index]
        combination.push(candidates[index])
        backtrack(combination, sum, index + 1)

        while (candidates[index] === candidates[index + 1]) index++

        sum -= combination.pop()
        backtrack(combination, sum, index + 1)
    }
};

/**
 * @Backtracking
 * 2.6 Word Search
 * https://leetcode.com/problems/word-search/
 * TC|O(4*w + c) SC|O(w)
 * The time complexity of a backtracking algorithm depends on the number of possible solutions and the constraints of the problem. In general, the time complexity can be expressed as O(b^d), where b is the branching factor (the number of choices at each level) and d is the depth of the search tree (the maximum length of a solution).
In this case, the function exist() is a backtracking algorithm that tries to find a word in a grid of characters. The branching factor is at most 4, since each cell has at most 4 adjacent cells (horizontally or vertically). The depth is equal to the length of the word, since each character in the word corresponds to one level in the search tree. Therefore, the time complexity of exist() is O(4^w), where w is the length of the word.
The function backtrack() is a helper function that checks if a given cell can be part of the solution and recursively explores the adjacent cells. The time complexity of backtrack() is also O(4^w), since it has the same branching factor and depth as exist(). However, backtrack() also modifies the board by marking visited cells with ‘*’, which adds some constant time to each call. Therefore, the overall time complexity of backtrack() is O(4^w + c), where c is some constant.
 */
function exist(board: string[][], word: string): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(board, word, 0, i, j)) return true;
            }
        }
    }

    return false;
};

function dfs(board: string[][], word: string, wordIndex: number, r: number, c: number): boolean {
    if (wordIndex === word.length) return true;

    if (r < 0 ||
        r > board.length - 1 ||
        c < 0 ||
        c > board[0].length ||
        board[r][c] !== word[wordIndex]
    ) return false;

    board[r][c] = '#';
    let isFound = (
        dfs(board, word, wordIndex + 1, r + 1, c) ||
        dfs(board, word, wordIndex + 1, r - 1, c) ||
        dfs(board, word, wordIndex + 1, r, c + 1) ||
        dfs(board, word, wordIndex + 1, r, c - 1)
    );

    board[r][c] = word[wordIndex];
    return isFound;
}

/**
 * @Backtracking
 * 2.7 Palindrome Partitioning (medium)
 * https://leetcode.com/problems/palindrome-partitioning/description/
 * TC|O(N * 2^N) SC|O(N), N is the length of the string
 */
let partition = (s: string): string[][] => {
    const solution: string[][] = []
    dfs(0, [])
    return solution

    function dfs(start: number, currentList: string[]): void {
        if (start >= s.length) solution.push([...currentList])

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                currentList.push(s.substring(start, end + 1))
                dfs(end + 1, currentList)
                // backtrack and remove the last substring
                currentList.pop()
            }
        }
    }

    function isPalindrome(low: number, high: number): boolean {
        while (low < high)
            if (s[low++] !== s[high--]) return false
        return true
    }
};

/**
 * @Backtracking
 * 2.8 Letter Combinations of a Phone Number (medium)
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 * TC|O(3^N * 4^M) SC|O(N + M) N is the digits that have 3 letters, M is the digits that have 4 letters 
 */
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    // base case: return an empty array if the input is empty
    let map: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    let res: string[] = []
    dfs(0, [])
    return res

    function dfs(index: number, path: string[]): void {
        if (index === digits.length) {
            res.push(path.join(''))
            return
        }

        let letters: string = map[digits[index]]

        for (let letter of letters) {
            path.push(letter)
            dfs(index + 1, path)
            path.pop()
        }
    }
};

/**
 * @Backtracking
 * 2.9 N-Queens (hard)
 * https://leetcode.com/problems/n-queens/description/
 * TC|O(N!) SC|O(N^2)
 */
let solveNQueens = (n: number): string[][] => {
    let res: string[][] = backtrack(n, 0, [], [])
    return res
};

function backtrack(n: number, index: number, res: string[][], path: number[][]): string[][] {
    const state = onAttack(path)
    if (state) return

    if (!state && path.length === n) {
        let strArr = convertToStrShape(path)
        res.push(strArr)
    }

    for (let i = 0; i < n && index < n; i++) {
        path.push([index, i])
        backtrack(n, index + 1, res, path)
        path.pop()
    }

    return res
}

function onAttack(path: number[][]): boolean {
    if (path.length === 1) return false

    for (let i = 0; i < path.length - 1; i++) {
        const n = path[i]
        for (let j = i + 1; j < path.length; j++) {
            const m = path[j]
            // check is there on the same raw or culomn
            if (n[0] === m[0] || n[1] === m[1]) return true
            // check is there on the same diagonal
            if (Math.abs(m[0] - n[0]) === Math.abs(m[1] - n[1])) return true
        }
    }

    return false
}

function convertToStrShape(path: number[][]): string[] {
    const length = path.length
    let res: string[] = []
    for (let i = 0; i < length; i++) {
        const curr = path[i][1]
        let str = ''
        for (let j = 0; j < length; j++) {
            if (j === curr) str += 'Q'
            else str += '.'
        }
        res.push(str)
    }
    return res
}

solveNQueens = (n: number): string[][] => {
    const result: string[][] = [];

    const backtrack = (curRow: number, curState: number[], results: string[][]) => {
        if (curRow === n) {
            const board: string[] = [];
            for (let i = 0; i < n; i++) {
                let row = '';
                for (let j = 0; j < n; j++) {
                    if (curState[i] === j) {
                        row += 'Q';
                    } else {
                        row += '.';
                    }
                }
                board.push(row);
            }
            results.push(board);
            return;
        }

        for (let i = 0; i < n; i++) {
            let safe = true;
            for (let j = 0; j < curRow; j++) {
                const diff = Math.abs(curState[j] - i);
                if (diff === 0 || diff === curRow - j) {
                    safe = false;
                    break;
                }
            }
            if (safe) {
                const nextState = curState.slice();
                nextState[curRow] = i;
                backtrack(curRow + 1, nextState, results);
            }
        }
    }

    backtrack(0, [], result);

    return result;
};

/**
 * @Graphs
 */

/**
 * @Graphs
 * 3.1 Number of Islands (medium)
 * https://leetcode.com/problems/number-of-islands/description/
 * TC|O(M*N) SC|O(M*N)
 */
function numIslands(grid: string[][]): number {
    let res: number = 0
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(i, j)
            }
        }
    return res

    function dfs(r: number, c: number): void {
        if (r >= grid.length || c >= grid[0].length || r < 0 || c < 0 || grid[r][c] !== '1') return

        grid[r][c] = '*'
        dfs(r, c + 1)
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c - 1)
    }
};

/**
 * 3.2 Max Area of Island (medium)
 * https://leetcode.com/problems/max-area-of-island/description/
 * TC|O(M*N) SC|O(M*N)
 */
function maxAreaOfIsland(grid: number[][]): number {
    let res: number = 0
    let area: number

    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
            if (grid[i][j] === 1) {
                area = 0
                dfs(i, j)
                res = Math.max(res, area)
            }

    return res

    function dfs(r: number, c: number): void {
        if (c < 0 || r < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== 1) return

        grid[r][c] = 8

        area++
        dfs(r, c + 1)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r - 1, c)
    }
};


/**
 * @Graph
 * 3.3 Clone Graph (medium)
 * https://leetcode.com/problems/clone-graph/description/
 * TC|O(V+E) SC|O(V+E),  where V is the number of nodes and E is the number of edges in the input graph.
 */
let cloneGraph = (node: GraphNode | null): GraphNode | null => {
    if (!node) return null
    let map: GraphNode[] = new Array(101).fill(null)
    let clone: GraphNode = new GraphNode(node.val)
    dfs(node, clone)
    return clone

    function dfs(head: GraphNode, clone: GraphNode): void {
        map[head.val] = clone

        for (let n of head.neighbors) {
            if (!map[n.val]) {
                let newNode: GraphNode = new GraphNode(n.val)
                clone.neighbors.push(newNode)
                dfs(n, newNode)
            } else {
                clone.neighbors.push(map[n.val])
            }

        }

    }
};

cloneGraph = (node: GraphNode | null): GraphNode | null => {
    if (!node) return null

    const map = new Map<GraphNode, GraphNode>().set(node, new GraphNode(node.val))
    const queue: GraphNode[] = [node]

    while (queue.length) {
        const curr = queue.shift()!
        curr.neighbors.forEach((n: GraphNode) => {
            if (!map.has(n)) {
                queue.push(n)
                map.set(n, new GraphNode(n.val))
            }
            map.get(curr)!.neighbors.push(map.get(n)!)
        })
    }

    return map.get(node)!
};

/**
 * @Graph stupid question I can't understand it
 * 3.4 Pacific Atlantic Water Flow (medium)
 * https://leetcode.com/problems/pacific-atlantic-water-flow/description/
 */

/**
 * @Graph
 * 3.5 Surrounded Regions (medium)
 * https://leetcode.com/problems/surrounded-regions/description/
 * TC|O(M*N) SC|O(M*N)
 */

// helper function
function solve(board: string[][]): void {
    let r = board.length
    let c = board[0].length

    // [["X","O","X","O","X","O"],
    //  ["O","X","O","X","O","X"],
    //  ["X","O","X","O","X","O"],
    //  ["O","X","O","X","O","X"]]

    // loop over left and right borders
    for (let i = 0; i < r; i++) {
        if (board[i][0] === 'O') dfs(i, 0)
        if (board[i][c - 1] === 'O') dfs(i, c - 1)
    }

    //loop over top and bottom borders
    for (let i = 0; i < c; i++) {
        if (board[0][i] === 'O') dfs(0, i)
        if (board[r - 1][i] === 'O') dfs(r - 1, i)
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (board[i][j] === 'P') board[i][j] = 'O'
            else if (board[i][j] === 'O') board[i][j] = 'X'
        }
    }

    function dfs(r: number, c: number): void {
        if (r == board.length || c == board[0].length || r < 0 || c < 0 || board[r][c] !== 'O') return

        board[r][c] = 'P'

        dfs(r, c + 1)
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c - 1)
    }
};

/**
 * @Graph
 * 3.6 Rotting Oranges (medium)
 * https://leetcode.com/problems/rotting-oranges/description/
 * TC|O(M*N) SC|O(M*N)
 */
let orangesRotting = (grid: number[][]): number => {
    let [ROWS, COLS, minutes, fresh] = [grid.length, grid[0].length, 0, 0]
    let queue: number[][] = []
    let dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    for (let i = 0; i < ROWS; i++)
        for (let j = 0; j < COLS; j++)
            if (grid[i][j] === 1) fresh++
            else if (grid[i][j] === 2) queue.push([i, j])

    while (queue.length && fresh) {
        let qLen = queue.length

        // loop through all current rotten oranges 
        for (let rotten = 0; rotten < qLen; rotten++) {
            let [row, col] = queue.shift()

            // damage all fresh neighbors of the current rotten orange
            for (let dir of dirs) {
                let [r, c] = [row + dir[0], col + dir[1]]

                if (
                    r < 0 ||
                    r >= ROWS ||
                    c < 0 ||
                    c >= COLS ||
                    grid[r][c] !== 1
                ) continue

                grid[r][c] = 2
                fresh--
                queue.push([r, c])
            }
        }
        minutes++
    }
    return fresh > 0 ? -1 : minutes
}


/**
 * @Graph
 * 3.7 Course Schedule (medium)
 * https://leetcode.com/problems/course-schedule/description/
 * TC|O(V+E) SC|O(V+E)
 */

let canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
    let set: Set<number> = new Set()
    let visited: Record<number, number[]> = {}

    for (let i = 0; i < numCourses; i++) visited[i] = []
    for (let [r, c] of prerequisites) visited[r].push(c)
    for (let crs = 0; crs < numCourses; crs++) if (!dfs(crs)) return false
    return true

    function dfs(crs: number): boolean {
        if (set.has(crs)) return false
        if (!visited[crs].length) return true
        set.add(crs)

        for (let c of visited[crs]) if (!dfs(c)) return false

        set.delete(crs)
        visited[crs] = []
        return true
    }
}

canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
    const set = new Set<number>()
    const map = new Map<number, number[]>()

    for (let arr of prerequisites)
        if (!map.has(arr[0])) map.set(arr[0], [arr[1]])
        else map.get(arr[0]).push(arr[1])

    for (let course of map.keys()) if (!dfs(course)) return false
    return true

    function dfs(course: number): boolean {
        if (set.has(course)) return false
        if (!map.has(course) || !map.get(course)) return true
        set.add(course)

        for (let c of map.get(course)) if (!dfs(c)) return false

        set.delete(course)
        map.set(course, null)
        return true
    }
};

