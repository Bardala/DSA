// class MinStack {
//     stack: number[]
//     min: number
//     constructor() {
//         this.stack = []
//         this.min = 0
//     }

//     push(val: number): void {
//         this.stack.push(val)
//         this.min = Math.min(this.min, val)
//     }

//     pop(): void {
//         this.stack.pop()
//     }

//     top(): number {
//         return this.stack[this.stack.length - 1]
//     }

//     getMin(): number {
//         return this.min
//     }
// }

// const minStack = new MinStack()
// minStack.push(-2)
// minStack.push(0)
// minStack.push(-3)
// console.log(minStack.getMin()) // -3
// minStack.pop()
// console.log(minStack.top()) // 0
// console.log(minStack.getMin()) // -2

// // function subsets(nums: number[]): number[][] {
// //     return backTrack(nums)

// //     function backTrack(nums: number[]): number[][] {
// //         if (nums === []) return [[]]
// //         let lastElement = nums.pop()
// //         // return [[lastElement], lastElement, ...backTrack(nums)]
// //         return [[lastElement], …backTrack(nums), …backTrack(nums).map(subset => [lastElement, …subset])]
// //         // return [[lastElement]].concat(backTrack(nums)).concat(backTrack(nums).map(subset => [lastElement].concat(subset)))
// //     }
// // };

// function subsets(nums: number[]): number[][] {
//     let result: number[][] = [[]]
//     helper(nums, 0, result)
//     return result

//     function helper(nums: number[], index: number, result: number[][]): void {
//         if (index === nums.length) return
//         let newSubsets: number[][] = []
//         for (let subset of result) {
//             newSubsets.push(subset.concat(nums[index]))
//         }
//         result.push(...newSubsets)
//         helper(nums, index + 1, result)
//     }
// };