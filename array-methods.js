//1st task on array-methods
function camelize(str) {
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }
//2nd task on array-methods
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}
    let arr = [5, 3, 8, 1];
    
    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); 

    alert( arr );

function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)

  alert( arr ); // 5,3,8,1 (not modified)

//3rd task on array-methods



//4th task on array-methods

//5th task on array-methods

//6th task on array-methods

//7th task on array-methods

//8th task on array-methods

//9th task on array-methods

//10th task on array-methods

//11th task on array-methods

//12th task on array-methods

//13th task on array-methods


//OBJECTS-------------------------------------------------------

const aurora = {
    name: "auroura",
    health: 150,
    strength: 25,
    xp: 0,

describe(){
    return `${this.name} has ${this.health} HP, has ${this.strength} strength, and now has ${this.xp} experience`
    }
};
aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe());

const dog = {
    name: "Lilly",
    species: "Malamute",
    size: '24"',

describe(){
    return `${this.name} is a ${this.species} dog measuring ${this.size}`
    }
};
dog.bark = "grrrrr"

console.log(dog.describe());
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);




































const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
  };
  
  // Return the character description
  function describe(character) {
    return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
  }
  
  console.log(describe(aurora));

//this key word
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points and ${this
        .strength} as strength`;
    }
  };
  
  console.log(aurora.describe());