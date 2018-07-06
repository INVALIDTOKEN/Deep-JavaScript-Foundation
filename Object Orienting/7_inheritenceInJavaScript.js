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
  // Object.create() retuns an object whose __proto__ property is linked to the object which is passed as argument. 
// 3. Bar.prototype.constructor = Bar;

Bar.prototype.speak = function(){
  console.log("Hello, " + this.identify() + ".");
}

let b1 = new Bar("b1");
let b3 = new Bar("b2");

b1.speak();
b2.speak();