//Game.java
//the main file

import java.util.*;

public class Game {

    public static Random rng=new Random();
    
    public static void main(String arg[]) {
        boolean playing=true;
        Scanner in = new Scanner(System.in);
        ItemList itemList=new ItemList();
        
        while(playing) {
            pl("Enter an item or say done");
            String s = in.nextLine();
            if(s.equals("done")) {
                playing=false;
                pl("Thanks for playing!");
            }
            else {
                itemList.info(s);
            }
        }
    }
    
    public static void pl(Object s) {
        System.out.println(s);
    }

    public static int roll(int diceSize) {
        return rng.nextInt(diceSize)+1;
    }
}