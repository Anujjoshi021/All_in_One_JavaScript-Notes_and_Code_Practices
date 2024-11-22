console.log("kaise ho");

// we can run js file directly in our IDE's terminal via node command.
// syntax: node <filename>.js
// to run this command you have to download node.js in your IDE.

// Primitive types: string,boolean,number, undefined,null.
// variable:
// you can use let or var both for declaring a variable
let a = 5;
console.log(a);

// if i declare any variable through var then it can be globally used but if i use let in a block then it cannot be used outside of that block.
{   
    // let b=2;
    var b=2;
}
console.log(b);

// example of undefine
let c;
console.log(c);

// you can't redeclare a variable through let but you can using var. Redefine is possible in both the cases.
var d = 3;
var d = 5;

// you can't redefine a const variable
const e =4;
// e = 9;

// Dynamic typing : it means in a variable we can assign any type of data type.
let f = 3;
    f = 'anuj';
    console.log(f);

// objects
let person = {
    fname : 'anuj',
    age : 12
};
// two ways to extract data from a object for now
console.log(person.age);
console.log(person['fname']);

// arrays
let array = [1,2,3,4];
console.log(array[1]);
console.log(array[4]);
// we can add element also or can change the value of an element
array[5] = 5;
array[1] = 44;

// calculate power
console.log(2**10);

// loose(==) and strict(===) equality
let z = 1;
let r = '1';
console.log(z==r); // it checks only values
console.log(z===r); // it checks both values and data type

// Ternary operator
//     (condition)? true : false;
let age = 19;
let statuss = (age>=18)?'i can vote':'i cannot vote';
console.log(statuss); 

// Truthy and falsey values
// name,number and true etc are always given prirority over false
console.log(false || 'anuj')
console.log(false || 1)

// if there are two true then it will stop at 1st and will not further check anything.
console.log(false || 'anuj' || 1)

 function func(){
    console.log("hi")
}
 func();


// object creation
 let object = {
    length: 2,
    width: 3,

    draw: function(){
        console.log("hello");
    }
 };
object.draw();

//function factory

function createObject(){
    return object = {
        length: 3,
        width: 2,

        func1: function(){
            console.log("hello my name is anuj");
        }
    };
}

let variable1 = createObject();
console.log(variable1.length)

function createObject1(len,bre){
    return object = {
        length: len, // you can use len directly
        width: bre,  // you can use bre directly

        func1: function(){
            console.log("hello my name is anuj");
        }
    };
}

let variable2 = createObject1(2,4);
console.log(variable2.length)
let variable3 = createObject1(7,8);
console.log(variable3.length)

//Constructor function : used for initialization
// "this" indicates that current object 
function Rectangle(len, wid) {
    this.length = len,
    this.width = wid,
    this.draw = function(){
        console.log("drawing");
    }
}
// object creation using constructor function
//new is used for creating empty objects.
//RectangleObject is an object of the Rectangle constructor function
let RectangleObject = new Rectangle(3,5);

// Dynamic nature of an object
RectangleObject.color = 'yellow';
console.log(RectangleObject);
// we can delete any property too
delete RectangleObject.color;
console.log(RectangleObject)

//Functions are also called Objects
//Types in JS: 
//Reference type: Objects,function,Arrays
//in this, a1 is passing it's address to b1.(reference example)
let a1 = {
    value: 10,
};
let b1 = a1;
a1.value++;
console.log(a1.value);
console.log(b1.value);

//premitive type = boolean,number,string,null etc 
//in this, a2 passing its copy to b2.(premitive example)
let a2 = 10;
let b2 = a2;
a2++;
console.log(a2);
console.log(b2);


//function example: pass by premitive value
let a3 = 11;
function inc(a3){
    a3++;
}
//if we pass any premitive value in a function then it will only pass it's copy to the function
inc(a3);
console.log(a3);


//function example: pass by reference
let a4 = {
    value: 10,
};
function inc1(a4){
    a4.value++;
}
//here we are passing an object which is used as a reference
inc1(a4);
console.log(a4.value);  


//Iterating through objects:
//For-in loop
let rectangle1 = {
    len: 1,
    bre: 2,
};
//key is for keys and rectangle1[key] is for values
for(let key in rectangle1){
    console.log(key, rectangle1[key])
}

