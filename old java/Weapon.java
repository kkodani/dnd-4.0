//Weapon.java

import java.util.*;

public class Weapon extends Item {
    public String hands;
    public String type;
    public int proficiencyBonus;
    public int shortRange;
    public int longRange;
    public String group;
    public String damageDice;
    public int damage;
    public String[] properties;
    
    public Weapon(String name, double price, double weight, String hands, String type,
                  int proficiencyBonus, int shortRange, int longRange, String group,
                  String damageDice, int damage, String[] properties) {
        super(name, price, weight);
        this.hands=hands;
        this.type=type;
        this.proficiencyBonus=proficiencyBonus;
        this.shortRange=shortRange;
        this.longRange=longRange;
        this.group=group;
        this.damageDice=damageDice;
        this.damage=damage;
        this.properties=properties;
        
    }
    
    public void getInfo() {
        Game.pl(name+"  ("+type+", "+hands+"-Handed)  "+price+"g  "+weight+"lb  "+
                "Prof:+"+proficiencyBonus+"  "+damageDice+"  "+"Range:"+shortRange+
                "/"+longRange+"  "+group+"  "+"Properties: "+listProperties());
    }
    
    public String listProperties() {
        String str="";
        for(int i=0;  i<properties.length; i++){
            str+=(properties[i]+", ");
        }
        if(str.length()>0) {
            str=str.substring(0, str.length()-2);
            return str;
        }
        else {
            return "-";
        }
    }
    
}