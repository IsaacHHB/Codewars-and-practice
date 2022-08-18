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







