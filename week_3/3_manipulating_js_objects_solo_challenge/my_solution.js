// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}


/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
   //create a new Object called adam

2. Give adam a name property with the value "Adam".
  //Instead of created adam with no properties, create adam with a name property with corresponding value "Adam"

3. Add a spouse property to terah and assign it the value of adam.
  //Add spouse: adam to our terah variable. Make sure you assign the object adam, not the String "Adam" to spouse.
4. Change the value of the terah weight property to 125.
  //Change terah's weight to 125
5. Remove the eyeColor property from terah.
  //Delete the eyeColor property from terah
6. Add a spouse property to adam and assign it the value of terah.
  //Make the spouse property of adam terah, using the same technique you used to make adam terah's spouse

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
   //Add a children property to terah, and make its value an Object with no properties.

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
  //add a carson property to terah's children property. The corresponding value should be an object named carson with a name property of "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
   //Add a carter proprety to terah's children property. 
   //Add a property titled name with value "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    //Add a colton proprety to terah's children property. 
    //Add a property titled name with value "Colton".
11. Add a children property to adam and assign it the value of terah children.
    //Assign adam's children property to terah's children property


*/

// __________________________________________
// Write your code below.

//var adam = {};
var adam = {name: "Adam"}; //changed adam to include name: "Adam"
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {carson: carson = {name:"Carson"}};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

//Refactored Code
//I did not refactor my code for this exercise, since I did a good amount of research while I was writing it.
//I tried my best to be efficient and do commands in one line if possible.



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// What parts of your strategy worked? What problems did you face?
// What questions did you have while coding? What resources did you find to help you answer them?
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Did you learn any new skills or tricks?
// How confident are you with each of the Learning Competencies?
// Which parts of the challenge did you enjoy?
// Which parts of the challenge did you find tedious?
// 
// This challenge started off really well for me, and then I hit a snag when trying to create the child property. It took me a while to realize that I can add a property AND give it a value at the same time. Once I had that 'aha' moment, it was pretty much smooth sailing.I learned the delete keyword while doing this challenge -- I did not know about it before. I googled how to delete a property, and found a stack overflow article that explained it. I feel confident with the Learning Competencies. I really enjoyed the process of tackling each assertion, 1 by 1. This process is much better than trying to solve a giant problem all at once.
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)