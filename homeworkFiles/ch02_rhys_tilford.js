//Rhys Tilford
// Chapter 2

// Looping a Triangle
let line = "#" ;
while(line.length <= 7){
    console.log(line);
    line = line + "#" ;
}

// FizzBuzz
number = 1;
while(number <= 100){
if(number % 3 == 0){
    if(number % 5 == 0){
        console.log("FizzBuzz");
    } else {
        console.log("Fizz");
    }
} else {
    if(number % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(number);
    }
}
number = number + 1;
}

// Chessboard

line = 1;
let str = "";
while(line <= 8){
    if(line % 2 == 0){
            str = str + "# # # # \n";
        } else {
            str = str + " # # # #\n";
    }
    line = line + 1;
}
console.log(str);

// Variable Size Chessboard

size = 10;
line = 1;
str = "";
if(size % 2 == 0){
while(line <= size){
    if(line % 2 == 0){
            str = str + "# ".repeat(size/2) + "\n";
        } else {
            str = str + " #".repeat(size/2) + "\n";
    }
    line = line + 1;
}
console.log(str);
} else {
    console.log("Size must be an even number")
}
