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




