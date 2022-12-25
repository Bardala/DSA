public class reverseString {
    public String reverse(String str) {
        // what is the base case?
        if (str.equals("")) {
            return "";
        }
        // what is the smallest amount of work I can do in each iteration?
        return reverse(str.substring(1)) + str.charAt(0);
    }

    public static void main(String[] args) {
        reverseString r = new reverseString();
        System.out.println(r.reverse("hello"));

    }
}
// hello
// call stack
// ello + h
// llo + e
// lo + l
// o + l
// + o