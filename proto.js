
var house = {color: "brown",
            size: "huge",
            expensive: true}

house.prototype // undefined
house.__proto__ // {constructor: ƒ, __defineGetter__: ƒ, __defineSet... (__pro

// Note: 'house' is an object that has a __proto__ object, but does not have a prototype

function add (a,b) {
return a + b
}

add.prototype // {constructor: ƒ}
add.__proto__ // ƒ () { [native code] }

// Note: 'add' is a function that has a __proto__ and a prototype property. Try this code yourself and you'll see that the prorotype property is referenced in the __proto__ object within the constructor function



var cat =  {breed: "Russian Blue"} // cat.__proto__ lists all its methods and cat.prototype returns undefined as expected
var dog=  {age: 7} // same for the dog variable
// Now, let's see how we can get the cat object to access the properties of the dog object

Object.setPrototypeOf(cat, dog) // allows the cat object to access the properties of the dog object

// Even though we've used 'setPrototypeOf', the cat object still doesn't have a prototype property. It only has a reference to the dog object via __proto__:

cat.hasOwnProperty('prototype') // returns false

cat.age // returns 7


