function isSubsequence(s, t) {
  if (t.indexOf(s) > 0) return true;

  let map = new Map();
  let tSequence = "";

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], s[i]);
    }
  }

  for (let i of t) if (map.has(i)) tSequence += i;

  return s === tSequence;
}
let s = "leeeeeetcode";
let t = "cte";
// console.log(isSubsequence(t, s));

var solution = (nums) => {
  let map = new Map();
  let max = 0;
  for (let i of nums) {
    if (!map.has(i)) map.set(i, 1);
  }

  for (let i of nums) {
    if (map.has(i + 1)) {
      if (map.get(i + 1) > 1) {
        map.set(i, map.get(i) + map.get(i + 1));
      } else map.set(i, map.get(i) + 1);
    }

    max = Math.max(max, map.get(i));
  }
  console.log(map);
  return max + 1;
};

console.log(solution([100, 1, 200, 3, 2, 4]));
console.log(solution([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
