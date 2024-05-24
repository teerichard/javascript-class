var i = 1;
while (i<=5){
    console.log (i)
    i++;
}
console.log(i) 
 //functions
 //tenery
 const number = -10;
 const result  = number >=0 ? 'positive' : 'negative';
 console.log(result)

 function leapyear(year){
    return (year % 4 ==0 && year % 100 != 0)|| year % 400   == 0;
 }
console.log (leapyear(2024));

const temperature1 = 25;
constweather = temperature1>30 ? 'hot' : temperature1 > 20 ? 'warm : cold' :
console.log (weather)

//class task
//1. calculate the area of a rectangle
//2. check if a number is even or odd
//3. calculate the area of a circle
//4. calculate the parameters of a square
//5. calculate the volume of a sphere
//6. calculate the perimeter of a triangle
//hint: find the formular for calculating each of the above shapes

//1,
function area (l,w) {
    return l*w;
}
console.log (area(5,2));

//2
const number1 = 5;
if ( number % 2 == 0){
    console.log (number + 'is even');
} else
{console.log (number + " is odd" );

}
//3
function circle (pi, r) {
    return pi*r**2;
}
console.log (circle(3.152,2));

//4
function parameterssquare(r,i,c,h)
{
    return r+i+c+h;
}
console.log (2+3+4+5);

//5
function volume (pi,r){
    return 4/3*pi*r**3;
}
console.log (volume(3.152,5));

//6
function parametertriangle(a,b,c){
    return a+b+c;
}
console.log (parametertriangle (5,10,9));
//end of assignment

//array
 //example of creating an array. eg fruit array using array constructor
var fruits = ("apple","orange","mango");
//array litera
var fruits = ["apple","orange","mango","banana","cherry"]
//create an array of different data and console log the output . also find the lenght of each array
var foods = ("garri", "rice", "beans", "plantain", "indomie");
console.log (foods);
console.log("the length of food is :", foods.length)
//create an array and apply the shift, pop, umshift and push method to the arrays

//creating an array of numbers and printing the second number
var numbers = ["1", "2", "3", "4", "5","6", "7", "8", "9"];
console.log(numbers);
 numbers [1];
// adding an element to the array and printing the new array
console.log(numbers.push(10));
console.log(numbers);
//removing the first element and printing the new array
console.log (numbers.shift(1));
console.log (numbers);
//creating a function that takes two numbers as arguments and returns their sum
function addd(x,y) {
    return x+y;

}
console.log (addd(10,20));
//checking if a person is fit to vote
 var age=(20);
 if (age >=18){
 console.log ("you are fit to vote");
}else{"you are not fit to vote"};

//find the sum of all elements in an array
const sum = [1, 2, 3,4,5,6,7,8,9,10].reduce(add, 0); 


function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum); 
// create an object representing a book with properties for title, author and year. then log the authors name to the console
// add a new property for genre to the book object.
// convert a javascript object into a JSON string and then parse it back into an object. log the resulting object into the console
// write a function that takes numbers and a callback function. the function should call the callback with the sum of the two numbers
// create an array of numbers and calculate the sum of all elements. log the sum to the console
// write a function that takes a number and a callback to square the number.
// check if a username and password match predefined values.

// Define the book object

var book = {
    title: "beauty and the beast",
    author: "Tee Richard O",
    year: 1999,
};

// Log the author's name to the console
console.log (book.author);
    //adding a new property for genre to the book object
    book.genre = "friction";
    console.log (book);
    //converting javascript object into a JSON string 
    
var jsonString = JSON.stringify(book);

// Log the JSON string
console.log("JSON String:", jsonString);

// Parse the JSON string back into an object
var parsedObject = JSON.parse(jsonString);

// Log the parsed object
console.log("Parsed Object:", parsedObject);
 

//callback 

 function sumWithCallback(num1, num2, callback) {
    var sum = num1 + num2;
    callback(sum);
}

// Example usage of the function
sumWithCallback(5, 90, function(result) {
    console.log("The sum is:", result);
});
// Array of numbers
var numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all elements using the reduce method
var summ = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

// Log the sum to the console
console.log("The sum of all elements is:", summ);

function squareWithCallback(number, callback) {
    var result = number * number;
    callback(result);
}

// Example usage of the function
squareWithCallback(7, function(result) {
    console.log("The square is:", result);
});

// Predefined username and password
var predefinedUsername = "user123";
var predefinedPassword = "password123";

// Function to check if the provided username and password match the predefined values
function checkCredentials(username, password) {
    if (username === predefinedUsername && password === predefinedPassword) {
        return true; // Username and password match
    } else {
        return false; // Username and password don't match
    }
}

// Example usage
var providedUsername = "user123";
var providedPassword = "password123";

if (checkCredentials(providedUsername, providedPassword)) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}

//es6 features
//adding a variable to a function
//arrow function

const vee = (a, b) => a+b;{
    
}
console.log(vee(10, 20))
   
//template literal/string
 

const person1 = {
    name2: 'doe',
    age22: '45',
}
const {name2,age22}=person1;
console.log (`this is for ${name2} and ${age22}`)

//destructuring
const objectNigeria = {
    lagosState: '20LGA',
    deltaState: '19LGA',
    ondoState: '21LGA',
    riversState: '23LGA'

}
const {lagosState, deltaState,ondoState,riversState} = objectNigeria
console.log (`this is for ${riversState}`)

const student21 = {
    name: 'john',
    ageaa: 20,
    gender:'male',
    address: 'lagos',
    state: 'lagos state',
}

const {name, ageaa, gender, address, state} = student21;
console.log (`this is for ${address}`)

const array50 = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const array51 = [14,15,16,17,18,19,20,21,22];
const mergedarray= [...array50,...array51];
console.log (mergedarray)
