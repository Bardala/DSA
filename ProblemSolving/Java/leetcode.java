package Java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Listy {
    public int elementAt(int index) {
        return 0;
    }
}

class AnagramComparator implements Comparator<String> {
    public String sortChars(String s) {
        char[] content = s.toCharArray();
        Arrays.sort(content);
        return new String(content);
    }

    public int compare(String s1, String s2) {
        return sortChars(s1).compareTo(sortChars(s2));
    }
}

public class leetcode {
    public int binarySearch(int[] a, int target) {
        int low = 0, high = a.length - 1;
        while (low < high) {
            int mid = (low + high) / 2;
            if (target > a[mid]) {
                low = mid + 1;
            } else if (target < a[mid]) {
                high = mid - 1;
            } else {
                return a[mid];
            }
        }
        return -1;
    }

    public int binarySearchRecursive(int[] a, int target, int low, int high) {
        if (low > high)
            return -1;
        int mid = (low + high) / 2;
        if (target < mid) {
            return binarySearchRecursive(a, target, low, mid - 1);
        } else if (target > mid) {
            return binarySearchRecursive(a, target, mid + 1, high);
        } else {
            return a[mid];
        }
    }

    public void merge(int[] a, int[] b, int lastA, int lastB) {
        int indexA = lastA - 1; /* Index of last element in array a */
        int indexB = lastB - 1; /* Index of last element in array b */
        int indexMerged = lastB + lastA - 1; /* end of merged array */

        /* Merge a and b, starting from the last element in each */
        while (indexB >= 0) {
            /* end of a is > than end of b */
            if (indexA >= 0 && a[indexA] > b[indexB]) {
                a[indexMerged] = a[indexA]; // copy element
                indexA--;
            } else {
                a[indexMerged] = b[indexB]; // copy element
                indexB--;
            }
            indexMerged--; // move indices
        }
    }

    /*
     * Search in Rotated Sorted Array
     ** Binary Search
     ** TC|O(logN) SC|O(1)
     */
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (target == nums[mid]) {
                return mid;
            } else if (nums[mid] > nums[left]) { // sorted
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < nums[left]) {
                if (target <= nums[right] && target > nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else if (nums[mid] == nums[left]) {
                left = mid + 1;
            }
        }
        return -1;
    }

    /**
     * Search in Rotated Sorted Array II
     ** Binary Search
     ** Tc|O(logN)
     */
    public boolean searchRecursive(int[] nums, int target, int left, int right) {
        int mid = (left + right) / 2;
        if (nums[mid] == target)
            return true;
        if (left > right)
            return false;

        /*
         * Either the left or right half must be normally ordered. Find out which side
         * is normally ordered, and then use the normally ordered half to figure out
         * which side to search to find x.
         */
        if (nums[left] < nums[mid]) { // left is normally ordered
            if (target >= nums[left] && target < nums[mid]) { // search left
                return searchRecursive(nums, target, left, mid - 1);
            } else { // search right
                return searchRecursive(nums, target, mid + 1, right);
            }
        } else if (nums[mid] < nums[left]) { // right is normally ordered
            if (target > nums[mid] && target <= nums[right]) { // search right
                return searchRecursive(nums, target, mid + 1, right);
            } else { // search left
                return searchRecursive(nums, target, left, mid - 1);
            }
        } else if (nums[mid] == nums[left]) { // left or right half is all repeats
            if (nums[mid] != nums[right]) { // if right is different search it -> this condition to increase the fast of
                                            // the processes
                return searchRecursive(nums, target, mid + 1, right);
            } else { // search in both halves
                boolean result = searchRecursive(nums, target, mid + 1, right); // search right
                if (!result) {
                    result = searchRecursive(nums, target, left, mid - 1); // search left
                }
                return result;
            }
        }
        return false;
    }

    // int search(int a[], int left, int right, int x) {
    // int mid = (left + right) / 2;
    // if (x == a[mid]) {// Found element
    // return mid;
    // }
    // if (right < left) {
    // return -1;
    // }

