// [IMP NOTE] Please do not execute the code. There are some errors that are made to explain certain topics.

function Foo(who){
  this.me = who;
}

Foo.prototype.identify = function(){
  return "I am " + this.me;
}

Foo.prototype.speak = function(){
  console.log("Hello, " + this.identify() + ".");  // super unicorn magic 
}

let a1 = new Foo("a1");

// So no matter how many times we have to walk up the prototype chain...
// ...or how far we have to go for finding a property in the prototype chain.
// We are always using the object that is used at the callsite to execute the function. 
a1.speak();