
const memozie = (callBack)=>{
  const cache = {}

  return (...args)=>{
    console.log("Arguments"+args)
    let stringified = JSON.stringify(args);
    console.log(stringified);
    console.log("Cache"+JSON.stringify(cache));
    const result = cache[stringified] || callBack(...args)
    cache[stringified] = result;
    return result;
    
  }
}
const add = (a,b)=>a+b;
//console.log(add(1,2));
const memo = memozie(add);
console.log(memo(3,4));
console.log(memo(3,4));


let numArray = [1,2,3,4]
console.log("Maximum "+ Math.max(...numArray))
console.log("Maximum "+ Math.max.apply(null,numArray))