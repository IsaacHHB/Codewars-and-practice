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
console.log(findNextSquare(342786627), -1);
