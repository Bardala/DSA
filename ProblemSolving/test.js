var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;

  const counts = {};

  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }

  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }

  return true;
};

// var isAnagram = function (s, t, m = {}) {
//   for (let c of s) m[c] = (m[c] || 0) + 1;
//   for (let c of t) if (!m[c]--) return false;
//   return Object.values(m).every((v) => !v);
// };

// var isAnagram = (s, t) => {
//   let counts = {};
//   for (let i of s) counts[i] = (counts[i] || 0) + 1;
//   for (let j of t) if (!counts[j]--) return false;
//   return true;
// };
console.log(isAnagram("ab", "a"));
