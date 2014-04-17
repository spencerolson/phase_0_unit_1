// I worked on this challenge by myself.




// Pseudocode
// 
// 1. "ERROR: The value of secretNumber should be a number."
//  Create a variable called secretNumber and give it a numeric value
// 2. "ERROR: The value of secretNumber should be 7."
//  Set secretNumber to 7.
// 3. "ERROR: The value of password should be a string."
//  Create a varibale called password and give it a string value.
// 4. "ERROR: The value of password should be 'just open the door'."
//   Change the value of password to 'just open the door'
//5. "ERROR: The value of allowedIn should be a boolean."
//  Create a varible named allowedIn and set it to true.
//6. "ERROR: The value of allowedIn should be false."
//  Set the value of allowedIn to false. 
//7. /Users/spencerolson/phase_0_unit_1/week_3/2_js_variables_objects/my_solution.js:106
  // members instanceof Array,ReferenceError: members is not defined
    // at Object.<anonymous> (/Users/spencerolson/phase_0_unit_1/week_3/2_js_variables_objects/my_solution.js:106:3)
    // at Module._compile (module.js:456:26)
    // at Object.Module._extensions..js (module.js:474:10)
    // at Module.load (module.js:356:32)
    // at Function.Module._load (module.js:312:12)
    // at Function.Module.runMain (module.js:497:10)
    // at startup (node.js:119:16)
    // at node.js:902:3
//  Create an array called members.
// 8. "ERROR: The first element (or index 0) in the value of members should be 'John'."
//  Make the first element of members 'John'
// 9. ERROR: The fourth element in the value of members should be 'Mary'.
//  Make the fourth element (or index 3) of members 'Mary'

// __________________________________________
// Write your code below.

//var secretNumber = 2;
var secretNumber = 7; //changed secret number to equal 7
//var password = "Rosie O'Donnell";
var password = "just open the door"; //changed password to 'just open the door'
//var allowedIn = true;
var allowedIn = false; //changed allowedIn to false
var members = [];
members[0] = "John";
members[3] = "Mary";



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John"]; //changed from original code. Instead of created a blank array and then adding "John", I now create the array and at the same time add "John" as the first element
members[3] = "Mary";




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// What parts of your strategy worked? What problems did you face?
  // It took me a minute or two to figure out what to do after getting my first error message. After some trial-and-error, I was able to figure out that I probably needed to CREATE a variable named secretNumber if the error message was telling me the value of secretNumber needed to be a number. Once i learned this, I was able to address future error messages much quicker -- if there was an error message regarding a variable I had not yet created, then I created said variable.
// What questions did you have while coding? What resources did you find to help you answer them?
  //A question I had whle coding was whether or not I needed to add semicolons at the end of each line. I had accidentally left some semicolons out of a few lines, but I noticed that my code was still running fine. After some research, I found that JavaScript will automatically add semicolons at the end of single line statements for you, BUT it is considered good practice to always manually add the semicolons yourself, so I went back to my code and added semicolons after each line. This is one of the sites I looked at to help me out with my question: http://mislav.uniqpath.com/2010/05/semicolons/
// What concepts are you having trouble with, or did you just figure something out? If so, what?

  // I was confused for a bit after receiving the error message from the test code regarding the member variable of type array (number 7 in my psuedocode). I had to look at the error message for a while before figuring out that not only 1) did I need to create a variable called members, but also 2) I needed to make that new variable an array. 
// Did you learn any new skills or tricks?
//  After some trial and error, I found that instead of 1) declaring var members = [], and then 2) declaring members[0] = "John", I could accomplish all this in one statement: var members = ["John"].
// How confident are you with each of the Learning Competencies?
  // I feel pretty solid about writing code to make driver code evaluate to true. I had a fun time with this exercise!
// Which parts of the challenge did you enjoy?

  // I am really liking the concept of Test-Driven Development. It makes coding so more manageable and less overwhelming. Instead of sitting there and trying to solve a huge problem at once, you tackle each assertion one-by-one. It's fun too because each assertion is like a mini-challenge. If you get stuck, you only feel that you have one small test to figure out, and you don't feel that all of your code is messed up.

// Which parts of the challenge did you find tedious?
//  To be honest, I didn't really find any part of this challenge tedious. At first, I thought it was a bit overkill to do the pseudocode, but after completing the exercise, it's really nice to look at the pseudocode to see my train of thought from beginning to end. Good stuff!
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

