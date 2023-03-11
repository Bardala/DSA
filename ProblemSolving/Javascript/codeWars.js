String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
console.log("HELLO I AM DONALD".isUpperCase());

Array.prototype.findOdd = function () {
  return this.reduce((x, y) => x ^ y);
};
console.log([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1].findOdd());

// findOdd = (A) => A.reduce((x, y) => x ^ y);
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// const XO = (str) => {
//   let countX = 0,
//     countO = 0;
//   str = str.toLowerCase();
//   for (let i of str) {
//     switch (i) {
//       case "o":
//         countO++;
//         break;
//       case "x":
//         countX++;
//         break;
//     }
//   }
//   return countO == countX;
// };

const XO = (str) => {
  let x = str.match(/x/gi) || 0;
  let o = str.match(/o/gi) || 0;
  return x.length == o.length;
};

// function XO(str) {
//   return (
//     str.toLowerCase().split("x").length == str.toLowerCase().split("o").length
//   );
// }

console.log(XO("zpzpzpp"));
console.log(XO("ooxXm"));
console.log(XO("ooxxx"));

// function getSum(a, b) {
//   let res = 0,
//     big = 0,
//     small = 0;
//   if (a == b) return a;
//   a > b ? ((big = a), (small = b)) : ((big = b), (small = a));
//   for (let i = small + 1; i <= big; i++) {
//     small += i;
//   }
//   return res;
// }
console.log(getSum(0, 1));
function getSum(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return (max - min + 1) * ((max + min) / 2);
}

function sortOddNums(array) {
  let odd = array.filter((e) => e % 2).sort((a, b) => a - b);
  return array.map((e) => (e % 2 ? odd.shift() : e));
}
console.log(sortOddNums([1, 10, 7, 5, 6, 2, 3]));

function solution(string) {
  return string.replace(/([A-Z])/g, ` $1`);
}
console.log(solution("camelCase"));

// function spinWords(str) {
//   let res = str
//     .split(" ")
//     .filter((word) => word.length > 4)
//     .map((word) => word.split("").reverse().join(""));
//   return str
//     .split(" ")
//     .map((word) => (word.length < 5 ? word : res.shift()))
//     .join(" ");
// }
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("welcome"));

// function spinWords(str) {
//   return str.replace(/\w{5,}/gi, (w) => w.split("").reverse().join(""));
// }

function spinWords(str) {
  return str
    .split(" ")
    .map((w) => (w.length > 4 ? w.split("").reverse().join("") : w))
    .join(" ");
}

function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++)
    if (s.match(new RegExp(s[i], "gi")).length === 1) return s[i];
  return "";
}
console.log(firstNonRepeatingLetter("moonmen"));

// function productFib(num) {
//   function fib(a) {
//     if (a === 0) return 0;
//     else if (a === 1) return 1;
//     else return fib(a - 1) + fib(a - 2);
//   }
//   for (let i = 0; i < 100; i++) {
//     if (fib(i) * fib(i + 1) === num) return [fib(i), fib(i + 1), true];
//     else if (fib(i) * fib(i + 1) > num) return [fib(i), fib(i + 1), false];
//   }
// }
console.log(productFib(4895));

function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

// function generateHashtag(str) {
//   if (str.replace(/\s+/g, "").length === 0) return false;
//   cap = str.replace(/\w+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
//   let res = "#" + cap.replace(/\s+/g, "");
//   return res.length > 140 ? false : res;
// }
function generateHashtag(str) {
  if (str.replace(/\s+/g, "").length === 0) return false;
  let res =
    "#" +
    str
      .replace(/\w+/g, (w) => w.replace(/\b\w/g, w[0].toUpperCase()))
      .replace(/\s+/g, "");
  return res.length > 140 ? false : res;
}
console.log(generateHashtag("do we have A Hashtag"));
console.log(generateHashtag(" "));

// function topThreeWords(text) {
//   function removeOccurrence(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i][0] !== arr[i + 1][0]) res.push(arr[i]);
//     }
//     res.push(arr[arr.length - 1]);
//     return res;
//   }

//   let box = [];
//   let arr = text.match(/\w+'*\w*/gi);
//   for (let i of arr) {
//     box.push([i, text.match(new RegExp(i, "g")).length]);
//   }
//   box.sort((a, b) => b[1] - a[1]);
//   let res = removeOccurrence(box);
//   console.log(res);
//   return [
//     res[0][0].toLowerCase(),
//     res[1][0].toLowerCase(),
//     res[2][0].toLowerCase(),
//   ];
// }

// function topThreeWords(text) {
//   let map = new Map();
//   text.replace(/\w+'?\w*/g, (word) => {
//     word = word.toLowerCase();
//     map.set(word, map.has(word) ? map.get(word) + 1 : 1);
//   });
//   return [...map]
//     .sort((a, b) => b[1] - a[1])
//     .map((a) => a[0])
//     .slice(0, 3);
// }

function topThreeWords(text) {
  let map = new Map();
  text.replace(/\w+'?\w*/g, (match) => {
    match = match.toLowerCase();
    map.set(match, map.has(match) ? map.get(match) + 1 : 1);
  });
  return [...map]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, 3);
}
let str = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

// console.log(topThreeWords(str));
// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
console.log(topThreeWords("Dressers jumped among the cat among the monster"));
