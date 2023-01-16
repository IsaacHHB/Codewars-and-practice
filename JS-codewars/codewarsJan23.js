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
console.log(findEvenIndex([1,2,3,4,5,6]), -1);
console.log(findEvenIndex([20,10,30,10,10,15,35]), 3);

