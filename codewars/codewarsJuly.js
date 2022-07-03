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