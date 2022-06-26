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
