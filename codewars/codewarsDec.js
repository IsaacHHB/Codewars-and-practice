//Price of Mangoes
//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price) {
    return Math.ceil(quantity - Math.floor(quantity / 3)) * price
}

// console.log(mango(3, 3), 6)
// console.log(mango(9, 5), 30)

//Find out whether the shape is a cube
//To find the volume (centimeters cubed) of a cuboid you use the formula: volume = Length * Width * Height But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side! It's up to you to find out whether the cuboid has equal sides (= is a cube). Return true if the cuboid could have equal sides, return false otherwise. Return false for invalid numbers too (e.g volume or side is less than or equal to 0). Note: the sides must be integers

var cubeChecker = function (volume, side) {
    return volume === side * side * side && volume > 0;
};

// console.log(cubeChecker(56.3, 1), false);
// console.log(cubeChecker(-1, 2), false);
// console.log(cubeChecker(8, 3), false);
// console.log(cubeChecker(8, 2), true);
// console.log(cubeChecker(-8,-2), false);
// console.log(cubeChecker(0, 0), false);
// console.log(cubeChecker(1, 5),  false);
// console.log(cubeChecker(125, 5), true);
// console.log(cubeChecker(125,-5), false);

//Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const smash = words => words.join(' ')

//console.log(smash(["hello", "world"]), "hello world");
//console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
