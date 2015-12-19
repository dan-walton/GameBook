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
var consumers = new politicalGroup ("The Public", "centre");

politicalGroup.prototype.randomAction = function() {
	var randomNum = Math.random();
		if (politicalGroup == jackWalt) {
			if (userIdeology == "right") {
				return this.actions.invest;
				economyHealth.add("success");
				approvalRating.add("success");
				negoitatingAbility.add("success");
				alert("Through adept negotiation, you have managed to get business on your side and improve the economy. Well done!")
			}
			
			else if (userIdeology == "centre" && randomNum >= 0.5) {
				return this.actions.invest;
				economyHealth.add("success");
				approvalRating.add("success");
				negoitatingAbility.add("success");
				alert("Through adept negotiation, you have managed to get business on your side and improve the economy. Well done!");
			}

			else {
				return this.actions.layoff;
				economyHealth.add("failure");
				approvalRating.add("failure");
				negoitatingAbility.add("failure");
				alert("You have failed to get this group on your side at cost to the economy and your popularity");
			}
		};
		
		else if (politicalGroup == unions) {}
			if (userIdeology == "right") {
				return this.actions.strike;
				economyHealth.add("failure");
				approvalRating.add("failure");
				negoitatingAbility.add("failure");
				alert("You have failed to get this group on your side at cost to the economy and your popularity");
			}
			
			else if (userIdeology == "centre" && randomNum >= 0.5) {
				return this.actions.help;
				economyHealth.add("success");
				approvalRating.add("success");
				negoitatingAbility.add("success");
				alert("Through adept negotiation, you have managed to get business on your side and improve the economy. Well done!");
			}

			else {
				return this.actions.help;
				economyHealth.add("success");
				approvalRating.add("success");
				negoitatingAbility.add("success");
				alert("Through adept negotiation, you have managed to get business on your side and improve the economy. Well done!");
			}
		};

		else if (politicalGroup == consumers) { 
			if (userIdeology == "centre" || randomNum >= 0.5) {
				return this.actions.spend
				economyHealth.add("success");
				approvalRating.add("success");
			}

			else {
				return this.actions.save
				economyHealth.add("failure");
				approvalRating.add("failure");
			}
		};
	};
};