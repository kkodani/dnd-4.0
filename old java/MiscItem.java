//MiscItem.java

import java.util.*;

public class MiscItem extends Item {



    public MiscItem(String name, double price, double weight) {
        super(name, price, weight);
    }
    
    public void getInfo() {
        Game.pl(name+"  "+price+"g  "+weight+"lb");
    }
}