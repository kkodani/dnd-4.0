//Armor.java

import java.util.*;

public class Armor extends Item {
    
    public String type;
    public String material;
    public int armorBonus;
    public int check;
    public int speed;
    
    public Armor(String name, double price, double weight, String type, String material,
                 int armorBonus, int check, int speed) {
        super(name, price, weight);
        this.type=type;
        this.material=material;
        this.armorBonus=armorBonus;
        this.check=check;
        this.speed=speed;
    }
    
    public void getInfo() {
        Game.pl(name+"  ("+type+")  "+price+"g  "+weight+"lb  Bonus:+"+armorBonus+
                "  Skill Penalty:"+check+"  Speed Penalty:"+speed);
    }
}