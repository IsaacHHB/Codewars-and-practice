//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
    if(b === true){
      return "true"
    }else{
      return "false"
    }
  }

  //Code as fast as you can! You need to double the integer and return it.

  function doubleInteger(i) {
    return i * 2;
  }

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive (health) {
    if (health <= 0) {
      return false
    } else{
      return true
    }
  }

//   Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    }else{
      return "Hello, " + name + "!";
    }
  }
  //Return the Nth Even Number

  function nthEven(n){
    return (n*2) -2
  }

  //Return the Nth Even Number

  function nthEven(n){
    return (n*2) -2
  }

//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step){
    let array = []
    for(i = min; i <= max; i+=step){
      array.push(i)
    }
    return array
  }

//Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition). Write a function that given a floor in the american system returns the floor in the european system. With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
    if(n >= 13){
      return n -2
    }else if(n > 0){
      return n - 1
    }else{
      return n
    }
  }
//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    return typeof x != "string" ? x*50+6 : "Error"
  }

//Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a','e','i','o','u']
    for(let char of str){
      if(vowels.includes(char)){
        vowelsCount++
      }
    }
    return vowelsCount;
  }

//Can you find the needle in the haystack?Write a function findNeedle() that takes an array full of junk but containing one "needle" After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle.

function findNeedle(haystack) {
    let result = haystack.indexOf('needle');
    return `found the needle at position ${result}`
  }

//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}