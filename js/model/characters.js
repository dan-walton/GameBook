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

var reporter = {
	rumour1: "BREAKING NEWS: claims that Trump's hairdoo is fake substantiated?",
	rumour2: "BREAKING NEWS: Prime Minister suggests Trump is, himself, a nazi. Consumers agree",
	rumour3: "BREAKING NEWS: Trump part of the illuminati? We find out.",
	trumpRumour: "Opposition Leader Donald Trump suggests that the PM is an alien. The public agrees. Approval rating plummets.",
	holdGround:  "PM keeps cool under speculation that he is an alien. Donald Trump's rumours proved falsified."
};

var jackWalt = new politicalGroup ("JackWalt Corporation", "right");
var unions = new politicalGroup ("Workers Equality Union", "left");


// Note, create prototype function which will return a response for the reporter.

function randomResponse() {
	var responseOdds = Math.floor(Math.random() * 3 + 1);
	if (responseOdds === 1) {
		return reporter.rumour1;
	}
	else if (responseOdds === 2) {
		return reporter.rumour2;
	}
	else if (responseOdds === 3) {
		return reporter.rumour3;
	}
}