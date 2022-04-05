let str1 = "ABACD";
let str2 = "BACDA";

console.log(str1.length);

str1 = str1.split("");
console.log(str1);

let char = str1.shift();
console.log(char);
console.log(str1);
str1.push(char);
console.log(str1);

console.log(str1.join(""))

if(str1.join("") == str2){
  console.log("same")
}

