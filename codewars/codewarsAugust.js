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