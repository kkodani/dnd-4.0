import java.util.*;

public class ItemList {

    public Map<String, Weapon> weaponList;
    public Map<String, Armor> armorList;
    public Map<String, MiscItem> miscItemList;
    
    public ItemList() {
        fillWeaponList();
        fillArmorList();
        fillMiscItemList();
    }
    
    private void fillWeaponList() {
        weaponList=new HashMap<String, Weapon>();
        weaponList.put("Club", new Weapon("Club", 1, 3, "One", "Simple Melee", 2,
                       1, 1, "Mace", "1d6", Game.roll(6), new String[]{}));
        
    }
    
    private void fillArmorList() {
        armorList=new HashMap<String, Armor>();
        armorList.put("Cloth Armor", new Armor("Cloth Armor", 1, 4, "Light",
                      "Cloth", 0, 0, 0));
    }
    
    private void fillMiscItemList() {
        miscItemList=new HashMap<String, MiscItem>();
        miscItemList.put("Arrows", new MiscItem("Arrows", 0.05, 0.05));
    }
    
    public void info(String s) {
        if(weaponList.containsKey(s)) {
            weaponList.get(s).getInfo();
        }
        else if(armorList.containsKey(s)) {
            armorList.get(s).getInfo();
        }
        else if(miscItemList.containsKey(s)) {
            miscItemList.get(s).getInfo();
        }
        else {
            Game.pl("Item does not exist.");
        }
    }

}