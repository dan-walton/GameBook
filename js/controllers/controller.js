// Game Container Function
function newGame() {

// Define approval rating - affects public perception & reaction

	var approvalRating = 0;

// Define negotiating ability - affects ability to negotiate

	var negotiatingAbility = 0;

// Define health of economy - win if greater than 50 - lose otherwise

	var economyHealth = 0;

// Create function which returns final score

	function finalScore() {
		return economyHealth + negotiatingAbility + approvalRating;
	}

// Create cheatCode function which lets the player win

	function cheatCode() {
		economyHealth += 100;
		approvalRating += 100;
		negotiatingAbility += 100;
		sixthEvent();
	}

// Reacts to ideology of player character

	function findIdeology() {
		if (userIdeology ==="right") {
			alert("BREAKING NEWS: Conservative leader " + userName + " voted into parliament. Can his pro-business mantra bring back the economy?");
		} 
		else if (userIdeology === "left") {
			alert("BREAKING NEWS: Democratic leader " + userName + " voted into parliament. Can their working class affiliation bring us back from the brink?");
		}
		else if (userIdeology === "centre") {
			alert("BREAKING NEWS: Self-reported centrist " + userName + " voted into parliament. Is he the pragmatic voice we need in this mess?");
		}
		else {
			alert("Make sure to enter left, right or centre only");
			findIdeology();
		}
	};

// First event - passing of budget

	function firstEvent() {
		var userReaction = prompt("Welcome to parliament " + userName + ". During your first day in parliament, you motion an emergency budget: opposed heavily by the opposition leader, xxx_donaldtrump_xxx, who is using his power to block the motion in the senate. Do you negotiate, concede or relent to the opposition.").toLowerCase();
		if (userReaction == "concede") {
			alert("You stand down and are brutally teased by the opposition and are seen as a weak leader. Unlucky.")
			negotiatingAbility -= 10;
			economyHealth -= 10;			
			secondEvent();
		}
		else if (userReaction == "negotiate") {
			var successRate = Math.random();
			if (successRate >= 0.5) {
				if (userIdeology == "right") {
					alert("You negotiate with Donald, dropping your hairdoo austerity measures to pass tax cuts for rednecks and hillbillies.");
				}
				else if (userIdeology == "left") {
					alert("You negotiate with Donald, implementing a stimulus bill aimed at elaborate hairdressers and conspicuosly targeted at a certain hotel chain.")
				}
				else {
					alert("You pass a bill promising to balance the budget whilst providing tax decreases for rich Cayman Islanders.")
				}
				negotiatingAbility += 10;
				economyHealth += 10;
				approvalRating += 10;
			}
			else {
				alert("Donald Trump thwarts your attempts to pass a budget.");
				negotiatingAbility -= 10;
				economyHealth -= 10;
				approvalRating -= 10;
			}
		secondEvent();
		}
		else if (userReaction == "relent") {
			var successRate = Math.random();
			if (successRate >= 0.75) {
				if (userIdeology == "right") {
					alert("In an odd parliamentary sitting, you cut off Trump's hair forcing him to pass your balanced budget consisting of tax cuts for the middle class. The economy begins to improve.");
					economyHealth += 10;
					approvalRating += 10;
				}
				else if (userIdeology == "left") {
					alert("Your rational social and economic principles are too strong for Trump to understand, and you pass a stimulatory budget.");
					economyHealth += 10;
					approvalRating += 10;
				}
				else {
					alert("Your pragmatic budget reduces regulation, increases spending and promises tax offsets for investors, improving the economy and damaging Trump's approval rating.");
					economyHealth += 10;
					approvalRating += 10;
				}
				negotiatingAbility += 20;
			}

			else {
				alert("Donald Trump thwarts your attempts to pass a budget.");
				negotiatingAbility -= 10;
				economyHealth -= 10;
				approvalRating -= 10;
			}
			secondEvent();
		}
		else if (userReaction == "jizz") {
			cheatCode();
		}
		else {
			alert("Please enter negotiate, concede or relent.")
			firstEvent();
		}
	}

// Second event - Union or business aid

	function secondEvent() {
		var randomNum = Math.random();
		if (economyHealth >= 10) {
			var userChoice = prompt("After passing the budget through parliament, the economy has begun to pick up, but you need some help to further alleviate unemployment levels. Do you approach labour or business to give a kickstart to workers in the economy?").toLowerCase();
		}
		else {
			var userChoice = prompt("After the whole budget debacle, the economy remains stagnant and needs a kickstart to alleviate the worsening unemployment level. Do you approach labour or business to do so?").toLowerCase();
		}

		function success() {
			if (userChoice == "labour") {
				alert(unions.actions.help);
				alert("Whilst their intentions were good, a few under-the-counter deals have not gone unnoticed by certain individuals... Nevertheless, you have managed to get the unions on your side and improve the economy. Well done!")
			}
			else if (userChoice == "business") {
				alert(jackWalt.actions.invest);
				alert("Whilst their intentions were good, a few under-the-counter deals (tax breaks) have not gone unnoticed by certain individuals... Nevertheless, you have managed to get JackWalt Corp. on your side and improve the economy. Well done!")
			}
			economyHealth += 10;
			approvalRating += 10;
			negotiatingAbility += 10;
		}

		// Up to here

		function failure() {
			if (userChoice == "labour") {
				alert(unions.actions.strike);
				alert("The Workers Equality Union spits on your foolish capitalist manifesto and disrupts your campaign, at cost to the economy and your popularity");
			}
			else if (userChoice == "business") {
				alert(jackWalt.actions.layoff);
				alert("JackWalt Corporation despises your impractical socialist utopian ideals and moves its money to Ireland, at cost to the economy and your popularity");
			}
			economyHealth -= 10;
			approvalRating -= 10;
			negotiatingAbility -= 10;
		}

		if (userChoice == "business") {
			if (randomNum >= 0.75) {
				alert("Your relentless cold calling isn't successful and you go unnoticed by JackWalt.")
				failure();
			}

			else {

				if (userIdeology == "right") {
					alert("Like the true businessman you are, you negotiate with JackWalt Corp for economic aid.");
					success();
				}

				else {
					alert("Whilst you do reportedly lean liberal, JackWalt agress to meet with you.")
					if (negotiatingAbility >= 10) {
						success();
					}

					else {
						failure();
					}
				}
			}
		}

		else if (userChoice == "labour") {
			if (randomNum >= 0.75) {
				alert("Unfortunately, whilst you attempted to reach the union, a strike was underway and you could not get in touch. Unlucky.")
				failure();
			}

			else {
				if (userIdeology == "left") {
					alert("To demonstrate your shared ideology, you partake in a strike to converse and negotiate with the union.");
					success();
				}

				else {
					alert("Whilst you stand for everything unions despise, the Workers Equality Union agrees to meet upon the flirtation of dollar bills.")
					if (negotiatingAbility >= 10) {
						success();
					}

					else {
						failure();
					}
				}
			}
		}

		else if (userChoice == "jizz") {
			cheatCode();
		}

		else {
			alert("Please enter either labour or business.")
			secondEvent();
		}

		thirdEvent();		
	}

// Third event - leadership election or spill

	function thirdEvent() {
		if (approvalRating >= 20) {
			alert("After a succcessful first term, you have been re-elected on a dramatic margin. Consumers are rejoiced with the news and decide to go on a spending spree.");
			economyHealth += 10;
		}
		else if (approvalRating < 0) {
			alert("After a mismanaged term in parliament, your party has been voted out and the economy remains in shambles. Your final score is " + finalScore());
			playAgain();
		}
		else {
			var coup = prompt("After a mediocre first term, your party has been re-elected on the slightest of margins. However, your deputy leader, bill_turnbull_rudd_gillard, calls for a leadership spill. Do you stand down or remain?").toLowerCase();
			if (coup == "stand down") {
				alert("You stand down from leadership, and the economy falls apart.  Your final score is " + finalScore());
				playAgain();
			}
			else if (coup == "remain") {
				var coupOdds = Math.random();
				if (coupOdds >= 0.33) {
					alert("BREAKING NEWS: " + userName + " thwarts bill_turnbull_rudd_gillard in a shock leadership spill. He is thus labelled by his faithful companion Abbott as the 'suppository of all wisdom'.");
					negotiatingAbility += 20;
				}
				else {
					alert("BREAKING NEWS: " + userName + " has been removed from leadership in a shock spill. The stockmarket has fallen 1000 points on the news as bill_turnbull_rudd_gillard declares an atheist totalitarian theocracy. Your final score is " + finalScore());
					playAgain();
				}
			}
			else if (coup == "jizz") {
				cheatCode();
			}
			else {
				alert("please enter either 'stand down' or 'remain'");
				thirdEvent();
			}
		}

		fourthEvent();
	}

// Passing of four budgets to complete term

	function fourthEvent() {
		var count = 0;
		while (count < 4) {
			var budget = prompt(userName + ", It is time to deliver your yearly budget. Your policy advisors have put forth six ideas to improve the economy's health: raise taxes, lower taxes, increase spending, decrease spending, increase regulation, decrease regulation. Which do you choose?").toLowerCase();
			switch(budget) {
				case "raise taxes": alert("You raise taxes, to the detriment of both the economy and your popularity as many businesses move their operations to the Cayman Islands."); economyHealth -= 10 ; approvalRating -= 10; count += 1; break;
				case "lower taxes": alert("You lower taxes, boosting consumer spending and your own popularity. Never mind the future implications this may have as consumers continue to demand these low tax rates."); economyHealth += 10; approvalRating += 10; count += 1; break;
				case "increase spending": alert("You increase spending, creating jobs and improving your popularity. Who cares about the unsustainable path we are on anyway?"); economyHealth+= 10; approvalRating += 10; count += 1; break;
				case "decrease spending": alert("You decrease spending, met with outrage by consumers. However, the Tea Party is extremely satisfied."); economyHealth -= 10; approvalRating -= 10; count += 1; break;
				case "increase regulation": alert("You increase regulation, stifling business confidence and causing many voters, themselves with no business eaxperience, to become disgruntled."); economyHealth -= 10; count += 1; break;
				case "decrease regulation": alert("You decrease regulation, improving business confidence."); economyHealth +=10; count += 1; break;
				case "jizz": cheatCode(); break;
				default: alert("try again")
			}
		}

		if (approvalRating <= 0) {
			alert("Your archrival bill_turnbull_rudd_gillard has announced a spill and defeated you, ending your political career. GAME OVER. Your final score is " + finalScore());
			playAgain();
		}

		else {
			alert("Well done. You have managed to make it to the final year of your leadership. However, a familiar foe is making some noise.")
		}
		
		fifthEvent();
	}

// Final battle - topple Trump and progress to end

	function fifthEvent() {
		alert("Your two terms are nearly over, however that pesky opposition leader xxx_donaldtrump_xxx is causing trouble again, spreading false rumours about corruption and vested interests as leader.")
		var trump = false;
		while (trump == false) {
			var trumpProbability = Math.random();
			var trumpHealth = 50;
			var rumourResponse = prompt("Do you fight back with your own rumours or passively take the insults, knowing that they are unsubstantiated.").toLowerCase();
			if (rumourResponse == "spread rumours") {
				if (approvalRating >= 40 || trumpProbability > 0.5) {
					alert("You spread rumours of your own, and your popular standing amongst voters causes them to belive you.");
					alert(randomResponse());
					trumpHealth -= Math.floor(Math.random() * 100 + 1);
					approvalRating += 10;
					if (trumpHealth > 0) {
						alert("Trump is weak after that vicious rumour, hit him again.");
					}
				}
				else {
					alert("Trump's rumour hits you hard and damages your approval rating, whilst the public doesn't seem to believe your own rumour.")
					alert(reporter.trumpRumour);
					trumpHealth += Math.floor(Math.random() * 100 + 1);
					approvalRating -= 10;
				}
			}
			else if (rumourResponse == "take insults") {
				if (approvalRating >= 40 || trumpProbability > 0.5) {
					alert("You keep a cool head and take the insults, whilst the public admires your political capabilities.");
					alert(reporter.holdGround);
					trumpHealth -= Math.floor(Math.random() * 100 + 1);
					approvalRating += 10;
					if (trumpHealth > 0) {
						alert("Trump is weak with public hatred, hit him again.");
					}
				}
				else {
					alert("Trump's rumour hits you hard and damages your approval rating, whilst you cannot manage to propely keep a cool head.");
					alert(reporter.trumpRumour);
					trumpHealth += Math.floor(Math.random() * 100 + 1);
					approvalRating -= 10;
				}
			}

			else if (rumourResponse == "jizz") {
				cheatCode();
			}

			else {
				alert("Please enter either 'spread rumours' or 'take insults'");
				fifthEvent();
			}

			if (trumpHealth <= 0) {
				alert("You have defeated Trump and made it through your first two terms. Well done!");
				trump = true;
			}

			else if (trumpHealth >= 100) {
				alert("Trump has defeated you and thrown your party out of government dramatically. Your final score is " + finalScore());
				playAgain();
			}
		}

		sixthEvent();
	}

// End game handler

	function sixthEvent() {
		if (finalScore() >= 100) {
			alert("Well done " + userName + ", you have successfully maintained your approval rating whilst boosting the economy and 'trumping' countless foes in the process. Your final score is: " + finalScore());
			document.getElementById("theImage").style.visibility = "visible";
		}

		else {
			alert("Well " + userName + ", you have managed to scrape through the past eight years. Your final score is: " + finalScore());
		}

		playAgain();
	}
	
// Play agin function

	function playAgain() {
		var playAgain = prompt("Would you like to play again? \n Answer yes or no").toLowerCase();
		if (playAgain == "yes") {
			newGame();
		}
		else if (playAgain == "no") {
			return;
		}
		else {
			alert("Please enter yes or no");
			playAgain();
		}
	}

	
	do {
		var userIdeology = prompt("Welcome " + userName + ". Please enter your ideology: Left, Right or Centre").toLowerCase();
	}
	while (userIdeology !== "left" && userIdeology !== "right" && userIdeology !== "centre");
	confirm("Your name is " + userName + " and your ideology is " + userIdeology);
	findIdeology();
	alert("The year is 2034. Algorithm-writing programming machines, now accountable for over 75% of the trades on the Dow Jones Index, have replaced many of the world's richest companies' stock portfolios with wool futures, causing the second global financial crisis. Having just been elected to office, you are faced with an economic crisis and must deal with business, consumers and the unions to bring the country back to prosperity. To succeed in this game, you must be a skilled negotiator, a pragmatic economist and a popular statesmen. Your score will be recorded in each of these dimensions and will increase or decrease based on your responses to events. \n\nGood Luck!");
	firstEvent();

};

var userName = prompt("Hello Prime Minister, please enter your name.");
if (userName == "") {
	userName = "Unnamed hacker";
}

newGame();