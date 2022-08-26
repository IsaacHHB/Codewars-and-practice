//Beginner Series #3 Sum of Numbers
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
    if (a == b) {
        return a;
    } else if (a > b) {
        return a + getSum(a - 1, b)
    } else {
        return a + getSum(a + 1, b)
    }
}

//Sum of two lowest positive integers
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    let res = numbers.sort((a, b) => a - b).slice(0, 2);
    return res.reduce((e, i) => e + i)
}

//Gravity Flip
//There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

const flip = (d, a) => {
    return d == 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
}

//Regular Ball Super Ball
//Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated. If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

var Ball = function (ballType) {
    if (ballType === undefined) {
        this.ballType = "regular";
    } else {
        this.ballType = "super"
    }
}

//Sum of odd numbers
//Given the triangle of consecutive odd numbers: Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

function rowSumOddNumbers(n) {
    return n * n * n
}

//Tip Calculator
//Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

function calculateTip(amount, rating) {
    const raingName = rating.toUpperCase();

    switch (raingName) {
        case "EXCELLENT":
            return Math.ceil(amount * 0.2);

        case "GREAT":
            return Math.ceil(amount * 0.15);

        case "GOOD":
            return Math.ceil(amount * 0.1);

        case "POOR":
            return Math.ceil(amount * 0.05);

        case "TERRIBLE":
            return Math.ceil(amount * 0);

        default:
            return "Rating not recognised"
    }
}

// L1: Bartender, drinks!
//Complete the function that receives as input a string, and produces outputs according to the following table:
//Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer". Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
    param = param.toLowerCase()
    if (param === "jabroni") {
        return "Patron Tequila"
    } else if (param === "school counselor") {
        return "Anything with Alcohol"
    } else if (param === "programmer") {
        return "Hipster Craft Beer"
    } else if (param === "bike gang member") {
        return "Moonshine"
    } else if (param === "politician") {
        return "Your tax dollars"
    } else if (param === "rapper") {
        return "Cristal"
    } else {
        return "Beer"
    }
}

//Take the Derivative
//This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent. Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2. In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}

//Exclamation marks series #2: Remove all exclamation marks from the end of sentence
//Remove all exclamation marks from the end of sentence.

function remove(inputString) {
    let result = inputString;

    // run this loop while the last character is a `!`
    while (result[result.length - 1] === "!") {
        // remove the last character (= `!`)
        result = result.slice(0, -1);
    }

    return result;
}

//Delete occurrences of an element if it occurs more than n times
//Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

function deleteNth(arr, x) {
    var cache = {};
    return arr.filter(function (n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
}

//Is this a triangle?
//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
function isTriangle(a, b, c) {
    const sides = [a, b, c].sort();
    return ((sides[0] + sides[1]) > sides[2]);
}

//Multiple of index
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

multipleOfIndex = array => array.filter((e, i) => e % i == 0)

//Surface Area and Volume of a Box
//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

const getSize = (width, height, depth) => [
    ((width * height) + (width * depth) + (depth * height)) * 2,
    width * height * depth
];

//Alan Partridge II - Apple Turnover
//Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

function apple(x) {
    return (x * x) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

//Enumerable Magic #3 - Does My List Include This?
//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
    return arr.includes(item);
}

//Do you speak "English"?
//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English". The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct. Upper or lower case letter does not matter -- "eNglisH" is also correct. Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
    sentence = sentence.toLowerCase();
    return sentence.includes('english')
}

//How many lightsabers do you own?
//The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
}

//How many stairs will Suzuki climb in 20 years?
//Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress. The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20. 20_year_estimate = one_year_total * 20

stairsIn20 = s => 20 * s.reduce((prev1, cur1) => prev1 + cur1.reduce((prev2, cur2) => prev2 + cur2, 0), 0)

//Smallest unused ID
//You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique! Therefore you need a method, which returns the smallest unused ID for your next new data item... Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

nextId = (ids) => ids.sort((a, b) => a - b).reduce((a, b) => a + (a === b), 0)

//Fundamentals: Return
//Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return Math.pow(a, b);
}

function subt(a, b) {
    return a - b;
}

//Sum of differences in array
//Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    let sum = 0
    arr = arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1]
    }
    return sum
}

//No Loops 2 - You only need one
//You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

function check(a, x) {
    return a.includes(x);
};

// the famous fizzbuzz
// you know what to do

function fizzBuzz(x) {
    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(100)

//Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
//Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s, n) {
    let input = s;
    while (n) {
        input = input.replace(/!/, "");
        n -= 1;
    }
    return input;
}

// Sock Merchant
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
    for (let i of ar) {
        socks[i] = socks[i] + 1 || 1;
        if (socks[i] % 2 === 0) {
            pairs += 1;
        }
    }
    return pairs;
}

//Printing Array elements with Comma delimiters
//Output: String with comma delimited elements of the array in th same order.

printArray = array => array.join(',');

//Closest elevator
//Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments

elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';

//Simple validation of a username with regex
//Write a simple regex to validate a username. Allowed characters are: lowercase letters, numbers, underscore Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
    return username.length >= 4
        && username.length <= 16
        && (username.match(/[a-z]|_|\d/g).length === username.length);
}

//Formatting decimal places #0
//Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

function twoDecimalPlaces(n) {
    return Number(n.toFixed(2));
}

//simple calculator
//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers. Your function will accept three arguments: The first and second argument should be numbers. The third argument should represent a sign indicating the operation to perform on these two numbers. if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

function calculator(a, b, sign) {
    if (sign === '+') {
        return a + b;
    } else if (sign === '-') {
        return a - b;
    } else if (sign === '*') {
        return a * b;
    } else if (sign === '/') {
        return a / b;
    } else {
        return 'unknown value'
    }
}

//Training JS #3: Basic data types--String
//In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc.. String can use operators +, Connect two or more strings together.

var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
    //select some variable to combine "Dad"
    return d1 + a2 + d2;
}
function Bee() {
    //select some variable to combine "Bee"
    return b1 + e2 + e2;
}
function banana() {
    //select some variable to combine "banana"
    return b2 + a2 + n2 + a2 + n2 + a2;
}
//answer some questions if you finished works above
function answer1() {
    //the answer should be "yes" or "no"
    return "no";
}
function answer2() {
    //the answer should be "yes" or "no"
    return "no";
}
function answer3() {
    //the answer should be "yes" or "no"
    return "yes";
}

//Return the day
//Complete the function which returns the weekday according to the input number: 1 returns "Sunday" 2 returns "Monday" 3 returns "Tuesday" 4 returns "Wednesday" 5 returns "Thursday" 6 returns "Friday" 7 returns "Saturday" Otherwise returns "Wrong, please enter a number between 1 and 7"

whatday = (num) => num == 1 ? 'Sunday' : num == 2 ? 'Monday' : num == 3 ? 'Tuesday' : num == 4 ? 'Wednesday' : num == 5 ? 'Thursday' : num == 6 ? 'Friday' : num == 7 ? 'Saturday' : 'Wrong, please enter a number between 1 and 7'

//BASIC: Making Six Toast.
//You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

sixToast = (num) => num > 6 || num < 6 ? Math.abs(num - 6) : 0;

//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
