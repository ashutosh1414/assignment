import java.util.*;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter any sentence: ");
        String sentence = sc.nextLine().toLowerCase();
        sc.close();

        boolean[] pangram = new boolean[26]; // 26 letters in the English alphabet

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                pangram[index] = true;
            }
        }

        boolean isPangram = true;

        for (boolean present : pangram) {
            if (!present) {
                isPangram = false;
                break;
            }
        }

        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }
}
