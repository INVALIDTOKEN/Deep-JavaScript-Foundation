// [IMP] If you want to execute the code snippet please execute it into node.js environment. 

// requiring events returns a function that is now stored in events.
const events = require("events");

let Person = function(name){
    this.name = name;
}

Person.prototype.__proto__ = events.prototype;
// You can also do this
// [1] Person.prototype = Object.create(event.prototype);
// [2] Person.prototype.constructor = Person; 

Person.prototype.showName = function(){
    return this.name;
}

let newPerson = new Person("Sahil");

console.log("Current object : ", newPerson);
console.log("1st proto chain : ", newPerson.__proto__ === Person.prototype);  // true
console.log("The above object is equal to Person.prototype");

console.log("=".repeat(10));

console.log("2nd proto chain : ", newPerson.__proto__.__proto__ === events.prototype);  // true
console.log("This above object is equal to events.prototype");

console.log("=".repeat(50));

console.log("3rd Prototype chain : ", newPerson.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log("This above object is equal to Object.prototype");

console.log("=".repeat(100));

console.log("4th proto chain : ", newPerson.__proto__.__proto__.__proto__.__proto__);
console.log("The above object is equal to null");

