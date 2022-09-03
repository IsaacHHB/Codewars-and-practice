//Find the capitals
//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    var caps = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};

//Regex count lowercase letters
//Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(inputString) {
    let count = 0;

    // loop over every char
    for (const char of inputString) {
        // check if it is lowercase
        if (char.match(/[a-z]/)) {
            // if yes, increase count
            count += 1;
        }
    }

    return count;
}

//Define a card suit
//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs'
    } else if (card.includes('♦')) {
        return 'diamonds'
    } else if (card.includes('♥')) {
        return 'hearts'
    } else {
        return 'spades'
    }
}

//Capitalize first letter of a string
//Write a function capitalize() which capitalizes the first letter (if any) of the given string.
//JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain. Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

String.prototype.capitalize = function () {
    let code = this.charCodeAt(0)
    if (code > 96 && code < 123) {
        code -= 32
    }
    return String.fromCharCode(code) + this.slice(1)
}

//Remove First and Last Character Part Two
