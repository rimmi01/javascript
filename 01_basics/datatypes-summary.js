// Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
// console.log(typeof score); //number

const scoreValue = 100.3
// console.log(typeof scoreValue);   // number

const isLoggedIn = false
// console.log(typeof isLoggedIn);// boolean

const outsideTemp = null
// console.log(typeof outsideTemp);   // object

let userEmail;     // undefined
// console.log(typeof userEmail);   // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof id, typeof anotherId);   // symbol symbol

// console.log(id === anotherId);

const bigNumber = 32425465465439735943759n
// console.log(typeof bigNumber);    // bigint


// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3




// *******************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

// excalidraw for freehand drawings, and flowcharts

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);