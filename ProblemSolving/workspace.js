// var checkInclusion = function (s1, s2) {
//   let map = new Map();
//   let weight = 0;
//   for (let i = 0; i < s1.length; i++) {
//     if (!map.has(s1[i])) {
//       map.set(s1[i], i + 1);
//     }
//     weight += map.get(s1[i]);
//   }

//   for (let i = 0; i < s2.length; i++) {
//     let permutationWeight = 0;
//     let set = new Set();
//     if (map.has(s2[i])) {
//       for (let j = i; j < s1.length + i; j++) {
//         if (map.has(s2[j])) {
//           set.add(s2[j]);
//           permutationWeight += map.get(s2[j]);
//         } else if (permutationWeight > weight) break;
//       }
//       if (permutationWeight == weight && isMapHasSetKeys(map, set)) {
//         return true;
//       }
//     }
//   }

//   function isMapHasSetKeys(map, set) {
//     let count = 0;
//     for (i of set) {
//       map.has(i);
//       count++;
//     }
//     return map.size == count;
//   }
//   return false;
// };

// var checkInclusion = function (s1, s2) {
//   let j = 0,
//     weight = 0;
//   let map = {};

//   for (let c of s1) {
//     map[c] = (map[c] || 0) + 1;
//     weight++;
//   }

//   while (j < s2.length) {
//     let weight2 = weight;
//     let newMap = Object.assign({}, map);
//     for (let i = j; newMap[s2[i]]; i++) {
//       if (newMap[s2[i]]) {
//         newMap[s2[i]]--;
//         weight2--;
//         if (!weight2) return true;
//       }
//     }
//     j++;
//   }
//   return false;
// };

// var checkInclusion = (s1, s2) => {
//   let windowWeight = 0;
//   let map = {};
//   let weight = 0;

//   for (let i = 0; i < s1.length; i++) {
//     if (!map[s1[i]]) {
//       map[s1[i]] = i + 1;
//     }
//     weight += map[s1[i]];
//   }

//   for (let i = 0; i < s1.length; i++) {
//     if (!map[s2[i]]) map[s2[i]] = 0;
//     windowWeight += map[s2[i]];
//   }

//   for (
//     let start = 1, end = start + s1.length - 1;
//     end < s2.length;
//     start++, end++
//   ) {
//     if (windowWeight === weight) return true;
//     else {
//       if (!map[s2[start]]) map[s2[start]] = 0;
//       if (!map[s2[end]]) map[s2[end]] = 0;
//       windowWeight += map[s2[end]];
//       windowWeight -= map[s2[start]];
//     }
//   }
//   return false;
// };

// //  s1 = "ab", s2 = "eidbaooo"
// var checkInclusion = function (s1, s2) {
//   if (s1.length > s2.length) return false;
//   let neededChar = {};
//   for (let i = 0; i < s1.length; i++) {
//     neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
//   }

//   let left = 0,
//     right = 0,
//     requiredLength = s1.length;

//   while (right < s2.length) {
//     if (neededChar[s2[right]] > 0) requiredLength--;
//     neededChar[s2[right]]--;
//     right++;
//     if (requiredLength === 0) return true;
//     if (right - left === s1.length) {
//       if (neededChar[s2[left]] >= 0) requiredLength++;
//       neededChar[s2[left]]++;
//       left++;
//     }
//   }
//   return false;
// };

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// // var checkInclusion = function(s1, s2) {
// //   let s = {}, s1sum = 0, s2sum = 0,
// //       left = 0, right = s1.length - 1;

// //   for (let i = 0; i < s1.length; i++) {
// //       s1sum += s1.charCodeAt(i);
// //       s2sum += s2.charCodeAt(i);
// //   }

// //   while (right < s2.length) {
// //       if (s1sum === s2sum) {
// //           let ch = isTheSameFreq(s1, s2.substring(left, right + 1));
// //           if (ch) return true;
// //       }

// //       right++;
// //       if (!s2[right]) return false;
// //       s2sum = s2sum - s2[left++].charCodeAt(0) + s2[right].charCodeAt(0);
// //   }

// //   return false;

// //   function isTheSameFreq(s1, s2) {
// //       let counter = 0;
// //       for (let i = 0; i < s1.length; i++)
// //           if (s2.includes(s1[i])) counter++;

