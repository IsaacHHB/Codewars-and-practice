//CODE WARS!!!---------------------
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
greet("Ryan")


// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  var sum = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }else{
      
    }
  }
  return sum;
}
positiveSum([1,-4,7,12])

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num < 0 ? num : -1 * num;
}


function areYouPlayingBanjo(name) {

  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(int,limit){
  let result = []
  for(let i = int; int <= limit; int += limit)
    result.push(i)
  return result
}

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  let arr = str.split('');
  arr.shift();
  arr.pop();
  return arr.join('');
};

//Complete the solution so that it reverses the string passed into it.

function solution(str){
  let arr = str.split('').reverse().join('')
  return arr
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool === true){
    return 'Yes'
  }else{
    return 'No'
  }
} 

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(' ').join('')
}

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
}

//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
