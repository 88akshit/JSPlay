function square(num){
    console.log("Square",num*num);
    return num*num;
};

square(6);

var promise = new Promise((resolve, reject)=> {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
    
promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occured');
    });

// const observable = new Observable((observer) => {
//     observer.next("dog");
//     observer.next("cat");
// })
// observable.subscribe(result => {
//     console.log(result);
// });

// Destructing
const [first, second] = ["cat","dog"];
console.log(first, second);

let binary = Number(1041).toString(2);
let count = 0;
let max = 0;
for (let i in binary){
  if(binary[i]==0){
    count++;
  }
  else{ 
    max = Math.max(count,max);
    count = 0;
  }
}
console.log("max "+max);