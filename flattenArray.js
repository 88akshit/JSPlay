//Flatten Array
let arr = [[1,2],3,[2,4,5]];
console.log("before "+arr);
let flatten = (ar)=>{

     let someArray = ar.reduce((ac,item)=>{
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
console.log(flatten(arr));


// Merge intervals
const merge = intervals => {
  if (intervals.length < 2) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals)
  
  const result = [];
  let previous = intervals[0];
  
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  
  result.push(previous);
  
  return result;
};

console.log(merge([[2,6],[8,10],[15,18],[1,3]]))

// let max = Number.MAX_VALUE;
// console.log(max);


//SubString

let subString = function SubString(){
  let s1 = "jackandjil";
  let s2 = "jil";
  let found = false;
  s1  = s1.split("");
  s2  = s2.split("");
  console.log(s1);
  console.log(s2);
  for(let ch in s1){
    console.log("matching "+s1[ch]+" "+s2[0])
    if(s1[ch]===s2[0]){
      console.log("going")
      for(let c1 in s2){
         console.log("matching sub "+s2[c1] +" "+s1[ch]+" ")
          if(s1[ch]!=s2[c1]){
            break;
          }else if(c1==s2.length-1){
            found = true;
            console.log("substring there")
            break;
          }
          ch++
      }
        
  
    }
    if(found){
      break;
    }
}
console.log(s2.length-1);

}
//subString();

//Subsequences TC O(2^n)
// let str = [1,2,3];
// let index = 0;
// let newString ="";
// let subSequencesList = []
// function subSequences(str,i,newString){
//   if(i==str.length){
//     subSequencesList.push(newString);
//     return
//   }
//   subSequences(str,i+1,newString+str[i]);
//   subSequences(str,i+1,newString);
// }

// subSequences(str,index,newString);
// console.log(subSequencesList);


// permutation TC (O(n*n!))
let str = "abc";
let left = 0;
let right = str.length-1;
let comb = []
function permut(str,left,right){
  if(left==right){
      console.log(str)
      comb.push(str)
  }else{
    for( let i=left;i<=right;i++){
             //swap a with a , a with b , a with c
        str = swap(str,left,i);
        permut(str,left+1,right);
        str = swap(str,i,left);
      }
  }
  
}

function swap(str,left,right){
  let temp;
  str = str.split('');
  temp = str[left];
  str[left] = str[right]
  str[right]= temp
  str = str.join('')
  return str;
  
}

permut(str,left,right);
console.log(comb)
let se = new Set(comb);
console.log(se)


let arr1 = [2,3,4,5,6]
let res = []
// Compare first and second number iteratively
for(let i =0;i<arr1.length-1;i++){
      res.push(arr1[i]+arr1[i+1])
}

//console.log(res);

// Sliding Window
function maxSumofK(arr, k) {
let max = 0;
let sum = 0;
//find initial sum of first k elements
for(let n = 0; n <  k ; n++) {
    sum +=  arr2[n];      
}
//iterate the array once and increment the right edge
 for(let i = k; i < arr.length; i++) {    
        sum += arr2[i] - arr2[i-k];
        //compare if sum is more than max, if yes then replace max with new sum value
           if(sum > max) {
               max = sum;
           }
        }
    return max;
}
 
let arr2 = [1, 4, 2, 10, 2, 3, 1, 0, 20 ];
//console.log(maxSumofK(arr2, 4))


let castle = "Disney";
let sp = castle.split("");
console.log(castle[0].toLowerCase());
console.log(sp)
let rev = castle.split("").reverse().join("");
console.log(rev);



let binarySearch = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
  
// Driver code
let arr3 = [1, 3, 5, 7, 8, 9];
let x = 15;

// arr3.forEach(el=>{
  
//   await console.log(1); // cant use await and break;
// })
//console.log(binarySearch(arr3,x));


// Reverse a linked List

//  let current = head
//  let previous = null
//  while(current!=null){
//       let temp = current.next;
//       current.next = previous;
//       previous = current
//       current = temp;
// }

// return previous;