//For-of loop: It is used for iterables like: arrays,map etc. it does not use for objects because they are not iterables but still if you wanna use this on object then there is a hack:
//it will print both
for(let key of Object.entries(rectangle1)){
    console.log(key)
}
// it will print keys
for(let key of Object.keys(rectangle1)){
    console.log(key);
}


//if i want to find out that does a property in an object exist or not
if('color' in rectangle1){
    console.log("present");
} 
else{
    console.log("Absent");
}

//Object cloning
//1. By Iteration
let src = {
    value: 10,
};
//empty object
let inc2 = {};
//cloning src values into the inc2 object
for(let key in src){
    inc2[key] = src[key];
}
console.log(inc2);

//By assign
//here we are cloning src values into the empty object des.
let des = Object.assign({}, src);
console.log(des.value);

//By spread (cloning)
let des1 = {...src};
console.log(des1.value)


//Math: it is built-in-object in javascript which is used for mathematical constants.

console.log(Math.random());
console.log(Math.abs(3.98));
console.log(Math.round(1.2));
console.log(Math.max(1,2,3,4));
//use Math.mdn for more properties

// String operations or for more function search MDN
// String has two types in js:  1. premitive    2. object type
//1. premitive
let name1 = ' Anuj is a good boy ';
// if we use name1.   then it will react as an object string
//  2. object type
let name2 = new String('joshi');
console.log(name1,name2);

console.log(name1.split(' '));
console.log(name2.endsWith('aa'));
console.log(name2.length);
console.log(name1.trim()); // remove all the spaces from start and end

// Escape sequences : there are many ES search it on MDN
let name3 = ' Anuj is \n a good boy ';
console.log(name3);

// Temporal literal(` `): Used for writing exact same thing as we want to see in Console.
let name4 = 
`hi my
name is 
anuj`;
console.log(name4);

// Date and time: MDN
let date1 = new Date(); // for current date
console.log(date1)
let date2 = new Date(2002,10,29,23);
console.log(date2);

// we can use setter and getter
date2.setFullYear(2024);
console.log(date2);

//Arrays: in js, Array is an object type and we can store multiple data type elements in one array.
let array1 = [1,2,3,4,5];
console.log(array1);
// for adding any element at the end of the array
array1.push(8);
// for adding any element at the starting of the array
array1.unshift(9);
// for adding any element at the middle of an array
array1.splice(2,0,'a'); // here 2 means at which index we want to add element, 0 means how many elements should be deleted and then we can add any element we want to.
console.log(array1)

// Searching 
console.log(array1.indexOf(3));

// if we want to find out an number exist in array or not
//1st method
if(array1.indexOf(4) != -1)
    console.log("present");
// 2nd method
console.log(array1.includes(4));
//3rd method
console.log(array1.indexOf(3, 3)); // here first 3 means which element we want to find out and 2nd 3 means from which index we want to start our search.

//above searching is held on premitive type array now if we want to use these methods on object/reference then they will produce wrong answers because in objects, addresses are different      for Example: we made an array containing objects as an elements.

let courses = [
    {no:1, name:'anuj'},
    {no:2, name:'aman'},
]
console.log(courses.includes({no:1, name:'anuj'})); //it is showing false because both addresses are different.

// for this, we use CALLBACK function.it means it will call a function which is present inside a function and it will return an object. here function(course) is a callback func.
//we can't use indexof or include on object thus we use find.
let course = courses.find(function(course){
    return course.name === 'anuj';
});
console.log(course);

//Arrow function:
//if we have only one parameter only then we can remove brackets too().
let course1 = courses.find((course) => course.name === 'aman');
console.log(course1);

//Removing elements
let array2 = [1,2,3,4,5,6,7];
array2.pop();
array2.shift();
array2.splice(3,1);
console.log(array2);

//Make Array Empty
//here we are passing values not address(objects)
numbers = [1,2,3,4,5]
numbers1 = numbers;

numbers = []; //don't use this method
//Use these two methods:
numbers.length = 0;
numbers.splice(0,numbers.length)

console.log(numbers1)

// combine two arrays
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

let arr = [1,2,3,4,5,6,7,8,9]
let slicedarr = arr.slice(2,4);
console.log(slicedarr);
//console.log(arr.slice(2)); 
//console.log(arr.slice());

//spread operator revise yourself if needed

