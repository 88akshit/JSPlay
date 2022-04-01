function Phone(){
  this.modelNumber = ""
  this.getModelNumber = function(){
    return this.modelNumber;
  }
}

function Samsung(){
  this.modelNumber = "SDE";
  this.getNewFeature = function(){
    console.log("New feature");
  }
}

Samsung.prototype = new Phone();
let obj = new Samsung();

console.log("Proto Inheri "+Samsung.prototype.getModelNumber());
console.log("Proto Inheri "+obj.getModelNumber());

let students = ["roy","peter"]

Array.prototype.printStudentList = function (){
  console.log(students);
}

students.printStudentList();


const sample = {
  "bat":"SS"
}
Object.freeze(sample); // const does not work on objects
console.log(sample)
sample.bat = "MRF";
console.log(sample)


