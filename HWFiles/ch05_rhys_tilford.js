// ch 5 HW
// Rhys Tilford


// Flattening 

let arrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

console.log(arrays.reduce((arraycumulation, arrayappend) => arraycumulation.concat(arrayappend)));


// Write your own loop

function loop(value, test, update, body) {
    result = test(value);
    if (result == true) {
        value = update(value);
        body(value);
        loop(value, test, update, body);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);


// Everything


/// loop
// function every(array, test) {
//     for (let element of array) {
//       if (test(element) === false) {
//         return false;
//       }
//     }
//     return true;
// }


/// some

function every(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true