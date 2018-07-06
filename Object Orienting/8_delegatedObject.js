// Please do not run the complete code although you can run snippets separately 

// What I want to do here is to find the best way to implement OLOO that looks like this.
// obj(b1) ---> obj(Bar.prototype / Bar) ---> obj(Foo.prototype / Foo) ---> obj(Object.prototype)

// CODE 1.
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

Bar.prototype.speak = function(){
  console.log("Hello, " + this.identify() + ".");
}

let b1 = Object.create(Bar.prototype);  // Creating an object (b1) linked to another object (Bar.prototype)
Foo.call(b1, "b1"); // initializing the object using Foo function. 


// CODE 2
// 1. Bar function declaration is removed. 
// 2. Bar is an object now who is linked to Foo.prototype.
// 3. Bar uses "init" method to initialize peer objects. 

function Foo(who){
  this.me = who;
}
Foo.prototype.identify = function(){
  return "I am " + this.me;
}

let Bar = Object.create(Foo.prototype);
Bar.init = function init(who){
  Foo.call(this, who);
};
Bar.speak = function speak(){
  console.log("Hello, " + this.identify() + ".");
}

let b1 = Object.create(Bar);
b1.init("b1");
b1.speak(); // logs "Hello, I am b1." 
// although "init" function is declared in "Bar" object but we can access it using the prototype chain
// We can see that "init" is a this aware function so the value of this inside "init" is equal to b1 due to implicit binding rule.


// CODE 3

let Foo = {
  init(who){
    this.me = who; 
  },
  identify(){
    return "I am " + this.me;
  }
}

let Bar = Object.prototype(Foo);
Bar.speak = function speak(){
  console.log("Hello, " + this.identify());
};

let b1 = Object.prototype(Bar);
b1.init("b1");
b1.speak(); // logs "Hello, I am b1"