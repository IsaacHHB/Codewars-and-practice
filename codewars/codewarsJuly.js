//Is this my tail?
//Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit! If the tail is right return true, else return false. The arguments will always be strings, and normal letters. For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.

function correctTail(bod, tail){
    let sub = bod.substr(bod.length-tail.length)
   
   if (sub == tail){
     return true
   }else{
     return false
   }
 }

 //Multiplication table for number
//  Your goal is to return multiplication table for number that is always an integer from 1 to 10. For example, a multiplication table (string) for number == 5 looks like below:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line. Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
    return `1 * ${number} = ${1*number}
    2 * ${number} = ${2*number}
    3 * ${number} = ${3*number}
    4 * ${number} = ${4*number}
    5 * ${number} = ${5*number}
    6 * ${number} = ${6*number}
    7 * ${number} = ${7*number}
    8 * ${number} = ${8*number}
    9 * ${number} = ${9*number}
    10 * ${number} = ${10*number}`
}

//String cleaning
//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
    return s.replace(/[1234567890]/ig, '')
  }