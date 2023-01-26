//+ Kata Example Twist
//+ This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata). Add the value "codewars" to the array websites/Websites 1,000 times.
// add the value "codewars" to the websites array 1,000 times

var websites = []

for (let i = 0; i < 1000; i++) {
    websites.push('codewars')
}

//+ Return to Sanity
//+ This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
    var results = {
        sanity: 'Hello'
    };
    return results;
}

//? console.log(mystery())

//+ Find the next perfect square!
//+ You might know some pretty large perfect squares. But what about the NEXT one? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
    sq = Math.sqrt(sq) + 1;
    return Number.isInteger(sq) ? sq * sq : -1;
}

//? console.log(findNextSquare(121), 144);
//? console.log(findNextSquare(625), 676);
//? console.log(findNextSquare(319225), 320356);
//? console.log(findNextSquare(15241383936), 15241630849);
//? console.log(findNextSquare(155), -1);
//? console.log(findNextSquare(342786627), -1);

//+ Tribonacci Sequence
//+ Well met with Fibonacci bigger brother, AKA Tribonacci. As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it

function tribonacci(signature, n) {
    for (let i = 0; i < n - 3; i++) {
        signature.push(signature.slice(i).reduce((a, b) => a + b),);
    }
    return signature.slice(0, n);
}

//? console.log(tribonacci([1,1,1], 10), [1,1,1,3,5,9,17,31,57,105]   )
//? console.log(tribonacci([0,0,1], 10), [0,0,1,1,2,4,7,13,24,44]     )
//? console.log(tribonacci([0,1,1], 10), [0,1,1,2,4,7,13,24,44,81]    )
//? console.log(tribonacci([1,0,0], 10), [1,0,0,1,1,2,4,7,13,24]      )
//? console.log(tribonacci([0,0,0], 10), [0,0,0,0,0,0,0,0,0,0]        )
//? console.log(tribonacci([1,2,3], 10), [1,2,3,6,11,20,37,68,125,230])
//? console.log(tribonacci([3,2,1], 10), [3,2,1,6,9,16,31,56,103,190] )
//? console.log(tribonacci([1,1,1],  1), [1])
//? console.log(tribonacci([300,200,100], 0), [])

//+ Does my number look big in this?
//+ A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    // Code me to return true or false
    var val = (value + '').split('');
    let sum = 0;
    for (var v of val) {
        const num = parseInt(v);
        sum += Math.pow(num, val.length);
    }
    return sum === value;
}

//! Smarter answer

function narcissistic(value) {
    return value.toString()
        .split('')
        .map((x, i, arr) => x ** arr.length)
        .reduce((a, b) => +a + +b)
        === value
}

//? console.log(narcissistic( 7 ), true);
//? console.log(narcissistic( 371 ), true);

//+ Playing with digits
//+ Some numbers have funny properties. For example: 89 --> 8¹ + 9² = 89 * 1 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words: Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k If it is the case we will return k, if not return -1. Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}

//? console.log(digPow(89, 1), 1)
//? console.log(digPow(92, 1), -1)
//? console.log(digPow(46288, 3), 51)

//+ Equal Sides Of An Array
//+ You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1. For example: Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6. Let's look at another one. You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

function findEvenIndex(arr) {
    var left = [], right = [];
    for (var i = 0, sum = 0; i < arr.length; i++) {
        left.push(sum);
        sum += arr[i];
    }
    for (i = 0; i < arr.length; i++)
        if (left[i] == sum - left[i] - arr[i]) return i;
    return -1;
}

//? console.log(findEvenIndex([1,2,3,4,3,2,1]), 3);
//? console.log(findEvenIndex([1,100,50,-51,1,1]), 1);
//? console.log(findEvenIndex([1,2,3,4,5,6]), -1);
//? console.log(findEvenIndex([20,10,30,10,10,15,35]), 3);

//+ Mexican Wave
//+ In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

function wave(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        let copy = str.split('');
        if (copy[i] !== ' ') {
            copy[i] = copy[i].toUpperCase()
            newArr.push(copy.join(''))
        }
    }
    return newArr
}

//? console.log(wave("codewars"), ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]);
//? console.log(wave(""), []);
//? console.log(wave("two words"), ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
//? console.log(wave(" gap "), [" Gap ", " gAp ", " gaP "])

//+ Find Nearest square number
//+ Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n) {
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}

//? console.log(nearestSq(1),1)
//? console.log(nearestSq(2),1)
//? console.log(nearestSq(10),9)
//? console.log(nearestSq(111),121)
//? console.log(nearestSq(9999),10000)

//+ Recursion #1 - Factorial
//+ In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.

const factorial = n => {
    if (n == 0) {
        return 1
    } else {
        return n * factorial(--n)
    }
};

//? console.log(factorial(0), 1);
//? console.log(factorial(1), 1);
//? console.log(factorial(2), 2);
//? console.log(factorial(3), 6);

//+ Write Number in Expanded Form
//+ You will be given a number and you will need to return it as a string in Expanded Form. For example: expandedForm(12); // Should return '10 + 2' expandedForm(42); // Should return '40 + 2' expandedForm(70304); // Should return '70000 + 300 + 4' NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    num = String(num);
    let result = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] == 0) continue;
        else result.push(num[i] + "0".repeat(num.length - i - 1))
    }
    return result.join(" + ")
}

//? console.log(expandedForm(12), '10 + 2');
//? console.log(expandedForm(42), '40 + 2');
//? console.log(expandedForm(70304), '70000 + 300 + 4');

//+ Consecutive strings
//+ You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    let arrLength = strarr.length;
    let arr = [];

    if (arrLength == 0 || k > arrLength || k <= 0) return "";

    for (let i = 0; i <= arrLength - k; i++) {
        let current = strarr[i];
        for (let ii = k, jj = 1; ii > 1; ii--, jj++) {
            current += strarr[i + jj]
        }
        arr.push(current);
    }
    return arr.reduce(function (a, b) {
        return a.length > b.length ? a : a.length == b.length ? a : b;
    });
}

//? console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
//? console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
//? console.log(longestConsec([], 3), "")
//? console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//? console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
//? console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
//? console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
//? console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
//? console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

//+ CSV representation of array
//+ Create a function that returns the CSV representation of a two-dimensional numeric array.

function toCsvText(array) {
    return array.join('\n')
}

//? console.log(toCsvText([ [0, 1, 2, 3, 45], [10, 11, 12, 13, 14], [20, 21, 22, 23, 24], [30, 31, 32, 33, 34]]), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
//? console.log(toCsvText([ [-25, 21, 2, -33, 48], [30, 31, -32, 33, -34]]), '-25,21,2,-33,48\n30,31,-32,33,-34');
//? console.log(toCsvText([ [5, 55, 5, 5, 55], [6, 6, 66, 23, 24], [666, 31, 66, 33, 7]]), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');

//+ Power
//+ The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

const numberToPower = (number, power) => power > 0 ? number * numberToPower(number, power - 1) : 1;

//? console.log(numberToPower(4, 2), 16);
//? console.log(numberToPower(10, 4), 10000);
//? console.log(numberToPower(10, 0), 1);

//+ Count the divisors of a number
//+ Count the number of divisors of a positive integer n.

function getDivisorsCnt(n){
    let output = 0;
  for(let i  = 1; i <= n; i++){
    if(n % i == 0){
      output += 1;
    }
  }
  return output
}