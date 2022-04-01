

//Closure

function init(){
  var name = "akshit";
  function sayMyName(){
      console.log("Closure Name ",name);
  }
  return sayMyName;

}

var start = init();
start();


// Closure with counter
let counter = function (){
  let k = 0;
  return ()=>k++;
}();

console.log(counter());
console.log(counter());
console.log(counter());



let arr = []
function sample(num){

  return ()=>"n = "+num;
}

for(var i =0;i<=5;i++){

  arr[i] = sample(i);
}

for(var i =0;i<=5;i++){

  arr[i] = function (){
    return "n ="+i;
  }
}

function createClosureArray(){

  let brr = []
    for(var i =0;i<=5;i++){
    
      brr[i] = function (){
        return "n ="+i;
      }
    }

  return brr
  
}

let brr = createClosureArray()
for(i in brr){
  console.log("Closure gone wrong "+brr[i]())
}


for(i in arr){
  console.log(arr[i]())
}


function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14