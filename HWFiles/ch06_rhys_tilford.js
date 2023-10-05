// Chapter 6 Homework
// Rhys Tilford

// Groups

// Write a class called Group (since Set is already taken).
// Like Set, it has add, delete, and has methods. Its
// constructor creates an empty group, add adds a value
// to the group (but only if it isn’t already a member),
// delete removes its argument from the group (if it was a
// member), and has returns a Boolean value indicating whether
// its argument is a member of the group.

// Use the === operator, or something equivalent such as
// indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iterable
// object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
    constructor(){
        this.group = [];
    }
    add(n){
        if(this.group.indexOf(3) > -1){
            return(this.group.push(n));
        } else {
            return("I've already got that one.");
        }
    }
    delete(n){
        if(this.group.indexOf(n)){
            return(this.group.pop(n));
        } else {
            return("I don't have this one");
        }
    }
    has(n){
        return(this.group.indexOf(n) >-1);
    }    
}

let g = new Group()

console.log(g.add(3))



