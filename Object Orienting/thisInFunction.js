
// .call method of a function executes the function with context to the object povided in the agrument
// .bind returns a function that will be always executed in context to the object provided in the argument

function something(){
  this.hello = "hello";
  console.log(this.hello, this.who);
}

var who = "global", foobar, bazbam,
    obj1 = { who : "obj1", something : something };
    obj2 = { who : "obj2" };

something();  // "hello" "global"  <--- [ not good ] default binding
console.log(hello);  // "hello"  <--- oops!!!

obj1.something();  // "hello" "obj1"   <--- [ good ] implicit binding 
console.log(obj1.hello);  // "hello"

obj1.something.call(obj2);  // "hello" "obj2"   <--- [ good ] explicit binding
console.log(obj2.hello); // "hello" 

foobar  = something.bind(obj2);  // returns a function  <--- [ good ] hard binding
foobar();  // "hello" "obj2"
foobar.call(obj1) // "hello" "obj2"  <--- STILL obj2 

bazbam = new something(); // "hello" "undefined"  <--- [ good ] new keyword binding
console.log(bazbam.hello);  // "hello"

bazbam = new obj1.something();  // "hello" "undefined" 
bazbam = new foobar();  // "hello" "undefined"  <--- LOOK, not obj2

// [line-31] shows that you can override even a hard bound function ( in this case foobar ) using a new keyword. 



































