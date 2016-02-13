//globals.js

var roll = function(num, modifier) {
	modifier = modifier || 0;
	return Math.floor(Math.random()*num)+1 + modifier;
};