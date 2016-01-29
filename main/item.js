//Item

var createItemList = function() {
	var itemList = {};
  itemList.torch = new Item("Torch", 1, 1);
	return itemList;
};

var Item = function(name, price, weight) {
	this.name = name;
	this.price = price;
	this.weight = weight;
};

Item.prototype.getInfo = function() {
  return "Name: "+this.name+"   Price: "+this.price+"g   "
         +"Weight: "+this.weight+"lbs";
};