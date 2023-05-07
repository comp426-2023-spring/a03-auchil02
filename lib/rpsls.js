export {rps,rpsls}

export function rps(shot) {
	// assign opponent shot
	let oppShot = Math.floor(Math.random(3));
	if (oppShot == 0) {
		oppShot = "rock"
	} else if (oppShot == 1) {
		oppShot = "paper"
	} else {
		oppShot = "scissors"
	}
	
	// if called without argument, return only the shot for one player
	if (shot == undefined) {
		return "{player: " + oppShot + "}";
	}
	
	// match playerShot argument to oppShot formatting for comparisons
	let playerShot = shot.toLowerCase();
	
	// make sure it's not lizard or spock
	if (playerShot == "lizards" || playerShot == "spock") {
		console.error("Range error: wrong game, use rock, paper, or scissors!");
	}
	
	// make sure it's rock, paper, or scissors
	if (playerShot != "rock" || playerShot != "paper" || playerShot != "scissors") {
		console.error("Range error: use rock, paper, or scissors!");
	}
	
	let result;
	if ((playerShot == "rock" && oppShot == "scissors") || (playerShot == "paper" && oppShot == "rock") ||(playerShot == "scissors" && oppShot == "paper")) {
		result = "win";
	} else if (playerShot == oppShot) {
		result = "tie";
	} else {
		result = "lose";
	}
	
	return "{\n  player: '" + playerShot + "',\n  opponent: '" + oppShot + "',\n  result: '" + result + "'\n}";
}