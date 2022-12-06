//+ Price of Mangoes
//+ There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price) {
    return Math.ceil(quantity - Math.floor(quantity / 3)) * price
}

//? console.log(mango(3, 3), 6)
//? console.log(mango(9, 5), 30)

//+ Find out whether the shape is a cube
//+ To find the volume (centimeters cubed) of a cuboid you use the formula: volume = Length * Width * Height But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side! It's up to you to find out whether the cuboid has equal sides (= is a cube). Return true if the cuboid could have equal sides, return false otherwise. Return false for invalid numbers too (e.g volume or side is less than or equal to 0). Note: the sides must be integers

var cubeChecker = function (volume, side) {
    return volume === side * side * side && volume > 0;
};

//? console.log(cubeChecker(56.3, 1), false);
//? console.log(cubeChecker(-1, 2), false);
//? console.log(cubeChecker(8, 3), false);
//? console.log(cubeChecker(8, 2), true);
//? console.log(cubeChecker(-8,-2), false);
//? console.log(cubeChecker(0, 0), false);
//? console.log(cubeChecker(1, 5),  false);
//? console.log(cubeChecker(125, 5), true);
//? console.log(cubeChecker(125,-5), false);

//+ Sentence Smash
//+ Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const smash = words => words.join(' ')

//?console.log(smash(["hello", "world"]), "hello world");
//?console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
//?console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");

//+ Count characters in your string
//+ The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    //create obj
    let countObj = {}
    //loop -> check val exist ? val++ : val-1
    for (const c of string) {
        if (countObj[c]) {
            countObj[c]++
        } else {
            countObj[c] = 1
        }
    }
    return countObj
}

//? console.log(count("aba"), { a: 2, b: 1 });
//? console.log(count(""), {});   

//+ Categorize New Member
//+ The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. Input Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap. Output Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

