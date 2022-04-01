// currying using closure
function doAddition(x){
  return function (y){
    return x+y;
  }
}
var add5 = doAddition(6);
console.log("Currying "+add5(4));

console.log(doAddition(6)(5));


//Currying
let currying = (a) =>(b)=>(c)=>{ return a+b+c}
let standard = currying(9)(1);
let oneDefault = currying(9)
console.log("Sum two "+standard(5));
console.log("Sum "+currying(5)(9)(1));
console.log("Sum one  "+oneDefault(5)(1));