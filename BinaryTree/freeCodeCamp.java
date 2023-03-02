package BinaryTree;

import javax.naming.Binding;

class BinaryTree {
    int val;
    BinaryTree left;
    BinaryTree right;

    public BinaryTree(int val) {
        this.val = val;
    }

    public BinaryTree(int val, BinaryTree left, BinaryTree right) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

public class freeCodeCamp {
    public static void main(String[] args) {
        BinaryTree a = new BinaryTree(0, null, null);
        BinaryTree b = new BinaryTree(1);
        BinaryTree c = new BinaryTree(3);
        a.left = b;
        a.right = c;
        System.out.println(a.val);
        System.out.println(a.left.val);
        System.out.println(a.right.val);
    }
}
