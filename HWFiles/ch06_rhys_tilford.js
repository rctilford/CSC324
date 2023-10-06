// Chapter 6 Homework
// Rhys Tilford

// Groups

class Group {
    constructor(){
        this.group = [];
    }
    add(n){
        if(this.group.indexOf(n) > -1){
            return("I've already got that one.");
        } else {
            this.group.push(n);
        }
    }
    delete(n){
        if(this.group.indexOf(n) >= 0){
            this.group.pop(n);
        } else {
            return("I don't have this one");
        }
    }
    has(n){
        return this.group.indexOf(n) >= 0;
    }
    static from(i){
        let group = new Group;
        for(let n of i){
            group.add(n);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false