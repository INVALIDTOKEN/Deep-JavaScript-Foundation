
// If you have a this keyword inside an arrow function, the "this" keyword is not a special keyword at all its just a random variable name.
// And because of that the engine will look one level up the lexical scope chain for finding the value of "this" just like for a normal variable.  

function foo(){
  let baz = ()=>{  // you can say that this arrow function has a closure over "this" inside the foo function. 
    console.log(this.who);
  };
  return baz;
}

var who = "global";
let o1 = { who : "o1", foo : foo};
let o2 = { who : "o2" };

let f1 = foo();  // default binding ( value of this = global object )
let f2 = o1.foo();  // implicit binding ( value of this = o1 )
let f3 = foo.call(o2); // explicit binding ( value of this = o2 )

f1();  // "global"     <--- uses window.who
f2();  // "o1"
f3();  // "o2"

// Arrow functions do not respect .call, .apply and .bind function 
f1.call(o1)  // "global"
let f4 = f1.bind(o2);
f4();  // "global"




