    // if (a[left] < a[mid]) {// Left is normally ordered.
    // if (x >= a[left] && x < a[mid]) {
    // return search(a, left, mid - 1, x); // Search left
    // } else {
    // return search(a, mid + 1, right, x); // Search right
    // }
    // } else if (a[mid] < a[left]) {// Right is normally ordered.
    // if (x > a[mid] && x <= a[right]) {
    // return search(a, mid + 1, right, x); // Search right
    // } else {
    // return search(a, left, mid - 1, x); // Search left
    // }
    // } else if (a[left] == a[mid]) {// Left or right half is all repeats
    // if (a[mid] != a[right]) {// If right is different, search it
    // return search(a, mid + 1, right, x); // search right
    // } else {// Else, we have to search both halves
    // int result = search(a, left, mid - 1, x); // Search left
    // if (result == -1) {
    // return search(a, mid + 1, right, x); // Search right
    // } else {
    // return result;
    // }
    // }
    // }
    // return -1;
    // }

    /*
     * Group Anagrams
     */

    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs.length == 0)
            return new ArrayList();

        Map<String, List> ans = new HashMap<String, List>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = String.valueOf(ca);
            if (!ans.containsKey(key))
                ans.put(key, new ArrayList());
            ans.get(key).add(s);
        }
        return new ArrayList(ans.values());
    }

    static List<List<String>> Anagrams(String[] strs) {
        if (strs.length == 0)
            return new ArrayList<>();
        Map<String, List<String>> ans = new HashMap<>();

        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = new String(ca);
            if (!ans.containsKey(key))
                ans.put(key, new ArrayList<>());
            ans.get(key).add(s);
        }
        return new ArrayList<>(ans.values());
    }
    // public List<List<String>> groupAnagrams(String[] strs) {
    // if (strs.length == 0) return new ArrayList();
    // Map<String, List> ans = new HashMap<String, List>();
    // int[] count = new int[26];
    // for (String s : strs) {
    // Arrays.fill(count, 0);
    // for (char c : s.toCharArray()) count[c - 'a']++;

    // StringBuilder sb = new StringBuilder("");
    // for (int i = 0; i < 26; i++) {
    // sb.append('#');
    // sb.append(count[i]);
    // }
    // String key = sb.toString();
    // if (!ans.containsKey(key)) ans.put(key, new ArrayList());
    // ans.get(key).add(s);
    // }
    // return new ArrayList(ans.values());
    // }

    /**
     * 69. Search in a Sorted Array of Unknown Size
     * 10.4 Sorted Search, No Size
     */
    int search(Listy list, int value) {
        int index = 1;
        while (list.elementAt(index) != -1 && list.elementAt(index) < value) {
            index *= 2;
        }
        return listyBinarySearch(list, value, index, index / 2);
    }

    int listyBinarySearch(Listy list, int value, int high, int low) {
        while (low <= high) {
            int mid = (low + high) / 2;
            int middle = list.elementAt(mid);
            if (middle == -1 || value < middle) { // search left
                high = mid - 1;
            } else if (value > middle) { // search right
                low = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    /**
     * 10.5 Sparse Search
     */
    int spareSearch(String[] strings, String str) {
        if (str == null || str == "" || strings == null)
            return -1;
        return spareSearch(strings, str, 0, strings.length - 1);
    }

    int spareSearch(String[] strings, String str, int first, int last) {
        if (first > last)
            return -1;
        int mid = (last + first) / 2;

        if (strings[mid].isEmpty()) {
            int left = mid - 1;
            int right = mid + 1;
            while (true) {
                if (left < first && right > last) {
                    return -1;
                } else if (left >= first && !strings[left].isEmpty()) {
                    mid = left;
                    break;
                } else if (right <= last && !strings[right].isEmpty()) {
                    mid = right;
                    break;
                }
                left--;
                right++;
            }
        }

        if (strings[mid].equals(str))
            return mid;
        else if (strings[mid].compareTo(str) < 0) // search right
            return spareSearch(strings, str, mid + 1, last);
        else
            return spareSearch(strings, str, first, mid - 1);
    }

    /*
     * Is Palindrome
     * TC|O(logN) SC|O(1)
     */
    static boolean isPalindrome(int x, int rev) {
        if (rev >= x)
            return rev == x || rev / 10 == x;
        rev = x % 10 + rev * 10;
        return isPalindrome(x / 10, rev);

    }

    static boolean isPalindrome(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0))
            return false;
        return isPalindrome(x, 0);
    }

    public static void main(String[] args) {

    }

    /**
     * 234. Palindrome Linked List
     */
    static ListNode frontPointer;

    static boolean isPalindromeList(ListNode head) {
        frontPointer = head;
        return recursivelyCheck(head);
    }

    static boolean recursivelyCheck(ListNode head) {
        if (head != null) {
            if (!recursivelyCheck(head))
                return false;
            if (frontPointer.val != head.val)
                return false;
            frontPointer = frontPointer.next;
        }
        return true;
    }

    /**
     * reverse linked list
     * recursive
     */
    static ListNode reverseList(ListNode head) {
        if (head == null || head.next == null)
            return head;
        ListNode p = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return p;
    }

    /**
     * 2.1 Remove Duplicates from unsorted Linked List
     */
    // 1-> 10-> 1-> 3-> 4-> 10
    // 1-> 10-> 3-> 4-> 10
    public void removeDups(ListNode head) {
        Set<Integer> set = new HashSet<>(); // [1, 10, 3, 4]
        ListNode curr = head;

        while (curr != null && curr.next != null) {
            set.add(curr.val);
            if (set.contains(curr.next.val)) {
                curr.next = curr.next.next;
            }
            curr = curr.next;
        }
    }

    /**
     * 2.2 Return Kth to Last
     */
    // 1-> 10-> 1-> 3-> 4-> 10

    static int k = 1, lastVal;

    static int kthToLast(ListNode head) {
        if (head == null)
            return 0;
        if (head.next == null) {
            lastVal = head.val;
            return k;
        }
        kthToLast(head.next);
        if (lastVal == head.val) {
            k++;
        }
        return k;
    }

    /*
     * Delete the Middle Node of a Linked List
     */
    static ListNode deleteMiddle(ListNode head) {
        if (head.next == null)
            return null; // just one element return null

        ListNode slow, fast;
        slow = head;
        fast = head;
        // 1-> 3-> 4-> 7-> 1-> 2-> 6
        // s f

        while (true) {
            fast = fast.next.next;
            if (fast == null || fast.next == null) {
                slow.next = slow.next.next;
                return head;
            }
            slow = slow.next;
        }
    }

    /*
     * Delete Middle Node: Implement an algorithm to delete a node in the middle
     * (i.e., any node but
     * the first and last node, not necessarily the exact middle) of a singly linked
     * list, given only access to
     * that node.
     * EXAMPLE
     * Input :the node c from the linked list a->b->c->d->e->f
     * Result: nothing is returned, but the new linked list looks like a
     * ->b->d->e->f
     */
    public boolean deleteMidNode(ListNode node) {
        while (node == null || node.next == null)
            return false;
        node.val = node.next.val;
        node.next = node.next.next;
        return true;
    }

    /**
     * Partition List
     */
    public ListNode partition(ListNode head, int x) {
        ListNode dummy1 = new ListNode(0), dummy2 = new ListNode(0); // dummy heads of the 1st and 2nd queues
        ListNode curr1 = dummy1, curr2 = dummy2; // current tails of the two queues;
        while (head != null) {
            if (head.val < x) {
                curr1.next = head;
                curr1 = head;
            } else {
                curr2.next = head;
                curr2 = head;
            }
            head = head.next;
        }
        curr2.next = null; // important! avoid cycle in linked list. otherwise u will get TLE.
        curr1.next = dummy2.next;
        return dummy1.next;
    }

    public ListNode partitionNode(ListNode node, int x) {
        ListNode head = node, tail = node;
        while (node != null) {
            ListNode next = node.next;
            if (node.val < x) {
                node.next = head;
                head = node;
            } else {
                tail.next = node;
                tail = node;
            }
            node = next;
        }
        head.next = tail;
        return head;
    }
}
