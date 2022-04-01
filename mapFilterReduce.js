function square(num){
    return num*num;
};

function sum(item ,sum){
  return sum= sum+item;
}

let arr = [1,2,3,4];
console.log("Map ",arr.map(square));
console.log("Reduce",arr.reduce(sum,0));
console.log("Filter",arr.filter((n)=> {return n%2==0}));

