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

function openOrSenior(data) {
    let arr = []
    for (var i = 0; i < data.length; i++) {
        arr[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }
    return arr
}

//?console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
//?console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
//?console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])

//+ Find the stray number
//+ You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
    let result = numbers.filter((l, i, a) => a.indexOf(l) == a.lastIndexOf(l))
    return +result
}

//? console.log(stray([1, 1, 2]), 2);
//? console.log(stray([1, 2, 1]), 2);
//? console.log(stray([2, 1, 1]), 2);

//+ You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//+ Letters are case sensitive, so "a" is considered a different type of stone from "A".
//+ Constraints: 1 <= jewels.length, stones.length <= 50 jewels and stones consist of only English letters. All the characters of jewels are unique.

function numJewelsInStones(jewels, stones) {
    const map = {}
    let count = 0

    for (const jewel of jewels) {
        map[jewel] = true
    }
    for (const stone of stones) {
        if (map[stone]) {
            count++
        }
    }
    return count
}

//? console.log(numJewelsInStones("aA", "aAAbbbb"), 3)
//? console.log(numJewelsInStones("z","ZZ"), 0)

//+ Return max letter count
//+ Given a string of characters, return the character that appears the most often.

function max(str) {
    let mapStr = {},
        count = 0,
        maxChar = null

    for (const l of str) {
        mapStr[l] = mapStr[l] + 1 || 1
    }
    for (const l in mapStr) {
        if (mapStr[l] > count) {
            count = mapStr[l]
            maxChar = l
        }
    }

    return maxChar
}

//? console.log(max("Hello World!"), "l")
//? console.log(max("abcdefghijkbcc"), 'c')

//+ Is it a number?
//+ Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s) {
    return /^-?\d+(\.\d+)?$/.test(s);
}

//? console.log(isDigit("s2324"), false);
//? console.log(isDigit("-234.4"), true); 

//+ Split Strings
//+ Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
    var arr = str.split('')
    var res = []

    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1]) res.push(arr[i] + arr[i + 1])
        else res.push(arr[i] + '_')
    }

    return res
}

//? console.log(solution("abcdef"), ["ab", "cd", "ef"]);
//? console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//? console.log(solution(""), []);

//+ Contains Duplicate
//+ Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(array) {
    let dupMap = {}

    for (const l of array) {
        let num = array[l]
        if (dupMap[num]) {
            return true
        } else {
            dupMap[num] = true
        }
    }
    return false
}

//? console.log(containsDuplicate([1,2,3,1]), true)
 console.log(containsDuplicate([1,2,3,4]), false)
 console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
 console.log(containsDuplicate([2,14,18,22,22]), true)


