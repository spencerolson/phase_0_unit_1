// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// RESCUE MISSION
this.moveDown(); //move down * 2
this.moveDown(); 
this.moveRight(); //move right 
this.moveUp();	//move up * 2
this.moveUp();
this.moveRight(); //move right * 2
this.moveRight();
this.moveDown();	//move down
this.attackNearbyEnemy(); //kill the Ogre!

// GRAB THE MUSHROOM
this.moveUp(); //move up
this.moveRight(); //move towards the mushroom
this.moveLeft(); //turn around after getting the mushroom
this.moveUp(); //move towards the Ogre

this.attackNearbyEnemy(); //kill the Ogre!

//DRINK ME
this.attackNearbyEnemy(); //kill first Munchkin
this.moveRight(); //move one space right
this.moveDown(); //walk towards the poition
this.moveUp(); //turn around after grabbing potion
this.moveRight(); //walk towards 2nd Munchkin
this.attackNearbyEnemy(); //kill 2nd Munchkin

//TAUNT THE GUARDS
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!"); //Call first guard over
this.moveLeft(); //move past door to give Phoebe a clear shot
this.moveLeft();
this.say("Attack!"); //tell Phoebe to attack the first guard

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me."); //Tell Phoebe to follow you while you escape
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Run!"); //Yell to get guards to come over
this.moveDown(); //Escape by taking the circular side path
this.moveRight();
this.moveUp();
this.moveRight();
 
 
//  IT'S A TRAP
 // Taunt the Ogre and run for cover!
this.moveDown(); //move to the bottom of the screen to get the ogre's attention
this.moveDown();
this.moveDown();
this.moveUp(); //once the ogre sees you, head back where you came from to lure him into the archers' sight
this.moveUp();
this.moveUp();
 
//  TAUNT
 this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("I spit in your general direction"); //Unleash the three most vicious insults ever
this.say("Ni!");
this.say("I'm going to take your mother out for a nice steak dinner and never call her back.");

// COWARDLY TAUNT
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(63,20); //move out towards the towers
// Say something!
this.say("Did someone order a pizza?"); //lure the ogres in and watch them die

// COMMANDING FOLLOWER
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Don't follow me, please!"); //get them to follow you
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(68,51); //move towards the ogres
this.say("Ow, i just stepped on attack!"); //tell the troops to attack
this.say("Ok attack fools");
// Make sure Tharin is safe!

MOBILE ARTILLERY
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(42,41); //move and attack first pack of ogres twice
this.attackXY(50,69);
this.attackXY(45,52);
this.attackXY(67,54); //attack second pack of ogres twice
this.attackXY(58,47);

// Reflection:

// What parts of your strategy worked? What problems did you face?
//	I really didn't have too many issues when working on these problems. A few times I had to re-write my code to change the (X,Y) coordinates of my movements because I had moved too close to the enemies and got killed.
// What questions did you have while coding? What resources did you find to help you answer them?
// Again, I didn't hit too many snags during this exercise. I did not use any outside resources to help me answer questions. The one obstacle I did face (having my (X,Y) coordinates too close to my enemies), I was able to solve with some trial and error.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
//	At first, I was not sure how to run my code in Code Combat after typing it. However, I found that the page automatically refreshes your code after you enter a new line. I also forgot to add a semicolon a few times which threw me off for a little bit.
// Did you learn any new skills or tricks?
//	I learned to end my lines with semicolons in JavaScript, which was is something new when compared to Ruby.
// How confident are you with each of the Learning Competencies?
//	I felt pretty confident with the CodeCombat exercise. I feel it was an ultra-beginner JavaScript tutorial, so I didn't have too many questions.
// Which parts of the challenge did you enjoy?
//	I enjoyed the challenge where I had to direct my own troops into battle. It was fun making up silly commands to tell them (like 'Don't follow me!' to get them to follow me').
// Which parts of the challenge did you find tedious?
//	I found the directional challenges a bit tedious. I didn't feel that I was learning a ton when I was continually telling my avatar to turn in different directions.