// //       return counter === s1.length;
// //   }
// // };
// var checkInclusion = (s1, s2) => {
//   let start = 0,
//     end = s1.length - 1,
//     windowWeight = 0,
//     weight = 0;

//   for (let i = 0; i < s1.length; i++) {
//     weight += s1.charCodeAt(i);
//     windowWeight += s2.charCodeAt(i);
//   }

//   while (end < s2.length) {
//     if (
//       windowWeight === weight &&
//       isPermutation(s1, s2.substring(start, end + 1))
//     )
//       return true;
//     end++;
//     if (end === s2.length) return false;
//     windowWeight += s2[end].charCodeAt(0);
//     windowWeight -= s2[start++].charCodeAt(0);
//   }
//   return false;

//   function isPermutation(s1, s2) {
//     for (let i of s1) if (!s2.includes(i)) return false;

//     return true;
//   }
// };

// // console.log(checkInclusion("abo", "eidbaooo"));
// // console.log(checkInclusion("ab", "eidboaoo"));
// // console.log(checkInclusion("hello", "ooolleoooleh"));
// // console.log(checkInclusion("abc", "ccccbbbbaaaa"));
// // console.log(checkInclusion("abc", "bbbca"));
// // console.log(checkInclusion("adc", "dcda"));

// var minWindow = function (s, t) {
//   if (t.length > s.length) return "";
//   let second = 0,
//     end = 0,
//     counter = 0,
//     c2 = 0,
//     str = "",
//     minStr = "";

//   let map = {};
//   for (let c of t) {
//     map[c] = (map[c] || 0) + 1;
//   }

//   while (end < s.length) {
//     if (map[s[end]] > 0) {
//       counter++;
//       counter === 2 ? (second = end) : end;
//     }
//     map[s[end]]--;
//     counter ? (str += s[end]) : "";
//     if (map[s[end]] < 0) {
//       map = {};
//       counter = 0;
//       str = "";
//       end--;
//       for (let c of t) map[c] = (map[c] || 0) + 1;
//     }
//     end++;
//     if (counter === t.length) {
//       counter = 0;
//       c2++;
//       if (second) end = second;
//       if (c2 == 1) {
//         minStr = str;
//       }
//       newStr = str;
//       if (newStr.length < minStr.length) minStr = newStr;
//       str = "";
//       for (let c of t) map[c] = (map[c] || 0) + 1;
//     }
//   }
//   return minStr;
// };

// var minWindow = (s, t) => {
//   let weight = 0,
//     windowWeight = 0,
//     start = 0,
//     end = 0,
//     count = 0,
//     str = "",
//     newStr = "",
//     res = [];
//   for (let i of t) weight += i.charCodeAt(0);
//   while (end < s.length) {
//     if (t.includes(s[end])) {
//       count++;
//       count === 1 ? (start = start || end) : end;
//       str += s[end];
//       windowWeight += s.charCodeAt(end);
//     }
//     if (count) newStr += s[end];
//     end++;
//     if (str.length === t.length) {
//       if (weight === windowWeight) {
//         res.push(newStr);
//       }
//       windowWeight -= s.charCodeAt(start++);
//       newStr = newStr.slice(1);
//       str = str.slice(1);
//       while (!t.includes(s[start])) {
//         newStr = newStr.slice(1);
//         start++;
//       }
//     }
//   }
//   return res;
// };
// // console.log(minWindow("ADOBECODEBANC", "ABC"));
// // console.log(minWindow("bba", "ab"));
// console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"));

// var largestNumber = function(nums) {
//     nums = nums.map(n => n.toString())
//   for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] < nums[j] + nums[i]){
//             temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//         }
//     }
// }
// return + nums.join('');
// };
var largestNumber = function(nums) {
    nums = nums.map(n => n.toString())
    
    for (let i = 0; i < nums.length; i++){
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] < nums[j] + nums[i]){
              temp = nums[i];
              nums[i] = nums[j];
              nums[j] = temp;
          }
      }
  }
  res = nums.join('');
  return res == 0 ? '0' : res;
  };


function largestNumber(num) {
    return num.sort(function(a, b) {
        return (b + '' + a ) - (a + '' + b);
    }).join('').replace(/^0*/,'') || '0';
}
// console.log(largestNumber([123,897,89, 4, 99]))

