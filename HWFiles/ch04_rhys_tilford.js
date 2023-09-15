// Homework 4
// Rhys Tilford

// Sum and Range

function range(start, end) {
    let Nums = Array.from([]);
    let i = start;
    while (i <= end) {
        Nums.push(i);
        i = i + 1;
    }
    return (Nums);
};

console.log(range(3, 7));

function sum(range) {
    let i = range.length - 1;
    while (i > 0) {
        range[i - 1] = range[i] + range[i - 1];
        i = i - 1;
    };
    return (range[0]);
}

console.log(sum(range(3, 7)));


// Reversing an Array

function reverseArray(array) {
    revArray = Array.from([]);
    let i = 0;
    while (i <= array.length - 1) {
        revArray[array.length - i] = array[i];
        i = i + 1;
    };
    return (revArray.slice(1))
}

console.log(reverseArray(range(2, 5)))


function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const hold = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = hold;
    }
    return(array)
}

console.log(reverseArrayInPlace([2, 3, 4, 5]));