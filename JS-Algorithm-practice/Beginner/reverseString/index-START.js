/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// using built in methods
function reverseString(text) {
    return text.split('').reverse().join('')
}

//using the spread operator
function reverseString(text) {
    return [...text].reverse().join('')
}

//using a for loop
function reverseString(text) {
    let result = ''

    for (let i = text.length - 1; i >= 0; i--){
        result += text[i]
    }

    return result
}

//using a for of loop
function reverseString(text) {
    let result = ''

    for(let char of text){
        result = char + result
    }

    return result;
}

//using .substr() the recursive way






module.exports = reverseString