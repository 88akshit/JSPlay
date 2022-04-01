let name = {
  firstname: "Akshit",
  lastname: "Kumar"
}

let printName = function (hometown, state, country) {
  console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "Kochi", "Kerala");
printMyName( "India");

Function.prototype.mybind = function(...args){
  console.log(args)
  let obj = this, // fn printName
  params = args.slice(1); // get  "kochi", "kerala"
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName2 = printName.mybind(name, "kochi", "kerala");
printMyName2( "India");


// use fn prototype to attach the myBind
// return the fn so that we can invoke it
// store the this in obj
// use obj to call printName
// use spread operator to get args
// use slice to extract the params 
// then use apply
// if we want to pass args in printMyName2 then add args 2 in return fn and combine using spread