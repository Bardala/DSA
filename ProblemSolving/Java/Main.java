package Java;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        leetcode solve = new leetcode();

        // System.out.println(leetcode.isPalindrome(1221));

        String[] strs = { "car", "fast", "rac", "saft", "arc" };
        // Arrays.sort(strs, new AnagramComparator());
        // Arrays.sort(strs);
        List<List<String>> ans = solve.Anagrams(strs);
        // System.out.println(ans);

        int[] a = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int target = 2;

        // System.out.println(solve.binarySearch(a, target));
        // System.out.println(solve.binarySearchRecursive(a, target, 0, a.length - 1));

        int[] b = { 2, 4, 6, 8 };
        int c[] = new int[9];
        for (int i = 0, l = 1; l < 10; i++, l += 2) {
            c[i] = l;
        }
        solve.merge(c, b, 5, b.length);
        // for (int n : c) {
        // System.out.println(n);
        // }

        int[] nums = { 10, 15, 20, 0, 5 };
        int[] nums2 = { 50, 5, 20, 30, 40 };
        int[] nums3 = { 3, 1, 1 };
        // System.out.println(solve.searchRecursive(nums2, 5, 0, nums2.length - 1));
        // System.out.println(solve.searchRecursive(nums, 100, 0, nums.length - 1));
        // System.out.println(solve.searchRecursive(nums3, 3, 0, nums3.length - 1));
        // // System.out.println(solve.search(nums3, 0, nums3.length - 1, 3));

        String[] array = { "car", "fast", "rac", "saft", "arc" };

        List<List<String>> array2 = solve.groupAnagrams(array);
        // System.out.println(array2);

        AnagramComparator compare = new AnagramComparator();
        Arrays.sort(array, compare);
        // Arrays.sort(array);
        // System.out.println(Arrays.toString(array));
        for (String arr : array) {
            // System.out.println(arr);
        }

        String[] strings = { "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", "" };
        int result = solve.spareSearch(strings, "ball");
        // System.out.println(result);

        ListNode head = new ListNode(1);
        ListNode node1 = new ListNode(2);
        ListNode node2 = new ListNode(3);
        ListNode node3 = new ListNode(4);
        head.next = node1;
        node1.next = node2;
        node2.next = node3;
        // System.out.println(solve.isPalindrome(head));
        // System.out.println(leetcode.reverseList(head));
        // create this list : 1-> 10-> 1-> 3-> 4-> 10
        ListNode head2 = new ListNode(1);
        ListNode node4 = new ListNode(10);
        ListNode node5 = new ListNode(1);
        ListNode node6 = new ListNode(3);
        ListNode node7 = new ListNode(4);
        ListNode node8 = new ListNode(10);
        head2.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        // solve.removeDups(head2);
        // System.out.println(leetcode.kthToLast(head2));
        // while (head2 != null) {
        // System.out.println(head2.val);
        // head2 = head2.next;
        // }

        // solve.deleteMidNode(node5);
        // for (ListNode node = head2; node != null; node = node.next) {
        // System.out.println(node.val);
        // }f
        System.out.println(8 % 10);
    }
}
