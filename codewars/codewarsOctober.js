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