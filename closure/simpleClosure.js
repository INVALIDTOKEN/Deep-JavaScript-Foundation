let array = [];

function pushDetails({ name = "Sahil", sirname = "kapoor", age = 20} = {}){
  let details = { name, sirname, age };
  function logDetails(){
    console.log(details);
  }
  array.push(logDetails);
}

pushDetails();  // Execution context 1
pushDetails({ name : "Aman", sirname : "Arora", age : 20 });  // Execution context 2

console.log(array[0]());  // Function is executed in execution context 1 
console.log(array[1]());  // Function is executed in execution context 2
































