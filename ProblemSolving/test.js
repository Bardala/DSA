// var isValid = (s, stack = []) => {
//   const map = {
//     "}": "{",
//     "]": "[",
//     ")": "(",
//   };

//   for (const char of s) {
//     /* Time O(N) */
//     const isBracket = char in map;
//     if (!isBracket) {
//       stack.push(char);
//       continue;
//     } /* Space O(N) */

//     const isEqual = stack[stack.length - 1] === map[char];
//     if (isEqual) {
//       stack.pop();
//       continue;
//     }

//     return false;
//   }

//   return stack.length === 0;
// };

// var isValid = function (s) {
//   // Initialize stack to store the closing brackets expected...
//   let stack = [];
//   // Traverse each charater in input string...
//   for (let idx = 0; idx < s.length; idx++) {
//     // If open parentheses are present, push it to stack...
//     if (s[idx] == "{") {
//       stack.push("}");
//     } else if (s[idx] == "[") {
//       stack.push("]");
//     } else if (s[idx] == "(") {
//       stack.push(")");
//     }
//     // If a close bracket is found, check that it matches the last stored open bracket
//     else if (stack.pop() !== s[idx]) {
//       return false;
//     }
//   }
//   return !stack.length;
// };

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
console.log(isValid("([]){}"));
console.log(isValid("(}"));
