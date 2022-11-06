//Sort by Last Char
//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. If two words have the same last letter, they returned array should show them in the order they appeared in the given string. All inputs will be valid.

const last = x => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

//console.log(last('man i need a taxi up to ubud'), "['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']");
//console.log(last('what time are we climbing up the volcano'), "['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']");
//console.log(last('take me to semynak'), "['take', 'me', 'semynak', 'to']");   

//Bit Counting
//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative. Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
    // make an array with the bit result
    const base = (n).toString(2).split('');

    // make a sum with the array and make the index a Number
    const result = base.reduce((sum, num) => sum + Number(num), 0);

    return result;
};

//Isograms
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. Example: (Input --> Output) "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i) {
        for (j = i + 1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

//Take a Ten Minutes Walk
//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    let ns = 0, we = 0;
    for (let dir of walk) {
        if (dir == 'n') ns += 1;
        if (dir == 's') ns -= 1;
        if (dir == 'w') we += 1;
        if (dir == 'e') we -= 1;
    }

    return walk.length == 10 && ns === 0 && we === 0;
}

//console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'true');
//console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'false');
//console.log(isValidWalk(['w']), 'false');
//console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'false');

//An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted. Example:


















