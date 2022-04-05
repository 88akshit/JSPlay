//import { square } from "./promise.js";

//Import square function and use it 

//console.log(square(5));
// let result = square(5);
// let finalResult = result.map(x=>x*2);
// console.log(finalResult);

// var square = (num)=>{
//     return num*num;
// }

//Hoisting
console.log(a);
var a = 10;

// Using Assign to new Object
// var myObj = {};
// Object.assign(myObj,{"name":"akshit","book":"abc"},{"country":"ind","book":"abc"});
// console.log(myObj);

// var a = ['a','b','c'];
// var b = ['e']
// var a = [...a,...b];
// console.log(a)
// b.push('s');
// for (let x in a){
// console.log(a[x])
// }

// Prototype
var parent = {
    "name":'d',
    "class":10
  }
var child ={
    __proto__:parent,
    "subject":"science"
}
//   console.log(child.name);
 // square(5);

// Destructing
 const {name:firsName,subject} = child;
 console.log(firsName+" "+subject);

// Usage of Set
//  var set2 = new Set("fooooooood");
//  set2.forEach((val)=>{
//     console.log(val)
//  });

// Block Scope
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
//     //y();
// }
// var result = x();
// result();
// console.log(a) a wont be print as its not available

class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  push(element) {
    // push element into the items
    this.items.push(element);
  }
}

// var stacks = new Stack();
// stacks.push(10);
// stacks.push(20);
// stacks.push(30);

// function stack() {
//   this.data,
//     (this.push = function (pushData) {
//       this.data.push(pushData);
//     }),
//     (this.pop = function () {
//       return this.data.pop();
//     });
// }

// var newStackFirst = new stack();

// newStackFirst.push("rob");
var stack = {
    "data" : [],
    "push" : function(pushData){
        this.data.push(pushData)
    },
    "pop" : function(){
        return this.data.pop()
    }
}
console.log(stack);

console.log(stack);
console.log(stack.push);
stack.push("rob");
console.log(stack);
stack.push("sam");
console.log(stack);
stack.pop();

console.log(stack);

// var queue = {
//     "data" : [],
//     "enqueue": function(pushData){
//             this.data.push(pushData);
//     } ,
//     "dequeue":function(){
//               let newData = [];
//               for (let d in this.data){

//                   if(d!=='0'){
//                      // console.log("pushing")
//                       newData.push(this.data[d]);
//                   }
//                   //console.log(newData);
//               }
//               this.data = newData;
//              // console.log("after deque "+this.data)
//     }
// }
// console.log("queue");
// console.log(queue);
// queue.enqueue("kil");
// queue.enqueue("aki");
// console.log(queue);
// queue.dequeue();
// console.log(queue);


let poke = function(name, color){
  this.name = name;
  this.color = color;
}
let pika = new poke("pika","yellow");
console.log(pika);
pika.power = "7";
poke.prototype.speak = function(){
  console.log("pika pika");
}
console.log(pika);
console.log("as")
console.log(poke.prototype.speak);
console.log(poke.prototype.speak());
console.log(pika.__proto__===poke.prototype)





// const Logger = require('./logger');
// const os = require('os');
// const logger = new Logger();
// const fetch = require('node-fetch');

// logger.on('dologin', (params)=>{
//     let freeMemory = os.freemem();
//     console.log(`Free Memory : ${freeMemory}`);
//     console.log("Login done successfully "+params.name);
// });


// // var http = require('http');
// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/plain'});
// //   res.write('Hello World!');
// //   res.end();
// // }).listen(8080);




// let circle ={
//     "raidus":5,
//     area:()=>{
//         console.log("area"+3.17*raidus)
//     }
// }

// // let sim = circle;
// // let another = Object.assign({},circle);
// // let an = {...circle};
// // circle.raidus =9;
// // console.log(another)
// // console.log(sim);
// // console.log(an);




// // let a = {"a":1};
// // let c = {"kj":90};
// // let b = {...a,...c};
// // a.b = 2;
// // a["s"] = 3;
// // delete b.a;
// // delete b.kj;
// // console.log(b&&Object.keys(b).length>0?true:false);

// //logger.login(); 


// // var str = "hello";
// // var re = str.split('').reverse().join('');
// // console.log(re);

// let car2 = (model)=>{
//     console.log(model);
//     //this refers to global context and in global there is no this.model
//     console.log(this.model)
   
//     car2.model = model;
// }
// //car2.model = "kia";
// car2("kia");
// console.log(car2.model);
// // let car = function(model){
// //     this.model = model;
// // }
// // console.log(car);
// // car.prototype.getModel = function(){
// //     return this.model;
// // }
// // let toyato = new car("toyato");
// // console.log(toyato);


// let number = [9,1,6,2,2];
// let result = number.reduce((acc,cur)=>{
//     if(acc<cur){
//         acc = cur;
//     }
//     return acc;
//     // Sum 
//     // acc = acc+cur;
//     // return acc;
// },0);

