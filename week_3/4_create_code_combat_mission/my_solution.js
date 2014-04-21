// I worked [by myself, with:] on this challenge

// Your mission description:
// 
// In this mission, you will need to kill an Ogre. The catch is,
// you only get one swing of the sword, and your starting sword does not
// do enough damage to kill the Ogre in one swing. Therefore, you will need
// to navigate the path to pick up a more powerful sword, and then kill the Ogre
// with your new sword.

// Pseudocode
// The layout of the board is going to be a 10x10 grid. Xs represent non-path areas 
// (e.g. you cannot walk on them; think of them as walls if you like), Ps represent 
// paths, S represents the location of the powerful sword, O represents the location 
// of the Ogre, and H represents the starting location of our hero.
// 
// H   X 	X 	X 	X 	X 	X 	X 	X 	X 	
// P   X 	X 	X 	X 	X 	X 	X 	X 	X 	
// P   X 	X 	X 	X 	X 	X 	X 	X 	X 	
// P   P 	P 	P 	P 	X 	X 	X 	X 	X 	
// X   X 	X 	X 	P 	X 	X 	X 	X 	X 	
// X   X 	X 	X 	P 	X 	X 	X 	X 	X 	
// X   X 	X 	X 	P 	X 	X 	X 	X 	X 	
// X   S 	P 	P 	P 	X 	X 	X 	X 	X 	
// X   X 	X 	X 	P 	X 	X 	X 	X 	X 	
// X   X 	X 	X 	P 	P 	P 	P 	P 	O 	
//
// Create a gameBoard object that contains an array of arrays, to represent the board above
// Create a displayBoard function that can be used to print out the current state of the game board.
// Create a hero object with a name property, location property, moveUp property (method), moveDown property (method), moveLeft property (method), moveRight property (method), attackPower property, and attack property (function)
// Create an ogre object with a name property, location property, and health property
// 

// Initial Code

var gameBoard = [ ["P", "P", "P", "P", "X", "X", "X", "X", "X", "X"], 
				  ["X", "X", "X", "P", "X", "X", "X", "S", "X", "X"],
				  ["X", "X", "X", "P", "X", "X", "X", "P", "X", "X"],	
				  ["X", "X", "X", "P", "X", "X", "X", "P", "X", "X"],	
				  ["X", "X", "X", "P", "P", "P", "P", "P", "P", "P"],
				  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "P"],
				  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "P"],
				  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "P"],
				  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "P"],
				  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O"]];

function displayBoard(coords) {
	var initValue = gameBoard[coords[0]][coords[1]];
	gameBoard[coords[0]][coords[1]] = "H";
	for (var i = 0; i <= gameBoard.length - 1; i++) {
		for (var j = 0; j <= gameBoard[0].length - 1; j++) {
			process.stdout.write(gameBoard[j][i] + " "); 
		};
		console.log("");
	};
	gameBoard[coords[0]][coords[1]] = initValue;
}

var hero = {name: "Spencer", 
			location: [0,0], 
			moveUp: function () {
				if (gameBoard[this.location[0]][this.location[1]-1] != "X") {
					console.log("Moving Up.");
					this.location[1] -= 1;
					displayBoard(this.location);
					checkCurrentTile();
					console.log("Your new location is Row: " + (this.location[1] +1) + ", Column: " + (this.location[0] + 1));
				}
				else {
					console.log("You can't move up!");
				}
				console.log("");
			},
			moveDown: function () {
				if (gameBoard[this.location[0]][this.location[1]+1] != "X") {
					console.log("Moving Down.");
					this.location[1] += 1;
					displayBoard(this.location);
					checkCurrentTile();
					console.log("Your new location is Row: " + (this.location[1] +1) + ", Column: " + (this.location[0] + 1));				}
				else {
					console.log("You can't move down!");
				}
				console.log("");
			},
			moveLeft: function () {
				if (gameBoard[this.location[0]-1][this.location[1]] != "X") {
					console.log("Moving Left.");
					this.location[0] -= 1;
					displayBoard(this.location);
					checkCurrentTile();
					console.log("Your new location is Row: " + (this.location[1] +1) + ", Column: " + (this.location[0] + 1));				}
				else {
					console.log("You can't move left!");
				}
				console.log("");
			},
			moveRight: function () {
				if (gameBoard[this.location[0]+1][this.location[1]] != "X") {
					console.log("Moving Right");
					this.location[0] += 1;
					displayBoard(this.location);
					checkCurrentTile();
					console.log("Your new location is Row: " + (this.location[1] +1) + ", Column: " + (this.location[0] + 1));				}
				else {
					console.log("You can't move right!");
				}
				console.log("");
			},

			attackPower: 10,
			attack: function () {
				console.log("You raise your sword in the air and swing as hard as you can at the ogre, and...")
				if (this.attackPower >= 15){
					console.log("Congrats! You killed the ogre!");
				}
				else {
					console.log("Your sword was not strong enough and you didn't kill the Ogre. You lose! (You need at least 15 attack power to kill the ogre and your current attack power is " + this.attackPower + ".");
				}
				console.log("");
			},

			}

function currentTileType(){
	return gameBoard[hero.location[0]][hero.location[1]];
}


function checkCurrentTile(){
	if (currentTileType() == "S") {
		hero.attackPower += 10;
		console.log("You've picked up the Power Sword! +10 Attack Damage.");
		console.log("Your attack power changed from " + (hero.attackPower -10) + " to " + hero.attackPower + ". Nice!");
	};
	if (currentTileType() == "O"){
		console.log("You've made it to the ogre. Attack!");
	}
}

displayBoard(hero.location);
hero.moveDown();
hero.moveDown();
hero.moveDown();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveDown();
hero.moveDown();
hero.moveDown();
hero.moveDown();
hero.moveLeft();
hero.moveLeft();
hero.moveLeft();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveDown();
hero.moveDown();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveUp();
hero.attack();



// Refactored Code


//I did not refactor my code, because I was basically refactoring it as I was writing it. If I thought a variable name was confusing or I was doing something inefficiently, then I would go back and fix the issue. I'm sure my code is not 100% as efficient or beautiful as it could be, but I basically knew nothing about JavaScript before doing this challenge and now I feel like I'm beginning to get a grasp.



// Reflection
// 
// What parts of your strategy worked? What problems did you face?
// What questions did you have while coding? What resources did you find to help you answer them?
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Did you learn any new skills or tricks?
// How confident are you with each of the Learning Competencies?
// Which parts of the challenge did you enjoy?
// Which parts of the challenge did you find tedious?
// 
// I tried my best to divide this challenge into many small tasks, since it was a pretty overwhelming project as a whole. I think this worked well. One of the first problems I faced was how to correctly display the gameboard to the user. I ended up using a nested for statement, which worked out pretty well for me. I also had trouble when trying to reference this.location within my hero variable. Instead, I had to make a separate function, outside of my hero variable, that returned the location coords. I'm still not completely sure why I had to do this, so it's something I may want to look into next week to see if I can get any answers. I didn't learn any specific 'tricks' during this challenge but I definitely learned a TON about JavaScript while doing this challenge. I really enjoyed this challenge because it allowed me to use my creativity to do any type of project I pleased. And...i got to create a game which is pretty cool! I was able to get the game functioning as well which was pretty awesome. In the future, I'd like to be able to alter the code so that I can prompt the user for an action, e.g. move up, move down, attack.
// 
// 
// 
// 