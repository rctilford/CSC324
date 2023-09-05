//Rhys Tilford
// Chapter 3

// Minimum


// Recursion
function isEven(x){
    if(x < 0){
        return("Try again with a positive number");
    }
    if(x == 0){
        return(true);
    }
    if(x == 1){
        return(false);
    }
    if(x !== 0 & x !== 1){
        return(isEven(x-2));
    }
}


console.log(isEven(18))

// Bean Counting

