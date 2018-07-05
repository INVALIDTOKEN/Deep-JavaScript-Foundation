// [IMP NOTE] Please do not execute the code. There are some errors that are made to explain certain topics.


// Every thing start with the fact that when a function is created two things happens
// 1. That function is given a property called as "prototype" that has a reference to an object.
// 2. That prototype object of the function is given a proterty called "constructor" that has a reference to the function itself.
function Foo(who){
  this.me = who;
}

foo.prototype.identify = function(){
  return "I am " + this.me;
}

// Whenever a function (Foo in this case) is called with a new keyword, new keyword does 4 things.
// 1. Returns a brand new object out of thin air. (We will call it obj)
// 2. Links the __proto__ property of that object to the prototype property of the function. 
      // So now obj.__proto__ === Foo.prototype resolves to true because both of them are pointing to the same object.
// 3. Binds the "this" keyword to the newly created object "obj" meaning (this = obj) & executes the function. 
// 4. If the function do not returns "this" implicitly returns it so that the object that "this" points to can be stored in an identifier.

let a1 = new Foo("a1");
let a2 = new foo("a2");

// The speak function is only present in the a2 object.
a2.speak = function(){
  return "Hello, " + this.identify() + ".";
}

// This is only a happy accident that a1.constructor is equal to Foo.
a1.constructor === Foo; // true
a2.constructor === Foo; // true

// __proto__ is also pronounced as dunder proto.
// __proto__ is a public property that allow us to access the linkage b\w the object and its prototype.
a1.__proto__ === Foo.prototype;  // true;
a2.__proto__ === Foo.prototype;  // true;
// Before ES-5 the when we do not have proper support of __proto__ proterty the hack that people uses to find the prototype of an object was.
// a1.constructor.prototype
// [NOTE] a1.constructor === Foo && Foo.prototype is the object that we wanted.


a1.identify();
// [NOTE - 1] a1 object do not have a "identify" method property
  // So when the engine do not finds a property in an object it walks up the prototype chain (in this case goes to Foo.prototype)

// [NOTE - 2] Here we can see how dynamically deciding the value of "this" inside a function is helpful.
  // Beacause Foo.prototype.identify is a this aware function that is loging the value of this.me but Foo.prototype do not even have a me property. 
  // But because the value of "this" is decided how the function is called, so by implicit binding rule "this" keyword resolves to a1 object.






























