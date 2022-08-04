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