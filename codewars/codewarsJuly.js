//Is this my tail?
//Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit! If the tail is right return true, else return false. The arguments will always be strings, and normal letters. For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.

function correctTail(bod, tail){
    let sub = bod.substr(bod.length-tail.length)
   
   if (sub == tail){
     return true
   }else{
     return false
   }
 }

 //Multiplication table for number
//  Your goal is to return multiplication table for number that is always an integer from 1 to 10. For example, a multiplication table (string) for number == 5 looks like below:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line. Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
    return `1 * ${number} = ${1*number}
    2 * ${number} = ${2*number}
    3 * ${number} = ${3*number}
    4 * ${number} = ${4*number}
    5 * ${number} = ${5*number}
    6 * ${number} = ${6*number}
    7 * ${number} = ${7*number}
    8 * ${number} = ${8*number}
    9 * ${number} = ${9*number}
    10 * ${number} = ${10*number}`
}

//String cleaning
//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
    return s.replace(/[1234567890]/ig, '')
}

//Shortest Word
//Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

function findShort(s){
  let str = s.split(' ')
  return Math.min(...str.map(({ length }) => length))
}

//Get the Middle Character
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
  var position;
  var length;

  if(s.length % 2 == 1) {
      position = s.length / 2;
      length = 1;
  } else {
      position = s.length / 2 - 1;
      length = 2;
  }
  return s.substring(position, position + length)
}

//Simple Pig Latin
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  let marks = ['.','!','?','"', ',']
  let result = str.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay'));
  return result.join(' ')
}

//Palindrome Strings
//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers. Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function isPalindrome(line) {
  let pali = line.toString().split('').reverse().join('');
  if(pali != line){
    return false
  }else{
    return true
  }
}

//Moving Zeros To The End
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let catchAll= [];
  let zeros = [];
  for(let i = 0; i < arr.length; i++){
    arr[i] === 0 ? zeros.push(arr[i]) : catchAll.push(arr[i])
  }
  return ([...catchAll,...zeros])
}

//Welcome to the City
//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//Grasshopper - Array Mean
//Find the mean (average) of a list of numbers in an array.
//Information
//To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
//For an example list of 1, 3, 5, 7
//1. Add all of the numbers
//1+3+5+7 = 16
//2. Divide by the number of values in the list. In this example there are 4 numbers in the list.