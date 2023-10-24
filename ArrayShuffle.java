import java.util.Random;

public class ArrayShuffle {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        
        System.out.print("Shuffled Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }

        // for(int num=1; num<array.length; num++){
        //     System.out.print(num+" ");
        // }
    }
    public static void shuffleArray(int[] array) {
        Random random = new Random();
        
        for (int i = array.length - 1; i > 0; i--) {
            int index = random.nextInt(i + 1);
            
            // Swap the elements at i and index
            int temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
    

    
}
