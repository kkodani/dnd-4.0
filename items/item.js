//Item

var Item = function(name, price, weight) {
	this.name = name;
	this.price = price;
	this.weight = weight;
};

Item.prototype.getInfo = function() {
  var str = "Item Lookup:";
  for(var k in this) {
  	if(typeof this[k] !== "function") {
  		str+="\n\t"+k+": "+this[k];
  	}
  }
  return str;
};


var Armor = function(name, price, weight, type, material, 
	                   armorBonus, check, speed) {
	Item.call(this, name, price, weight);
	this.type=type;
	this.material=material;
  this.armorBonus=armorBonus;
  this.check=check;
  this.speed=speed;
};

Armor.prototype = Object.create(Item.prototype);
Armor.prototype.constructor = Armor;

var Weapon = function(name, price, weight, hands, type,
                      proficiencyBonus, shortRange, longRange, group,
                      damageDice, damage, properties) {
	Item.call(this, name, price, weight);
	this.hands=hands;
  this.type=type;
  this.proficiencyBonus=proficiencyBonus;
  this.shortRange=shortRange;
  this.longRange=longRange;
  this.group=group;
  this.damageDice=damageDice;
  this.damage=damage;
  this.properties=properties;
};

Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;



