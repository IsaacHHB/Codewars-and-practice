// ES6 string addition
//It is easy to join two strings together like this string1 + string2. Another way to get the desired result would be with string1.concat(string2) ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings. + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat! If one of the arguments is a number your code must coerce it into being a string.

function joinStrings(string1, string2) {
    return `${string1} ${string2}`
}

//Credit Card Mask
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if (cc.length > 4) {
        let result = '';
        return cc.split('').reduce((acc, cur, i) => {
            if (cc.length - i > 4) {
                result += '#';
            } else {
                result += cur;
            }
            return result;
        }, '');
    } else {
        return cc;
    }
}

//FIXME: Get Full Name
//The code provided is supposed return a person's Full Name given their first and last names. But it's not working properly. Notes The first and/or last names are never null, but may be empty. Task Fix the bug so we can all go home early.

class Dinglemouse {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`.trim();
    }

}

//Simple Comparison?
//Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not. To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b) {
    return a == b
}

//String ends with?
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

solution = (str, ending) => str.endsWith(ending)

//Palindrome
//complete a function that takes in a variable that returns true if it is a palindrome and false if not

function palindrome(a) {
    let b = a.split('').reverse().join('')
    return a === b

}

//Reverse words
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    str = str.split(' ').reverse().join(' ')
    return str.split('').reverse().join('')
}

//Two Sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
};

//Extract the domain name from a URL
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

function domainName(url) {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0];
}

// Roman to Integer
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II. Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used: I can be placed before V (5) and X (10) to make 4 and 9.  X can be placed before L (50) and C (100) to make 40 and 90.  C can be placed before D (500) and M (1000) to make 400 and 900. Given a roman numeral, convert it to an integer.

const romanToInt = (s) => {
    const ROMAN = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let result = 0;

    for (let i = 0; i < s.length; i += 1) {
        const current = ROMAN.get(s[i]);
        const next = ROMAN.get(s[i + 1]);

        if (current < next) {
            result = result + next - current;
            i += 1;
        } else {
            result += current;
        }
    }

    return result;
};

//Sum of Multiples
//Find the sum of all multiples of n below m Keep in Mind n and m are natural numbers (positive integers) m is excluded from the multiples

function sumMul(n, m) {
    let r = 0;
    for (let i = 1; i * n < m; i++) {
        r += i * n
    }
    return r > 0 ? r : 'INVALID'
}

//average of grades
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer. The array will never be empty.

function getAverage(arr) {
    let leng = arr.length
    arr = arr.reduce((a, c) => a + c, 0) / leng
    return Math.floor(arr)
}

// console.log(getAverage([2, 2, 2, 2]), 2)
// console.log(getAverage([1, 2, 3, 4, 5,]), 3);
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)

//Grasshopper - Variable Assignment Debug
//Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

var a = "dev"
var b = "Lab"

var name = a + b

//You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr) {
    // first filter the array to only get the items occuring once, aka filter for items where indexOf values = lastIndexOf value
    return arr
        .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
        //  then reduce to get the sum of the two numbers
        .reduce((a, b) => a + b, 0);
}


// console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
//console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
//console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
//console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
//console.log(repeats([5, 10, 19, 13, 10, 13]), 24)

//Man in the west
//A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him. So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

const checkTheBucket = bucket => bucket.includes('gold')


//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//For example:

function evenNumbers(array, num) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i])
        }
    }
    return arr.slice(-num)
}

//more effecient solution
function evenNumbers(array, number) {
    return array.filter(e => e % 2 === 0).slice(-number)
}

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//Are arrow functions odd?
//Time to test your basic knowledge in functions! Return the odds from a list:

const odds = values => values.filter(e => e % 2 !== 0);

//[1, 2, 3, 4, 5]  -->  [1, 3, 5]
//[2, 4, 6]        -->  []

//Remove the time
//You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made: Weekday Month Day, time e.g., Friday May 2, 7pm You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time. Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format. Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
    return longDate.split(',')[0]
}

//Array.diff
//It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other:

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}

//arrayDiff([1,2],[1]) == [2]
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

//Friend or Foe?
//Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
    return friends.filter(e => e.length === 4)
}

//Multiples of 3 or 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them). Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    let arr = []
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            arr.push(i)
        }
    }
    return arr.reduce((a, c) => a + c, 0)
}

//You're a square!
//Given an integral number, determine if it's a square number: In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}

//Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
//For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
//Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

function solve(arr) {
    //set -> uni values
    //map [1,2],[4],[5,6] -> 2, 1, 2
    //reduce -> 2*1*2
    return arr.map(sa => new Set(sa).size).reduce((a, c) => a * c, 1)
}

// console.log(solve([[1, 2], [4], [5, 6]]), 4)
// console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4)
// console.log(solve([[1, 2], [3, 4], [5, 6]]), 8)
// console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72)

//Given an array of integers , Find the Nth smallest element in this array of integers. //Notes Array/list size is at least 3 . Array/list's numbers could be a mixture of positives , negatives and zeros . Repetition in array/list's numbers could occur , so don't Remove Duplications .

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}


// console.log(nthSmallest([3,1,2] ,2)) //==> return (2) 
// console.log(nthSmallest([15,20,7,10,4,3] ,3)) //==> return (7) 
// console.log(nthSmallest([15,20,7,10,4,3] ,3))// ==> return (7) 
// console.log(nthSmallest([177,225,243,-169,-12,-5,2,92] ,5)) //==> return (92) 

//Duplicate Encoder
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    let w = word.toLowerCase().split('')
    return w.map(x => w.indexOf(x) == w.lastIndexOf(x) ? '(' : ')').join('')
}

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//Sum of Digits / Digital Root
//Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
    let result = 0;
    String(n).split('').map(num => {
        result += Number(num);
    });
    return result >= 10 ? digitalRoot(result) : result;
}

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//Unique In Order
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
    let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
    let unique = strArr.filter((letter, i) => {
        return strArr[i] != strArr[i + 1];
    })

    return unique;
}

//Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. If you want to know more: http://en.wikipedia.org/wiki/DNA In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). More similar exercise are found here: http://rosalind.info/problems/list-view/ (source) Example: (input --> output)

function DNAStrand(dna) {
    let sequence = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    }
    return dna.replace(/A|T|G|C/g, function (matched) {
        return sequence[matched];
    });
}

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//Given a string, return a new string that has transformed based on the input: Change case of every character, ie. lower case to upper case, upper case to lower case. Reverse the order of words from the input. Note: You will have to handle multiple spaces, and leading/trailing spaces. You may assume the input only contain English alphabet and spaces.
// "Example Input" ==> "iNPUT eXAMPLE"

function reverseCapitals(str) {
    let res = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            res += str[i].toUpperCase()
        }else{
            res += str[i].toLowerCase()
        }
    }
    return res.split(' ').reverse().join(' ')

}

//same problem using map

function reverseCapitals(str) {
    return str.split('')
    .map((e,i,a) => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase())
    .join('')
    .split(' ')
    .reverse()
    .join(' ')
}

// console.log(reverseCapitals('Example Input'), "iNPUT eXAMPLE")
// console.log(reverseCapitals('Jim Jimmerson'), "jIMMSERSON jIM")
console.log(reverseCapitals('tHe WORd'), "worD ThE")
