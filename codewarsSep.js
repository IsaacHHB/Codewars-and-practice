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
//You are given a string containing a sequence of character sequences separated by commas. Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

array = arr => arr.split(",").slice(1, -1).join(" ") || null;

//Training JS #10: loop statement --for
//Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even. I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

function pickIt(arr) {
    var odd = [], even = [];
    for (element of arr)
        (element % 2 ? odd : even).push(element)


    return [odd, even];
}

//Remove anchor from URL
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
    const index = url.indexOf("#");

    return index === -1 ? url : url.slice(0, index);
}

//Is there a vowel in there?
//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u). If they are, change the array value to a string of that vowel. Return the resulting array.

const isVow = a =>
    a.map(
        charCode =>
            /[aeiou]/.test(String.fromCharCode(charCode))
                ? String.fromCharCode(charCode)
                : charCode
    )

//Contamination #1 -String-
//An AI has infected a text with a character!! This text is now fully mutated to this character. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!! Note: The character is a string of length 1 or an empty string.

function contamination(text, char) {
    return char.repeat(text.length)
}

//Template Strings
//Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings Your task is to return the correct string using the Template String Feature. Input Two Strings, no validation is needed. Output You must output a string containing the two strings with the word ```' are '```