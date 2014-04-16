// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Spencer Olson
//  2. Joey Rosztoczy


function Client(firstName, lastName, age, quote, movie) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.quote = quote;
	this.movie = movie;
	this.display = function () {
	    console.log("First name: " + firstName + ", Last name: " + lastName + ", Age: " + age + ", Quote: " + quote + ", Movie: " + movie);
	  }
}

var louisCK = new Client("Louis", "CK", 46, "I don’t stop eating when I’m full. The meal isn’t over when I’m full. It’s over when I hate myself.", "Stand up with Louis CK");
var mitchHedberg = new Client("Mitch", "Hedberg", 35, "My fake plants died because I did not pretend to water them.", "Stand up with Mitch Hedberg");
var adamSandler = new Client("Adam", "Sandler", 47, "That's your home! Are you too good for your home?!", "Happy Gilmore");
var kristenBell = new Client("Kristen", "Bell", 33, "Do you wanna build a snowman?", "Forgetting Sarah Marshall");
var jimCarrey = new Client("Jim", "Carrey", 52, "...So you're telling me there's a chance? YEAH!", "Pet Detective");

//create array of our celebrities
var myCelebrities = [louisCK, mitchHedberg, adamSandler, kristenBell, jimCarrey];

console.log (louisCK.constructor === Client);
console.log (louisCK.age === 46);
console.log (louisCK.quote === "I don’t stop eating when I’m full. The meal isn’t over when I’m full. It’s over when I hate myself.");
console.log (louisCK.movie === "Stand up with Louis CK");

for (var i=0;i<myCelebrities.length;i++)
{ 
myCelebrities[i].display();
}