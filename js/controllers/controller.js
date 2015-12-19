function newGame() = {

// Alert and prompt for user name

	alert("The year is 2034. Algorithm-writing programming machines, now accountable for over 75% of the trades on the Dow Jones Index, have replaced many of the world's richest companies' stock portfolios with wool futures, causing the second global financial crisis. Having just been elected to office, you are faced with an economic crisis and must deal with business, consumers and the unions to bring the country back to prosperity.");
	var userName = prompt("Please enter your name");

// Define approval rating - affects public perception & reaction

	var approvalRating = {
		value: 50;
		add: function(approval) {
			switch(approval){
				case "success": this.value += 10; break;
				case "failure" : this.value -= 10; break;
			}
		}
	}

// Define negotiating ability - affects ability to negotiate

	var negotiatingAbility = {
		value: 50;
		add: function(result) {
			switch(result){
				case "success": this.value += 10; break;
				case "failure": this.value -= 10; break;
			}
		}
	}

// Define health of economy - win if greater than 50 - lose otherwise

	var economyHealth = {
		value: 20;
		add: function(economy) {
			switch(result){
				case "success" : this.value += 10; break;
				case "failure": this.value -=10; break;
			}
		}
	}

// Finds political ideology of player character

	function findIdeology() {
		var userIdeology = prompt("Please enter your ideology: Left, Right or Centre").toLowerCase();
		if (userIdeology ==="right") {
			alert("For business!");
			firstEvent();
		} 
		else if (userAnswer === "left") {
			alert("For labour!");
			firstEvent();
		}
		else if (userAnswer === "centre") {
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
		var userReaction = prompt("During your first day in parliament, you motion an emergency budget: opposed heavily by the opposition who block the motion in the senate.
		Do you negotiate, concede or relent to the opposition.").toLowerCase;
		if (userReaction == "concede") {
			alert("You concede defeat to the opposition and fail to pass the budget.")
			negotiatingAbility.add("failure");
			economyHealth.add("failure");			
			secondEvent();
		}
		else if (userReaction == "negotiate") {
			var successRate = Math.random();
			if (successRate >= 0.5)
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
		if (economyHealth >= 30) {
			var userChoice = prompt("After passing the budget through parliament, the economy has begun to pick up, but you need some help to further alleviate unemployment levels. 
			Do you approach the unions or business to give a kickstart to workers in the economy?").toLowerCase;
		}
		else {
			var userChoice = prompt("After the whole budget debacle, the economy remains stagnant and needs a kickstart to alleviate the worsening unemployment level.
			Do you approach the unions or business to do so?").toLowerCase;
		}

		if (userChoice == "business") {
			if (userIdeology == "right")
				alert("You stick with your conservative ideology and approach JackWalt Corp for economic aid.");
				alert(jackWalt.randomAction);
			}

			else {
				alert("An interesting choice given your political leanings. You approach the famous JackWalt Corp for economic aid.")
				alert(jackWalt.randomAction);
			}
		}
		else if (userChoice == "unions") {
			if (userIdeology == "left")
				alert("You stick with your liberal ideology and approach the Workers Equality Union for economic aid.");
				alert(unions.randomAction);
			}

			else {
				alert("An interesting choice given your political leanings. You approach the Workers Equality Union for economic aid.")
				alert(unions.randomAction);
			}
		}
		else {
			alert("Please enter either business or unions");
			secondEvent();
		}

		thirdEvent();
	}

	function thirdEvent() {
		// Consumer action based on approval rating
	}

	function fourthEvent() {
		// If/else statement creates two paths based on health of the economy
	}

	function fifthEvent() {
		// Determines whether the player has won or not
	}
	
	// Code to get the functions going
	findIdeology();

};

newGame();