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

