//Rhys Tilford
// Chapter 3

// Minimum
function min(x, y) {
//    if ((typeof (x)) !== "number" / (typeof (y)) !== "number") {
//        return("You want me to coerce that?!?!?!\n Gimme some numbers.");
//     } else {
        if (x < y == true) {
            return(x + " is the minimum");
        } else {
            return(y + " is the minimum");
        };
   };
// };


console.log(min("z","w"));

// Recursion
function isEven(x) {
    if (x < 0) {
        return ("Try again with a positive number");
    } else {
        if (x == 0) {
            return (true);
        }
        if (x == 1) {
            return (false);
        }
        if (x !== 0 & x !== 1) {
            return (isEven(x - 2));
        };
    };
};


console.log(isEven(18));

// Bean Counting
function countBs(x){
    let i = 0;
    let Bfindr = /(.?)+B(.?)+/;

    Bfindr.test("xslkfj")

}
