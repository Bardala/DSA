// var isPalindrome = function (s) {
//   const alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let set = new Set(alphabet);
//   for (let l = 0, r = s.length - 1; l < r; ) {
//     let leftLetter = "";
//     let rightLetter = "";
//     if ()
//     if (set.has(s[l].toLowerCase())) {
//       leftLetter = s[l].toLowerCase();
//       l++;
//     }

//     if (set.has(s[r].toLowerCase())) {
//       rightLetter = s[r].toLowerCase();
//       r--;
//     }

//     if (leftLetter !== rightLetter) return false;
//   }
//   return true;
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
var isPalindrome = function (s) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let set = new Set(alphabet);
  let word = "",
    reverse = "",
    letter = "";
  for (let l of s) {
    letter = l.toLowerCase();
    if (set.has(letter)) {
      word += letter;
      reverse = letter + reverse;
    }
  }
  return word === reverse;
};
console.log(isPalindrome("0P"));
