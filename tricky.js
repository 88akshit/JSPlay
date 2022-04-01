console.log("here in tricky")

//print();


let sampleMap = new Map();

sampleMap.set("first",1);
sampleMap.set("second",1);
sampleMap.set("third",1);
console.log(sampleMap);
sampleMap.delete("first");
console.log(sampleMap);
sampleMap.set("fourth",1);
console.log(sampleMap);
let first_key =sampleMap.keys().next().value;
console.log(first_key);

console.log('A'.charCodeAt(0)-'B'.charCodeAt(0));

let mappings = {1:2,2:7,'car':23}
if ('car' in mappings){
  console.log("Present");
}
else{
   console.log("Not Present");
}


const list = [
  { color: 'white', size: 'XXL' ,count:23},
  { color: 'red', size: 'XL' ,count:2},
  { color: 'black', size: 'M',count :4 }
]
console.log(list)
list.sort((a, b) => (a.color > b.color) ? 1 : -1)
console.log(list)

list.sort((a, b) => (a.count > b.count) ? 1 : -1)
console.log(list)


function print(){

  for(var i = 1;i<=5;i++){
    setTimeout(()=>{
      // Here for each block i is shared and last value of i is 6 
      console.log("Value of i "+i);
    },2000);
  }
  console.log("Printing this with var");

  for(let i = 1;i<=5;i++){
    setTimeout(()=>{
      // Here for each block i is new variable not shared 
      console.log("Value of i "+i);
    },2000); 
  }
  console.log("Printing this with let");


  for(var i = 1;i<=5;i++){
    function close(i){
      setTimeout(()=>{
        // Here for each block i is new variable not shared 
        console.log("Value of i "+i);
      },2000);
    }
    close(i);
    console.log("Printing this with var");
  }
}


function outer(str){

  function inner(){
    console.log("value of a is "+a+str);
  }
  var a = 10; // dont matter if it is let or var
  return inner
}

outer("hello")()




let fullName = "John oliver";
let obj={
  fullName :"Colin robert",
  prop:{
    fullName:"Steave karl",
    getFullName: function(){
      return this.fullName;
    }
  },
  getMyName:function(){
    return this.fullName;
  },
  getFirstName: function(){
  return this.fullName.split(" ")[0]
  },
  getLastName: (context)=>{
  console.log(context)
  return fullName.split(" ")[0]
  }
}

console.log(obj.prop.getFullName());
console.log(obj.getMyName());
console.log(obj.getFirstName());
// let name = this;
// console.log(name)
console.log(obj.getLastName(fullName));

console.log([1, 3, 4, 2].sort());

const food = { beef: '🥩', bacon: '🥓' , chef:{name:"akshit"} };


// "Spread"
let clone = { ...food }

// "Object.assign"
let newClone = Object.assign({}, food)

// "JSON"
let jsonCLone = JSON.parse(JSON.stringify(food))

food.beef = "tasty";
food.chef.name = "Ayush";
console.log(food)
console.log(clone);
console.log(newClone)
console.log(jsonCLone)


