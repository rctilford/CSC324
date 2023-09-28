const fs = require('fs');
const Input = fs.readFileSync('Day1Input.txt', 'utf8').split('\r\n');

function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

console.log(getAllIndexes(Input, ''));



