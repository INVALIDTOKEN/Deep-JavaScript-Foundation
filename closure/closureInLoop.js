// DO NOT RUN THE COMPLETE CODE BUT YOU CAN RUN THE CODE SNIPPITS SEPARATELY

let array = [];

// 1. The problem with this function is that the variable i is not block scoped as it appears, it is actually function scoped. 
// 2. Futhermore the parent scope of logi function is the scope of function closureProblem.
// 3. There is only 1 execution context which is of the function closureProblem, the for loop just runs the block 2 times without making any execution context because there is no block scope. 
// 4. The logi function has a closure over a single value of i
function closureProblem(){
  array = [];
  for(var i = 0; i < 2; i++){
    function logi(){
      console.log(i);
    }
    array.push(logi);
  }
}

function logArray(){
  array.forEach((func)=>{
    func();
  });
}

closureProblem();
logArray();  // 2  2


// [Sol - 1] 

function sol1(){
  array = [];
  function pushFunction(j){

    function logi(){
      console.log(j);
    }

    array.push(logi);

  }

  for(var i = 0; i < 2; i++){
    pushFunction(i);
  }

}

// [Sol - 2]

function sol2(){
  array = [];
  for(var i = 0; i < 2; i++){
    (function IIFI(j){

      function logi(){
        console.log(j);
      }

      array.push(logi);

    })(i);
  }
}

// [Sol - 3]

function sol2(){
  array = [];

  for(var i = 0; i < 2; i++){
    let j = i;
    function logi(){
      console.log(j);
    }

    array.push(logi);
  }
}

// 1. The solution to the problem is to make execution context per iteration, doing that will create a different i in each execution context. 
// 2. Now the reference of the function is passed as an argument to the push method of array in two different execution context, so the function logi has a closure over two different "i" in two different execution context. 
































