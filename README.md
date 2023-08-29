# csc324 at GC

this is where i'm saving my work for csc324

## Notes

Javascript ch1:

 - console.log('con' + 'cat' + 'e' + 'nate')

 - - One thing about this is that JS won't automatically print stuff to the console.
 - - I must use a console.log() call
 - - the .log part is a part of object oriented programming

 - repeating words
 - - console.log("hey" repeat(7))

 - using text and code in string
 - - console.log(`half 100 is ${100/2}`)

 - operators (don't worry just yet)
 - - console.log(typeof 4.5)
 - - console.log(typeof "x")

 - commenting
 - - // -> this is a comment

 - dealing with edge cases
 - - console.log(Nan == Nan)
 - - // -> false

 - Look into the specifics of Boolean Operators
 - - JS is pickier than R

 - ternary arguments (can be either or)
 - - console.log(true ? 1 : 2);
 - - // -> 1
 - - console.log(false ? 1 : 2);
 - - // -> 2

 - Automatic Type Conversion
 - - JS does this but it sometimes guesses unexpedted results
 - - console.log("five"*2)
 - - //-> NaN

Loops

 - For loops

 - - for (//initial value; logical condition; how it changes) {
  console.log(number);
}
