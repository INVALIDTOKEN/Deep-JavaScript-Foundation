// [IMP NOTE] Please do not execute the code. There are some errors that are made to explain certain topics.

function Foo(who){
  this.me = who;
}

Foo.prototype.identify = function(){
  return "I am " + this.me;
}

let a1 = new Foo("a1");
a1.identify(); // logs "I am a1"
// But what if we do shadowing ? 


a1.identify = function(){ // shadowing
  // our intension here is to call the identify function of the Foo.prototype 
  console.log("Hello, " + this.identify() + "."); 
}

a1.identify(); // [Error] Infinite recursion


// [NOTE] We think that this might be the solution but its note.
a1.identify = function(){
  // I want to call the Foo.prototype.identify here using a1 object.
  console.log("Hello, " + this.__proto__.identify() + ".");
  // Here the identify function called is correct that means its Foo.prototype.identify();
  // But the "this" keyword inside the Foo.prototype.identify function resolve to Foo.prototype object itself because of __proto__  
}
a1.identify();  // logs "Hello, undefined ."



// [NOTE] We think that this might be the solution & it is but there is a prblm. 
a1.identify = function(){
  console.log("Hello, " + this.__proto__.identify.call(this) + ".");
}

a1.identify();  // logs "Hello, I am a1 ."
// "Hurrrah! we completed the solution.... really ?";

// What if we now do this. 
let x1 = {
  me : "x1"
}
x1.__proto__ = a1;

x1.identify(); // [Error] Infinite Recursion
// now to solve this error problem we need two __proto__ at line 37. 
// But if we add two __proto__ at line 37 then a1.identify() function call would break.
  // This is because the engine is goona effectively look into Object.prototype and it does not have a identify property.

// [POINT TO NOTE] 
  // We cannot override methods in prototype system without using Explicit Pseudo Polymorphism. 

// [REAL SOLUTION]

a1.identify = function(){
  // Explicit Psuedo Polymorphism.
  console.log("Hello, " + Foo.prototype.identify.call(this) + ".");
}

a1.identify(); // logs "Hello, I am a1."
x1.identify(); // logs "Hello, I am x1."

// [CONCLUSION] when you do shadowing you fall into the problem of Explicit Psuedo Polymorphism.
// So it is good to do not shadow but if you do not shadow you are losing 1 of the major features of object oriented design that is method overriding and polymorphism. 




































