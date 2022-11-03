//Sort by Last Char
//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. If two words have the same last letter, they returned array should show them in the order they appeared in the given string. All inputs will be valid.

const last = x => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

//console.log(last('man i need a taxi up to ubud'), "['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']");
//console.log(last('what time are we climbing up the volcano'), "['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']");
//console.log(last('take me to semynak'), "['take', 'me', 'semynak', 'to']");   

//Bit Counting
//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative. Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // make an array with the bit result
     const base = (n).toString(2).split('');
     
     // make a sum with the array and make the index a Number
     const result = base.reduce((sum, num) => sum + Number(num), 0);
     
     return result;
  };