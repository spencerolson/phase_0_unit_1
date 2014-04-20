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






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 