const fs = require('fs')

const path = require('path');
const targetfile = path.resolve('AdventOfCode22\Day1Input.txt');
const Input = fs.readFileSync(targetfile);

console.log(Input);