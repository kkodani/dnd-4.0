//itemList.js

var createItemList = function() {
	var itemList = {};
  itemList.torch = new Item("Torch", 1, 1);
  itemList.clotharmor = new Armor("Cloth Armor", 1, 4, "Light", "Cloth", 0, 0, 0);
  itemList.club = new Weapon("Club", 1, 3, "One-Handed", "Simple Melee", 2,
                       1, 1, "Mace", "1d6", roll.bind(null, 6), []);
	return itemList;
};