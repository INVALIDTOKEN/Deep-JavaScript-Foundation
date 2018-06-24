// [NOTE] PLEASE DON'T RUN THE CODE IT WILL BREAK.

// Hoisting is just a made up metaphor for how the compiler works.
// Hoisting refers to the action of creating space for every formal declaration in the correct scope collection at the beginning of execution of the scope.

// We know that javascript is a two pass language. The 1st pass is when the compiler reads the code 
// and the second pass when the engine (JVM) reads the code.

// When compliler reads the code it only looks for formal decleration. 
  // if the formal declaration is formal variable declaration, it create some space for that varible is the correct scope collection with the help of scope manager.
  // if the formal declaration is formal function declaration, it not only creates space in the correct scope collection but also initialize that space with the reference to that function. That's why people say that functions are hoisted first. 

// [ EXAMPLE 1 ]

// Actual code 
// -------------
a;
b;
var a = b;  
var b = 2;    
b;
a;
// -------------

// How the compiler runs the code 
//-------------------------------
var a;
var b;
a;
b;
a = b;
b = 2;
b;
a;
//-------------------------------


// [ EXAMPLE 2 ]
// ACTUAL CODE
//-------------
var a = b();
var c = d();
a;
c;

function b(){
  return c;
}

var d = function (){
  return b();
}
// ------------

// HOW THE COMPILER SEES THE CODE 
//-------------------------------
function b(){
  return c;
}
var a;
var c;
var d; // d is undefined

a = b();
c = d(); // type error : you cannot execute an undefined value

a;
c;

d = function(){
  return b();
}
//--------------------------------
// This is the reason why people says that function expressions are not hoisted. Actually function expression is a value that is assigned to a variable and assignment of the variable is handled at the 2nd pass when the engine is executing the code. 

// [ IMP ] HOISTING IN "let" AND "const" KEYWORD 
// Now when we talk about formal varible declaration there are two things that we are concerned about.
  // 1. At which point the space for the variable is declared in the correct scope collection.
  // 2. At which point the space is initialized either to a value or undefined. 

function usingvar (){
  console.log(a); // return undefined
  var a = 10;
}

function usinglet (){
  console.log(b); // referenceError : you cannot access a variable in the temporal dead zone. 
  let b = 10;
}

// variable declaration === declaring some space in the correct scope collection + initializing that space with some value. 

// When we declare a variable either using var or let, two things happens only one of which is actually hoisting. 
  // 1. When the compiler reads the code it look for formal variable declaration and when it founds one it creates some space for that variable in the correct scope collection, here at complile time some space is made for the identifier " a " inside the scope collection of "usingvar" function and some space is created for the identifier " b " in the scope collecion of " usinglet " function. [so this step is same for both the let and var keyword].

  // [var keyword does this]
  // 2.1 At run time ( when the engine reads the code ) as soon as the engine enters the scope it initializes all the space that were created at complile time using var with a value of undefined. So now those variables are available to be used through the entire scope.

  // [let keyword does this]
  // 2.2 At run time variable space created using let keyword are not initialized to undefined at the beginning of the scope, they are initialized when the engine encounters the let keyword in the actual code ( in this case line number 87 ). So the period between the beginning of the scope and the actual declaration of the variable is called the tempral dead zone and we cannot access that variable inside temporal dead zone. This is because inside temporal dead zone only the space is created for the varible and no value is present at that space to be accessed. 

  //[Temporal dead zone]
  // Temporal dead zone is basically an uninitialized state for a variable (meaning the space is created but no value is present) and hence the varible cannot be used. 
  
// What is hoisting ? 
  // Hoisting means creating space for every formal declaration (in case of formal function declaration creating space and assiging the space a referance to that function ) in the correct scope collection before the execution of that scope, so variables declared using let, const & var are all hoisted.
  // Hoisting do not say anything about the initialization of that space and that's where the variable declaration using var and let differs. variable declaration using var are initialized to undefined at the beginning of the scope and variable declaration using let are initialized at the point where the engine encounters its actual declaration in the code. 


// Difference between undeclared and undefined ? 
  // undeclared means that the space for a particular varible is not created in given scope collection and undefined means that the space for a particular variable is created and currently has the value undefined. 

// [IMP]
// Why temporal dead zone is a good thing ? 

let xlet = 'outer value';
(function() {
  // beginning of the scope start TDZ for x
  console.log(xlet);
  let xlet = 'inner value'; // declaration ends TDZ for x
}());

// Now if let are not hoisted line 118 would log the value variable xlet in the outer scope, but because of the fact that "xlet" is hoisted but just not initialized with a value, accessing the variable "xlet" will cause a reference error because it was accessed in TDZ and inside TDZ the variable "xlet" just has a space in the scope collection and no value. 
// So TDZ is important because it helps us in debugging the errors.  

















