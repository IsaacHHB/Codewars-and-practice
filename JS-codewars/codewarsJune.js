//Looks like some hoodlum plumber and his brother has been running around and damaging your stages again. The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

function pipeFix(numbers){
    let arr = []
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
      arr.push(i)
    }
    return arr
  }

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  return Math.max(health - damage, 0);
}

//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

//This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false
}

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor(s / 0.036)
}

//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times. Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
  return position + (roll * 2)
}

//Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celcius = (temperature - 32) * (5/9)
  return celcius
}

//Drink about kata

function peopleWithAgeDrink(old) {
  return old <= 13 ? "drink toddy" : old <= 17 ? "drink coke" : old <= 20 ? "drink beer": "drink whisky"
};

//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  return s.replace(/[aeiou]/gi,'!')
}

//In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  return list.reverse()
}

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  const arr = numbers.split(" ").map(Number).sort((a,b) => b - a)
  return arr[0] + " " + arr[arr.length - 1]
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  let num = n.toString().split('').sort().reverse().join('')
  return Number(num)
}

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	const result = []
  const lowStr = s.toLowerCase()
  
  for(let i = 0; i < lowStr.length; i++){
    let str = lowStr[i].toUpperCase()
    for(let j = 0; j < i; j++){
      str += lowStr[i]
    }
    result.push(str)
  }
  return result.join('-')
}

//Simple Fun #1: Seats in Theater

function seatsInTheater(nCols, nRows, col, row) {
  let colsBehind = nCols - col + 1;
  let rowsBehind = nRows - row;
  return colsBehind * rowsBehind;
}

//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (s) {
  return s[s.length-1] == '!' ? s.slice(0, s.length-1) : s; 
}

//Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

function getChar(c) {
  return String.fromCharCode(c)
}

//Capitalization and Mutability

function capitalizeWord(word) {
  let upper = word[0].toUpperCase();
  return upper + word.slice(1)
}

//Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  if(a === b){
    return false
  }else if(a || b == true){
    return true
  }else{
    return false
  }
}

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
  return string.replace(/[aeiou]/ig,'')
}

//The Wide-Mouthed frog!

function mouthSize(animal) {
  animal = animal.toLowerCase()
  return animal === 'alligator'?'small':'wide'
}

//No zeros for heros
//Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

//Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b); 
}

//FIXME: Replace all dots

var replaceDots = function(str) {
  return str.replace(/[.]/ig, '-');
}

//Plural

const plural = n => n !== 1;

//Dollars and Cents

function formatMoney(amount){
  return `$${amount.toFixed(2)}`
}

//Reversing Words in a String

function reverse(string){
  return string.split(' ').reverse().join(' ')
}

// return odd numbers from 1 to 100

function returnOdd(x){
  let arr = []
  for(let i = 1; i <= x; i++){
    if(i % 2 === 1){
      arr.push(i)
    }
  }
}
returnOdd(100)

//Difference of Volumes of Cuboids

function findDifference(a, b) {
  const reducer = (a,num) => a * num
  let c = a.reduce(reducer , 1)
  let d = b.reduce(reducer , 1)
  return c > d ? c - d : d - c
}

//Hex to Decimal
//Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
  return parseInt(hexString,16)
}

//Bin to Decimal
//Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return parseInt(bin,2);
}

//Enumerable Magic #25 - Take the First N Elements
//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0,n)
}

//Failed Sort - Bug Fixing #4
//Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order

var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

//String Templates - Bug Fixing #5
//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//Switch/Case - Bug Fixing #6
//Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': 
      result = value.a + value.b;
      break;
    case'-': 
      result = value.a - value.b;
      break;
    case'/': 
      result = value.a / value.b;
      break;
    case'*': 
      result = value.a * value.b;
      break;
    case'%': 
      result = value.a % value.b;
      break;
    case'^': 
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

//SpeedCode #2 - Array Madness
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
  return a.reduce((acc, cur) => acc + (cur ** 2), 0) > b.reduce((acc, cur) => acc + (cur ** 3), 0);
};

//Pre-FizzBuzz Workout #1
//This is the first step to understanding FizzBuzz. Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive). Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

//Holiday VIII - Duty Free
//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday. You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday. For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500. All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
  return Math.trunc(hol/(normPrice * (discount / 100)))
}

//Training JS #2: Basic data types--Number
//In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc.. Numbers can use operators such as + - * / % Task
//I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions. When you have finished the work, click "Run Tests" to see if your code is working properly.

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1  //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a= v2  //set number value to a
  var b= v6  //set number value to b
  return a%b;
}

//Grasshopper - Function syntax debugging
//A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main (verb, noun){
  return verb + noun
}

//Find the position!
//When provided with a letter, return its position in the alphabet. Input :: "a" Ouput :: "Position of alphabet: 1"

function position(letter){
  let alphabet = ['zero trolls', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return `Position of alphabet: ${alphabet.indexOf(letter)}`;
}

//How old will I be in 2099?
//Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions. Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past. Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!" "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

function  calculateAge(p1,p2) {
  let age = p2 - p1
  if(age === 1){
    return `You are ${age} year old.`
    } else if(age > 1) {
      return 'You are ' + age + ' years old.';
    } else if (age < -1) {
      return 'You will be born in ' +  Math.abs(age) + ' years.';
    } else if (age === -1) {
      return 'You will be born in ' + Math.abs(age) + ' year.';
    } else {
      return 'You were born this very year!';
    }
}

//Training JS #4: Basic data types--Array
//I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

//Fix your code before the garden dies!
//You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs. Your task is to debug the code before your plants die!

function rainAmount(mm){
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`
  }else {
    return "Your plant has had more than enough water for today!"
  }
}

//Determine offspring sex based on genes XX and XY chromosomes
//The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic. The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male. Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm. If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}