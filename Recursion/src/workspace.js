"use strict";
exports.__esModule = true;
var reversString = function (s) {
    if (s === "")
        return "";
    return reversString(s.substring(1)) + s[0];
};
// console.log(reversString("hello"));
var isPalindromeStr = function (s) {
    if (s.length === 0 || s.length === 1)
        return true;
    if (s[0] === s[s.length - 1])
        return isPalindromeStr(s.substring(1, s.length - 1));
    return false;
};
// console.log(isPalindromeStr("racecar"));
var decimalToBinary = function (num, str) {
    if (str === void 0) { str = ''; }
    if (num === 0)
        return str || '0';
    str = (num % 2) + str;
    return decimalToBinary(Math.floor(num / 2), str);
};
// console.log(decimalToBinary(10));
// function sum(num: number): number {
//     if (num <= 1) return num
//     return num + sum(num - 1)
// }
var sum = function (num, res) {
    if (res === void 0) { res = 0; }
    if (num === 0)
        return res;
    return sum(num - 1, res + num);
};
// console.log(sum(10))
var search = function (arr, num, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left > right)
        return -1;
    var mid;
    mid = Math.floor((left + right) / 2);
    if (num === arr[mid])
        return mid;
    if (num < arr[mid])
        return search(arr, num, left, mid - 1);
    return search(arr, num, mid + 1, right);
};
var arr = [];
for (var i = 0; i <= 10; i++) {
    arr.push(i);
}
// console.log(search(arr, 6));
var Node = /** @class */ (function () {
    function Node(val, next) {
        this.val = val || 0;
        this.next = next || null;
    }
    return Node;
}());
// head recursion
// var reverseLinkedList = (list: Node): Node => {
//     if (!list.next) return list
//     let pointer: Node = reverseLinkedList(list.next)
//     list.next.next = list
//     list.next = null
//     return pointer
// }
var list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))));
// Tail Recursion
var reverseLinkedList = function (list, prev) {
    if (prev === void 0) { prev = new Node(null, null); }
    if (!list)
        return prev;
    var next = list.next;
    list.next = prev;
    return reverseLinkedList(next, list);
};
// null <-1 2-> 3-> 4-> 5
// console.log(reverseLinkedList(new Node(null, null)))
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2)
        return l1 || l2;
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
var l1 = new Node(1, new Node(2, new Node(7, new Node(12, new Node(20, null)))));
var l2 = new Node(5, new Node(10, new Node(11, new Node(16, new Node(17, null)))));
// console.log(mergeTwoLists(l1, l2));
// factorial
// function factorial(num: number): number {
//     if (num === 1) return num
//     return num * factorial(num - 1)
// }
function factorial(num, res) {
    if (res === void 0) { res = 1; }
    if (num <= 1)
        return res;
    return factorial(num - 1, res * num);
}
// console.log(factorial(5))
// function fibonacci(num: number): number {
//     if (num <= 1) return num
//     return fibonacci(num - 1) + fibonacci(num - 2)
// }
function fibonacci(num, res, prev) {
    if (res === void 0) { res = 1; }
    if (prev === void 0) { prev = 0; }
    if (num <= 1)
        return res;
    return fibonacci(num - 1, res + prev, res);
}
// console.log(fibonacci(122))
function reverseInt(num, rev, sign) {
    if (rev === void 0) { rev = 0; }
    if (sign === void 0) { sign = 1; }
    if (num === 0 || num > Math.pow(2, 32) - 1 || num < Math.pow((-2), 31))
        return sign * rev / 10;
    if (num < 0)
        sign = -1;
    rev += Math.abs(num) % 10;
    num = Math.floor(Math.abs(num) / 10);
    return reverseInt(num, rev * 10, sign);
}
console.log(reverseInt(123));
console.log(reverseInt(-2143847412));
