//Rhys Tilford
// Chapter 3

// Minimum
function min(x, y) {
    if (typeof x === "number" & typeof y === "number") {
        if (x < y == true) {
            return (x + " is the minimum");
        } else {
            return (y + " is the minimum");
        };
    } else {
        return ("You want me to coerce that?!?!?!\n Gimme some numbers.");
    };
};

console.log(min(3,8902394));

// Recursion
function isEven(x) {
    if (x < 0) {
        x = -x
    }

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

console.log(isEven(-19));

// Bean Counting
function countBs(str){
    let count = str.match(/B/g).length;
    console.log(count);
}

countBs("Google Bard is on some crazy BS");