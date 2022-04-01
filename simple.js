let obj = {a:10,b:11}
console.log("Simple javascript object "+JSON.stringify(obj));

for(o in obj){
  console.log(o)
  console.log(obj[o]);
}
// Hoisting
// age variable  is hoisted here


console.log("Age "+age); // undefined
age = 20;
var age = 10;
console.log(typeof age);
console.log("Age "+age);

let starts = [1,3,8,2,5,9]
starts.forEach(r=> {
  console.log(r);
})
console.log("Splice Before "+starts);
starts.splice(4,1)
console.log("Splice After "+starts);

// console.log("Slice"+starts.slice(1));
// console.log("Slice"+starts.slice(3));
// console.log("Slice After "+starts);

 //console.log(typeof square);
// console.log(square(5)); // reference error
// let result = square(5);

// map functionality example
// let result = [1,2,3]
// let finalResult = result.map(x=>x*2);
// console.log(finalResult);

//function expressions are not hoisted
// let square = (num)=>{
//     return num*num;
// }

// functions are hoisted
// function square(num){
//     return num*num;
// };

// var is hoisted
// console.log(a); // undefined
// console.log(b); //  Cannot access 'b' before initialization
// var a = 10;
// let b = 12;

// Scope Chaining
var na = "Ayush";
var age = 13
function getName(){
  console.log(na);
  function getAge(){
    console.log(age);
  }
  getAge();
}
getName();

//Block Scope
// if(true){
//   var bike = 'RE';
//   let anotherBike = 'Honda';
// }
// console.log(bike);
// console.log(anotherBike); //not accessible out the block

// This functionality 
const parentM = {
  mom_name: "Samantha Quinn",
  mother: () => {
    console.log(this)
    return `${this.mom_name} is my mother.`;
  },
};
console.log(parentM.mother());

const parentW = {
    mom_name: "Samantha Quinn",
    mother: function () {
        return `${this.mom_name} is my mother`;
    },
};
console.log(parentW.mother());

// var score = 30;
// function getScore(){
//   console.log(score,this);
// }
// getScore();


var myObj = {};
Object.assign(myObj,{"name":"akshit","book":"ac"},{"country":"ind","book":"abc"});
console.log(myObj);

// // Spread Operator
// var a = ['a','b','c'];
// var b = ['e']
// var a = [...a,...b];
// console.log(a)
// b.push('s');
// for (let x in a){
// console.log(a[x])
// }

// Prototype Chaining
var parent = {
  "name":'d',
  "class":10
}
var child ={
  __proto__:parent,
  "subject":"science"
}
console.log(child.name)

//square(4);



//Flatten Array
let arr = [[1,2],3,[2,4,5]];

let flatten = (ar)=>{

     someArray = ar.reduce((ac,item)=>{
      if(Array.isArray(item)){
          ac= ac.concat(flatten(item));
      }
      else{
          //ac.push(item);
          ac = [...ac,item];
        }
      return ac;
    },[]);
    return someArray;

    //return arr.flat();
};
//console.log(flatten(arr));
console.log("Flatten "+Array.prototype.flat(arr))
console.log("Flatten "+arr)

// Sum using reduce
const numbers = [2, 4, 6];
const sum = numbers.reduce((sum, number)=> {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);
sum; // 12


//Map in jS
let arr2 = [1 ,3 ,5, 2, 4 ,6 ,7];
let ms = new Map();
let count2 = 1;
let swapC = 0;
for(let c in arr2){
    ms.set(count2,arr2[c]);
    count2++;
}
console.log("maps in js")
console.log(ms)

// let index = 1
// for(let c of ms.keys()){
//     console.log(index+" "+ms.get(index))
//     if(index!=ms.get(index)){
//       let sf = index;
//       let ss = ms.get(index)
//       swap(sf,ss);
//       console.log(ms)
//     }else{
//       index++;
//     }
// }
// console.log(swapC)

// function swap(sf ,ss){
//   let temp = ms.get(sf);
//   console.log("swap "+sf+" "+ss)
//   ms.set(sf,ms.get(ss))
//   ms.set(ss,temp);
//   swapC ++;
// };

// console.log(ms)

// Set
// let unique = new Set();
// unique.add('34');
// unique.add('1');
// unique.add('1');
// unique.add('23');
// unique.forEach(x=>{
//   console.log(x);
// })
// console.log(unique.has(1));
// console.log(Array.from(unique).sort((a, b)=>{return a-b}));

// for (const value of unique) {
//   console.log(value);
// }

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.descendants = [];
//   }
// }

// const abe = new TreeNode('Abe');
// const homer = new TreeNode('Homer');
// const bart = new TreeNode('Bart');
// const lisa = new TreeNode('Lisa');
// const maggie = new TreeNode('Maggie');

// // associate root with is descendants
// abe.descendants.push(homer);
// homer.descendants.push(bart, lisa, maggie);



//Interview question
// let number;
// for(let i = 0;i<5;i++){
//   //number = i;
//   setTimeout(function(){
//     console.log(i)
//   },1000);
// }

// let an = ()=>{
//   console.log("an")
//   var abc = 10+'10';
//   console.log(abc)
// }
// an();




let num = [1,4,3,2,1]

let fil = new Set(num)
console.log(fil);
console.log(Array.from(fil).sort())

let count = num.filter(num=> num==1);
console.log(count.length);

// for(let c in num){
//   console.log(num[c])
// }


const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
let p1 = {
    ...person
};
person.lastName = "ken"
console.log(person)
console.log(p1)

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));



