//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=> a + b, 0) + arr2.reduce((a,b)=> a + b, 0); 
  }

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

  function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}

//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money? Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean. If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
    if (bonus === true){
      return "£" + salary * 10;
    }else{
      return '£' + salary 
    }
  }

//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }

//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

const sumArray = array => {
    if (!array) {
        return 0
    }
    let s = 0;
    array.sort((a, b) => a - b).forEach((a, i) => {
        if (i !== array.length - 1 && i !== 0) {
            s += a;
        }
    })
    return s;
}

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
  };

  //Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

//Write a function to split a string and convert it into an array of words.

function stringToArray(string){
    return string.split(' ')
  }

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
    return name === owner ? `Hello boss` : `Hello guest`
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let result = ''
    for(i = 1; i <= num; i++){
    result += i.toString() + ' sheep...'
    }
    return result
  }
//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0 ? true : false
}


