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

