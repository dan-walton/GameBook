function newGame() {

// Define approval rating - affects public perception & reaction

	var approvalRating = {
		value: 50,
		add: function(result) {
			switch(result){
				case "success": this.value += 10; break;
				case "failure" : this.value -= 10; break;
			}
		}
	}

// Define negotiating ability - affects ability to negotiate

	var negotiatingAbility = {
		value: 50,
		add: function(result) {
			switch(result){
				case "major success": this.value += 20; break;
				case "success": this.value += 10; break;
				case "failure": this.value -= 10; break;
			}
		}
	}

// Define health of economy - win if greater than 50 - lose otherwise

	var economyHealth = {
		value: 20,
		add: function(result) {
			switch(result){
				case "success" : this.value += 10; break;
				case "failure": this.value -=10; break;
			}
		}
	}

	function finalScore() {
		return economyHealth.value + negotiatingAbility.value + approvalRating.value;
	}

// Finds political ideology of player character

	function findIdeology() {
		if (userIdeology ==="right") {
			alert("For business!");
			firstEvent();
		} 
		else if (userIdeology === "left") {
			alert("For labour!");
			firstEvent();
		}
		else if (userIdeology === "centre") {
			alert("Middle of the road!");
			firstEvent();
		}
		else {
			alert("Make sure to enter left, right or centre only");
			findIdeology();
		}
	};

// First event - passing of budget

	function firstEvent() {
		var userReaction = prompt("During your first day in parliament, you motion an emergency budget: opposed heavily by the opposition who block the motion in the senate. Do you negotiate, concede or relent to the opposition.").toLowerCase();
		if (userReaction == "concede") {
			alert("You concede defeat to the opposition and fail to pass the budget.")
			negotiatingAbility.add("failure");
			economyHealth.add("failure");			
			secondEvent();
		}
		else if (userReaction == "negotiate") {
			var successRate = Math.random();
			if (successRate >= 0.5) {
				if (userIdeology == "right") {
					alert("You negotiate with the opposition, dropping your austerity measures to pass tax cuts.");
				}
				else if (userIdeology == "left") {
					alert("You negotiate with the opposition, implementing a stimulus bill whilst promising no tax increases.")
				}
				else {
					alert("You pass a bill promising to balance the budget whilst providing tax decreases for the poor.")
				}
				negotiatingAbility.add("success");
				economyHealth.add("success");
				approvalRating.add("success");
			}
			else {
				alert("You fail to pass a budget and the economy worsens");
				negotiatingAbility.add("failure");
				economyHealth.add("failure");
				approvalRating.add("failure");
			}
		secondEvent();
		}
		else if (userReaction == "relent") {
			var successRate = Math.random();
			if (successRate >= 0.75) {
				if (userIdeology == "right") {
					alert("You pass a balanced budget consisting of tax cuts for the wealthy and austerity measures. However, the economy remains slack");
				}
				else if (userIdeology == "left") {
					alert("Your budget of increased spending offset by tax increases is passed, and the economy begins to improve.");
					economyHealth.add("success");
					approvalRating.add("success");
				}
				else {
					alert("Your pragmatic budget reduces regulation, increases spending and promises tax offsets for investors, improving the economy.");
					economyHealth.add("success");
					approvalRating.add("success");
				}
				negotiatingAbility.add("success");
			}
			else {
				alert("You fail to pass a budget and the economy falters.");
				negotiatingAbility.add("failure");
				economyHealth.add("failure");
				approvalRating.add("failure");
			}
			secondEvent();
		}
		else {
			alert("Please enter negotiate, concede or relent!")
			firstEvent();
		}
	}

	function secondEvent() {
		if (economyHealth.value > 25) {
			var userChoice = prompt("After passing the budget through parliament, the economy has begun to pick up, but you need some help to further alleviate unemployment levels. Do you approach labour or business to give a kickstart to workers in the economy?").toLowerCase();
		}
		else {
			var userChoice = prompt("After the whole budget debacle, the economy remains stagnant and needs a kickstart to alleviate the worsening unemployment level. Do you approach labour or business to do so?").toLowerCase();
		}
		
		if (userChoice == "business") {
			if (userIdeology == "right") {
				alert("You stick with your conservative ideology and approach JackWalt Corp for economic aid.");
				alert(jackWalt.actions.invest);
				economyHealth.add("success");
				approvalRating.add("success");
				negotiatingAbility.add("success");
				alert("Through adept negotiation, you have managed to get business on your side and improve the economy. Well done!")
			}

			else {
				alert("An interesting choice given your political leanings. You approach the famous JackWalt Corp for economic aid.")
				if (negotiatingAbility.value >= 60) {
					alert(jackWalt.actions.invest);
					economyHealth.add("success");
					approvalRating.add("success");
					negotiatingAbility.add("major success");
					alert("Through adept negotiation, you have managed to get business on your side and improve the economy. Well done!");
				}

				else {
					alert(jackWalt.actions.layoff);
					economyHealth.add("failure");
					approvalRating.add("failure");
					negotiatingAbility.add("failure");
					alert("You have failed to get this group on your side at cost to the economy and your popularity");
				}
			}
		}
		
		else if (userChoice == "labour") {
			if (userIdeology == "left") {
				alert("You stick with your liberal ideology and approach the Workers Equality Union for economic aid.");
				alert(unions.actions.help);
				economyHealth.add("success");
				approvalRating.add("success");
				negotiatingAbility.add("success");
				alert("Through adept negotiation, you have managed to get the unions on your side and improve the economy. Well done!");
			}

			else {
				alert("An interesting choice given your political leanings. You approach the famous JackWalt Corp for economic aid.")
				if (negotiatingAbility.value >= 60) {
					alert(unions.actions.help);
					economyHealth.add("success");
					approvalRating.add("success");
					negotiatingAbility.add("major success");
					alert("Through adept negotiation, you have managed to get the unions on your side and improve the economy. Well done!");
				}

				else {
					alert(unions.actions.strike);
					economyHealth.add("failure");
					approvalRating.add("failure");
					negotiatingAbility.add("failure");
					alert("You have failed to get this group on your side at cost to the economy and your popularity");
				}
			}
		}

		else {
			alert("Please enter either labour or business.")
			secondEvent();
		}

		thirdEvent();		
	}

	function thirdEvent() {
		if (approvalRating.value >= 60) {
			alert("After a succcessful first term, you have been re-elected on a dramatic margin. Consumers are rejoiced with the news and decide to go on a spending spree. \nEconomy +10!");
			economyHealth.add("success");
		}
		else if (approvalRating.value <= 40) {
			alert("After a mismanaged term in parliament, your party has been voted out and the economy remains in shambles.");
			return;
		}
		else {
			var coup = prompt("After a mediocre first term, your party has been re-elected on the slightest of margins. However, your deputy leader calls for a leadership spill. Do you stand down or remain?").toLowerCase;
			if (coup == "stand down") {
				alert("You stand down from leadership, and the economy falls apart.")
				return;
			}
			else if (coup == "remain") {
				var coupOdds = Math.random();
				if (coupOdds >= 0.33) {
					alert("You remain in parliament after toppling your opponent in the leadership spill.");
					negotiatingAbility.add("success");
				}
				else {
					alert("BREAKING NEWS: " + userName + " has been removed from leadership in a close spill. The stockmarket has fallen 1000points on the news.")
					return;
				}
			}
		}

		fourthEvent();
	}

	function fourthEvent() {
		var count = 0;
		while (count < 4) {
			var budget = prompt("It is time to deliver your yearly budget. Your policy advisors have put forth six ideas to improve the economy's health: raise taxes, lower taxes, increase spending, decrease spending, increase regulation, decrease regulation. Which do you choose?").toLowerCase();
			switch(budget) {
				case "raise taxes": alert("You raise taxes, to the detriment of both the economy and your popularity."); economyHealth.add("failure"); approvalRating.add("failure"); break;
				case "lower taxes": alert("You lower taxes, boosting consumer spending and your own popularity."); economyHealth.add("success"); approvalRating.add("success"); break;
				case "increase spending": alert("You increase spending, creating jobs and improving your popularity."); economyHealth.add("success"); approvalRating.add("success"); break;
				case "decrease spending": alert("You decrease spending, met with outrage by consumers"); economyHealth.add("failure"); approvalRating.add("failure"); break;
				case "increase regulation": alert("You increase regulation, stifling business."); economyHealth.add("failure"); break;
				case "decreae regulation": alert("You decrease regulation, improving business confidence"); economyHealth.add("success"); break;
				default: alert("try again")
			}
			count += 1
		}

		if (approvalRating <= 25) {
			alert("Your archrival xxx_donaldtrump_xxx has announced a spill and defeated you, ending your political career. GAME OVER");
			return;
		}

		else {
			alert("Well done. You have made it to the end of your two terms through cunning and wit. Let's see how you've done.")
		}
		
		fifthEvent();
	}

	function fifthEvent() {
		if (economyHealth >= 50 && voterApproval >= 50) {
			alert("Well done, you have successfully maintained your approval rating whilst boosting the economy. Your final score is: " + finalScore());
			return;
		}

		else {
			alert("You have managed to scrape through the past eight years, always on your toes. Your final score is: " + finalScore());
			return;
		}

	}
	
	// Code to get the functions going

	// Alert and prompt for user name

	
	alert("The year is 2034. Algorithm-writing programming machines, now accountable for over 75% of the trades on the Dow Jones Index, have replaced many of the world's richest companies' stock portfolios with wool futures, causing the second global financial crisis. Having just been elected to office, you are faced with an economic crisis and must deal with business, consumers and the unions to bring the country back to prosperity.");
	var userName = prompt("Please enter your name");
	do {
		var userIdeology = prompt("Please enter your ideology: Left, Right or Centre").toLowerCase();
	}
	while (userIdeology !== "left" && userIdeology !== "right" && userIdeology !== "centre");

	findIdeology();

};

newGame();