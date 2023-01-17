var maxArea = function (height) {
  let max = 0,
    small = 0,
    big = 0,
    biggestAreaBetweenTwins = 0,
    area = 0;
  let twins = {};

  height = [0, ...height];

  for (let i = 0; i < height.length; i++) {
    // O(n)
    for (let l = i + 1, r = height.length - 1; l < r; ) {
      // O(n)
      if (height[l] < height[r]) {
        small = height[l];
        big = height[r];
        area = small * (r - l);
        biggestAreaBetweenTwins = checkTwins(twins, r, l);
        l++;
      } else if (height[l] > height[r]) {
        small = height[r];
        big = height[l];
        area = small * (r - l);
        biggestAreaBetweenTwins = checkTwins(twins, r, l);
        r--;
      } else {
        small = height[r];
        // check is there a value between twins is bigger than its value
        twins.left = l;
        twins.right = r;
        twins.value = small;
        area = small * (r - l);
        l++;
      }

      max = Math.max(area, max, biggestAreaBetweenTwins || 0);
    }
  }
  return max;

  function checkTwins(twins, r, l, big) {
    // is big bigger than twins value ?
    if (big > twins?.value) {
      // if yes which is big nearest to left or right ?
      let leftDistance = Math.abs(l - twins?.left);
      let rightDistance = Math.abs(r - twins?.right);
      let biggestDistance = 0;

      if (leftDistance > rightDistance) {
        biggestDistance = leftDistance;
      } else if (leftDistance > rightDistance) {
        biggestDistance = rightDistance;
      }

      // calculate the area between big and the farest element
      return biggestDistance * twins.value;
    }
  }
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));

var maxArea = function (height) {
  let maxArea = 0;

  for (let l = 0, r = height.length - 1; l < r; ) {
    min = Math.min(height[l], height[r]);
    area = min * (r - l);
    maxArea = Math.max(maxArea, area);

    height[l] > height[r] ? r-- : l++;
  }
  return maxArea;
};
