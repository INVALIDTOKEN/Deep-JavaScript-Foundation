function Foo(who){
  this.me = who;
}

Foo.prototype.identify = function(){
  return "I am " + this.me;
}

function Bar(who){
  Foo.call(this, who);
}

Bar.prototype.__proto__ = Foo.prototype;

// Another way to do this is as follow.
// 1. Bar.prototype = Object.create(Foo.prototype); 
// 2. Bar.prototype.constructor = Bar;

// Object.create([obj]) does two things. 
// 1. Creates a brand new object out of thin air. 
// 2. Links that object to another object that is passed as an argument. 
// That's the first two steps of the new algorithm. 

Bar.prototype.speak = function(){
  console.log("Hello, " + this.identify() + ".");
}

let b1 = new Bar("b1");
let b3 = new Bar("b2");

b1.speak();
b2.speak();