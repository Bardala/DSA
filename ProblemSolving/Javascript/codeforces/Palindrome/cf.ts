// https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/I

function checkIsPalindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      console.log('NO');
      return;
    }
    left++, right--;
  }

  console.log('YES');
  return true;
}
