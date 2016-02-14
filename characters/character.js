//character.js

var Character = function(name, race, size, level, xp, attributes, maxHP, skills) {
	this.name = name;
	this.race = race;
	this.size = size;
	this.level = level;
	this.xp = xp;
	this.stats = {};
	this.stats.strength = attributes[0];
	this.stats.constitution = attributes[1];
	this.stats.dexterity = attributes[2];
	this.stats.intelligence = attributes[3];
	this.stats.wisdom = attributes[4];
	this.stats.charisma = attributes[5];
	this.maxHP = maxHP;
	this.currentHP = maxHP;
	this.bloodied = Math.floor(maxHP/2);
	this.skills = {};
	this.skills.acrobatics = skills[0]
	this.skills.arcana = skills[1]
	this.skills.athletics = skills[2]
	this.skills.bluff = skills[3]
	this.skills.diplomacy = skills[4]
	this.skills.dungeoneering = skills[5]
	this.skills.endurance = skills[6]
	this.skills.heal = skills[7]
	this.skills.history = skills[8]
	this.skills.insight = skills[9]
	this.skills.intimidate = skills[10]
	this.skills.nature = skills[11]
	this.skills.perception = skills[12]
	this.skills.religion = skills[13]
	this.skills.stealth = skills[14]
	this.skills.streetwise = skills[15]
	this.skills.thievery = skills[16]
};