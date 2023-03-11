package Java;

import java.util.*;

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    static ListNode middleNode(ListNode head) {
        Map<Integer, ListNode> listOfNodes = new HashMap<>();
        ListNode current = head;

        int length = 1;
        while (current != null) {
            listOfNodes.put(length, current);
            length++;
            current = current.next;
        }
        double middle = Math.ceil(length / 2);
        System.out.print(listOfNodes);
        return listOfNodes.get(middle);
    }
}

public class DataStructure {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<String>();// Creating arraylist
        list.add("Mango");// Adding object in arraylist
        list.add("Apple");
        list.add("Banana");
        list.add("Grapes");
        // Traversing list through Iterator
        Collections.sort(list);
        System.out.println(list);

        List<String> list2 = new ArrayList<>();
        ArrayList<String> list3 = new ArrayList<>();

        String[] array = { "Java", "Python", "PHP", "C++" };
        System.out.println("Printing Array: " + Arrays.toString(array));

        HashMap<Integer, String> map = new HashMap<Integer, String>();// Creating HashMap
        map.put(1, "Mango"); // Put elements in Map
        map.put(2, "Apple");
        map.put(3, "Banana");
        map.put(4, "Grapes");

        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        ListNode.middleNode(head);

        System.out.println("Iterating Hashmap...");
        for (Map.Entry m : map.entrySet()) {
            System.out.println(m.getKey() + " " + m.getValue());
        }

        System.out.println(map.clone());
    }
}
