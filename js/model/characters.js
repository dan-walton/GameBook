var politicalGroup = function (name, ideology) {
	this.name = name;
	this.ideology = ideology;
	this.actions = {
		strike: "Unions: HIGHER WAGES. GREATER RIGHTS. GREATER EQUALITY FOR THE WORKING CLASS. STRIKE! STRIKE! STRIKE!",
		help: "Unions: We'll see what we can do.",
		spend: "Consumers: Let's spend some money to boost the economy!",
		save: "Consumers: Economic prospects are bleak so we better save some money...",
		invest: "JackWalt Corp: We'll pump some money into the economy",
		layoff: "JackWalt Corp: This recession is hitting us hard. We're gonna layoff some more staff."
	}
};

var jackWalt = new politicalGroup ("JackWalt Corporation", "right");
var unions = new politicalGroup ("Workers Equality Union", "left");