// let filter = number.filter((num)=>{
//         return  num >5;
// });
// console.log("result "+result +" filter "+filter);

// //console.log(number.sort());

// // let setNumbers = new Set(number);
// // setNumbers = [...setNumbers]
// // console.log(setNumbers);



// // class Camera {
// //     constructor(price){
// //       this.price = price;
// //     }
    

// // }

// //shift()
// let a = [[1], [2], [3]];
// let b = [...a]
// console.log(b)
// console.log(a.shift().shift());
// console.log(a)
// console.log(b)

// //Maps in Javascript
// let student = new Map();
// student.set("akshit","IT");
// student.set("ram","CS");
// for(let [key,value] of student){
//     console.log(key+value);
// }

// //example code
// const DropElement = (array, num = 1) => array.slice(num);
// console.log(DropElement([2,45,6,7],2)) //[6, 7]
// console.log(DropElement([2,45,6,7],1)) //[45, 6, 7]

// function Reverse(str){
//     return [...str].reverse().join('');
//     }
//     console.log(Reverse("data")) //atad
//     console.log(Reverse("Code")) //edoC

// var n1 = 500
// console.log(n1.toString(2)) // 111110100
// var n2 = 4
// console.log(n2.toString(2)) // 100
// var n3 = 5004
// console.log(n3.toString(2)) // 1001110001100


// //Old Method
// for(var i = 0; i<5; i++)
// {
//   console.log("😃") // 😃😃😃😃😃
// }
// // Best Method
// console.log("😃".repeat(5)) //😃😃😃😃😃


// //Code Example
// function isJSON(str)
// {
//   try
//   {
//       JSON.parse(str)
//   }
//   catch
//   {
//       return false
//   }
// return true
// }
// var str = "JavaScript"
// console.log(isJSON(str)) //false

// String Replace all 
// var str = "Python is a Programming Language, Python is a top programming language and favourite of every developer"
// str = str.replaceAll("Python", "JavaScript")
// console.log(str) // JavaScript is a Programming Language, JavaScript 5is a top programming language and favourite of every developer

// //Code Example
// function ArrayDiff(a, b){
//     const setX = new Set(a)
//     const setY = new Set(b)
//   return [
//       ...a.filter(x=>!setY.has(x)),
//       ...b.filter(x=>!setX.has(x))
//     ]
//   }
//     const Array1 = [1, 2, 3];
//     const Array2 = [1, 2, 3, 4, 5];
//   console.log(ArrayDiff(Array1, Array2)) // [4, 5]


// // var cl = console.log.bind(document)
// // cl(345) 
// // cl("JAVASCRIPT")
// // cl("PROGRAMMING") 


// //example code
function DeepFlat(array)
{
  return [].concat(...array.map(value=>  (Array.isArray(value) ? DeepFlat(value) : value)));
}
console.log(DeepFlat([1,[2,[4,6,6,[9]],0,],1])) // [1, 2, 4, 6, 6, 9, 0, 1]

// //code example
const LastElement = array => array[array.length - 1];
console.log(LastElement([2,3,4])) // 4
console.log(LastElement([2,3,4,5])) // 5
console.log(LastElement([2,3])) // 3

// Modifying array with length property
var array1 = [1, 2, 3, 4, 5, 6]
var array2 = ["Python", "JavaScript", "C++", "Dart"]
array1.length=3
array2.length=1
console.log(array1) // [1, 2, 3]
console.log(array2) // ["Python"]

// With no arguments
function add() // no paramter is defined
{
  var sum = 0
  for(var i=0; i < arguments.length; i++)
  {
      sum=sum + arguments[i]
 
  }
  console.log("Total Sum : ", sum) // Total Sum : 9
}
// calling function
add(1, 3, 5)


// // synatax :  splice(array index, number of value to delete )
var array = [1, 2, 3, 4, 5, 6]
//delete method
delete array[4]
//splice method
array.splice(4,1) 
console.log(array) // [1, 2, 3, 4, 6]

//Checking if the object contains that key 
var a = 4;
var b = 5;
var list = {1:7, 3:9, 4:0, 2:9}
console.log(a in list) //true
console.log(b in list) // false



// String split
let total = 20.47
let str = total.toString().split('.');
console.log(str[0]);
console.log(str[1]);

// String split
let string = "javascript love";
let rev = string.split('').reverse().join('')
console.log(rev);


//Promise Any

function delay(){
    return Math.floor(Math.random() *1000);
}

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("p1"),delay);
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("p2"),delay);
})


// async function tryOut(){
//     try{
//         const first = await Promise.any([p1,p2])
//         console.log(first);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// tryOut();


// Spread operator
let fruits = ['qpple','grapes','oranges'];
let newFruits = [];
newFruits.push(...fruits,...array);
console.log(newFruits);

// IIFE style of writing code;
((params)=>{
  console.log("iife "+params);
})("Params");


let queue = [[0,0]]
queue.push(null)
queue.push([9,9])
console.log(queue);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue);
