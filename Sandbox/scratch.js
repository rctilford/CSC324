// Notes

// Javascript ch1:

//  - console.log('con' + 'cat' + 'e' + 'nate')

//  - - One thing about this is that JS won't automatically print stuff to the console.
//  - - I must use a console.log() call
//  - - the .log part is a part of object oriented programming

//  - repeating words
//  - - console.log("hey" repeat(7))

//  - using text and code in string
//  - - console.log(`half 100 is ${100/2}`)

//  - operators (don't worry just yet)
//  - - console.log(typeof 4.5)
//  - - console.log(typeof "x")

//  - commenting
//  - - // -> this is a comment

//  - dealing with edge cases
//  - - console.log(Nan == Nan)
//  - - // -> false

//  - Look into the specifics of Boolean Operators
//  - - JS is pickier than R

//  - ternary arguments (can be either or)
//  - - console.log(true ? 1 : 2);
//  - - // -> 1
//  - - console.log(false ? 1 : 2);
//  - - // -> 2

//  - Automatic Type Conversion
//  - - JS does this but it sometimes guesses unexpedted results
//  - - console.log("five"*2)
//  - - //-> NaN

// Loops

//  - For loops

//  - - for (//initial value; logical condition; how it changes) {
//   console.log(number);
// }





console.log("Hello World!!!!!!!");

let name = "Rhys";

console.log(name + " is learning JS")

// Javascript counts from 0
// so 3 is the 4th number.



// how to make a function

const square = function(x) {
    return x * x;
};

//how to call a function
console.log(square(9));

// if I make a variable in a loop it won't
// show outside the loop. However, If I make
// the variable with "var" instead of "let"
// it will remain out of the function.


//declaration function notation
function square2(x) {
    return x * x;
  }

// In javascript you can declare a declaration function
// anywhere in the program and call it anywhere.
// i.e. you can call a function above where you define it.

// Arrow Functions
const power2 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };

// optional arguments
function minus(a, b) {
    if (b === undefined) return -a; //three equal signs to get around coercion
    else return a - b;
  }
  
  console.log(minus(10));
  // → -10
  console.log(minus(10, 5));
  // → 5

// Closure
function wrapValue(n) {
    let local = n;
    return () => local;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2



// Recursion
function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3));
  // → 8

// This is when a function calling
// its self inside its own body

// 9/5 Notes

// Always use let in functions when defining a variable
/// This prevents the variable from gaining scope outside
/// the function.

// 9/7 Notes

// How to make arrays

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// js counts starting at 0 so the command on line 150
// will return 5

// Properties

// syntax -> Object.Property
// alternate syntax -> Object["property with space in name"]

let nums = [3,1,-4];

console.log(nums[1])
// the indices that allow us to subset arrays are just properties
// of arrays.

// properties hold function values
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

console.log(nums.reverse)
// arrays can be reversed

// we can push stuff to arrays and pull stuff from them
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


// objects

let day1 = {
  squirrel: false,   // squirrel is a property false is the value.
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;   // here we define a new property for day1
console.log(day1.wolf);
// → false

let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree" // the property "touched tree" is not valid unless in quotes.
};



// with the in operator we can check to see if a value is in anObject.
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

// the Object is an important thing to know
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

// Object.assign is a can copy all properties from one object to another.

// here is a larger array, this one contains arrays strings inside of it
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
// it is very similar to a list.


// Mutability

let object1 = {value: 10};
let object2 = object1; // we set object2 to match object 1
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3); // == looks for strict identity matches
// → false
// So what's up?

object1.value = 15; // here we changed object1 to 15
console.log(object2.value); // so object2 has changed to match object1.
// → 15
console.log(object3.value);
// → 10

const score = {visitors: 0, home: 0};
// This is okay
//score.visitors = 1;
// This isn't allowed
// score = {visitors: 1, home: 1};


// The Lycanthrope's log

// let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

// now we apply the function
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


// 
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434


// now to compute the correlation
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// console.log(tableFor("pizza", JOURNAL)); // JOURNAL is built into the website of the text.
// → [76, 9, 4, 1]




