//+ Price of Mangoes
//+ There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price) {
    return Math.ceil(quantity - Math.floor(quantity / 3)) * price
}

//? console.log(mango(3, 3), 6)
//? console.log(mango(9, 5), 30)

//+ Find out whether the shape is a cube
//+ To find the volume (centimeters cubed) of a cuboid you use the formula: volume = Length * Width * Height But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side! It's up to you to find out whether the cuboid has equal sides (= is a cube). Return true if the cuboid could have equal sides, return false otherwise. Return false for invalid numbers too (e.g volume or side is less than or equal to 0). Note: the sides must be integers

var cubeChecker = function (volume, side) {
    return volume === side * side * side && volume > 0;
};

//? console.log(cubeChecker(56.3, 1), false);
//? console.log(cubeChecker(-1, 2), false);
//? console.log(cubeChecker(8, 3), false);
//? console.log(cubeChecker(8, 2), true);
//? console.log(cubeChecker(-8,-2), false);
//? console.log(cubeChecker(0, 0), false);
//? console.log(cubeChecker(1, 5),  false);
//? console.log(cubeChecker(125, 5), true);
//? console.log(cubeChecker(125,-5), false);

//+ Sentence Smash
//+ Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const smash = words => words.join(' ')

//?console.log(smash(["hello", "world"]), "hello world");
//?console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
//?console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");

//+ Count characters in your string
//+ The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    //create obj
    let countObj = {}
    //loop -> check val exist ? val++ : val-1
    for (const c of string) {
        if (countObj[c]) {
            countObj[c]++
        } else {
            countObj[c] = 1
        }
    }
    return countObj
}

//? console.log(count("aba"), { a: 2, b: 1 });
//? console.log(count(""), {});   

//+ Categorize New Member
//+ The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. Input Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap. Output Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
    let arr = []
    for (var i = 0; i < data.length; i++) {
        arr[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }
    return arr
}

//?console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
//?console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
//?console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])

//+ Find the stray number
//+ You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
    let result = numbers.filter((l, i, a) => a.indexOf(l) == a.lastIndexOf(l))
    return +result
}

//? console.log(stray([1, 1, 2]), 2);
//? console.log(stray([1, 2, 1]), 2);
//? console.log(stray([2, 1, 1]), 2);

//+ You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//+ Letters are case sensitive, so "a" is considered a different type of stone from "A".
//+ Constraints: 1 <= jewels.length, stones.length <= 50 jewels and stones consist of only English letters. All the characters of jewels are unique.

function numJewelsInStones(jewels, stones) {
    const map = {}
    let count = 0

    for (const jewel of jewels) {
        map[jewel] = true
    }
    for (const stone of stones) {
        if (map[stone]) {
            count++
        }
    }
    return count
}

//? console.log(numJewelsInStones("aA", "aAAbbbb"), 3)
//? console.log(numJewelsInStones("z","ZZ"), 0)

//+ Return max letter count
//+ Given a string of characters, return the character that appears the most often.

function max(str) {
    let mapStr = {},
        count = 0,
        maxChar = null

    for (const l of str) {
        mapStr[l] = mapStr[l] + 1 || 1
    }
    for (const l in mapStr) {
        if (mapStr[l] > count) {
            count = mapStr[l]
            maxChar = l
        }
    }

    return maxChar
}

//? console.log(max("Hello World!"), "l")
//? console.log(max("abcdefghijkbcc"), 'c')

//+ Is it a number?
//+ Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s) {
    return /^-?\d+(\.\d+)?$/.test(s);
}

//? console.log(isDigit("s2324"), false);
//? console.log(isDigit("-234.4"), true); 

//+ Split Strings
//+ Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
    var arr = str.split('')
    var res = []

    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1]) res.push(arr[i] + arr[i + 1])
        else res.push(arr[i] + '_')
    }

    return res
}

//? console.log(solution("abcdef"), ["ab", "cd", "ef"]);
//? console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//? console.log(solution(""), []);

//+ Contains Duplicate
//+ Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(array) {
    let dupMap = {}

    for (const l of array) {
        let num = array[l]
        if (dupMap[num]) {
            return true
        } else {
            dupMap[num] = true
        }
    }
    return false
}

//? console.log(containsDuplicate([1,2,3,1]), true)
//? console.log(containsDuplicate([1,2,3,4]), false)
//? console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
//? console.log(containsDuplicate([2,14,18,22,22]), true)

//+ Majority Element
//+ Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums) {
    let map = {},
        // count = 0,
        majElem = nums[0]

    for (const num of nums) {
        map[num] = map[num] + 1 || 1
        if (map[num] > nums.length / 2) {
            majElem = num
        }
    }
    // for(const num in map){
    //     if(map[num] > count){
    //         count = map[num]
    //         majElem = num
    //     }
    // }
    return majElem
};

//? console.log(majorityElement([3,2,3]), 3)
//? console.log(majorityElement([2,2,1,1,1,2,2]), 2)

//+ ransom note
//+ Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function ransomNote(note, magazine) {
    const noteWords = note.split(' ');
    const magazineWords = magazine.split(' ');
    const magHash = {};
    let possible = true;

    for (const word of magazineWords) {
        magHash[word] = magHash[word] + 1 || 1
    }
    for (const word of noteWords) {
        if (magHash[word]) {
            magHash[word]--
            if (magHash[word] < 0) return false
        } else {
            return false;
        }
    }
    return possible
}

//? console.log(ransomNote("sit ad est sint", magazine), true);
//? console.log(ransomNote("sit ad est love", magazine), false);
//? console.log(ransomNote("sit ad est sint in in", magazine), true);
//? console.log(ransomNote("sit ad est sint in in in in", magazine), false);

//+ Two Sums
//+ Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr, sum) {
    const pairs = [];
    const nums = {};

    for (const num1 of arr) {
        const num2 = sum - num1
        if (nums[num2]) {
            pairs.push([num1, num2]);
        } else {
            nums[num1] = 1
        }
    }
    return pairs
}

//? console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//? console.log(twoSum([5, 6, 4, 3, 2], 9), [[4, 5], [3, 6]]);
//? console.log(twoSum([4, 3, 5, 2, 4], 8), [[5, 3], [4, 4]]);

//+ Count the smiley faces!
//+ Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces. Rules for a smiling face: Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ; A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~ Every smiling face must have a smiling mouth that should be marked with either ) or D No additional characters are allowed except for those mentioned.

function countSmileys(arr) {
    const smileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (smileys.includes(arr[i])) {
            count++
        }
    }
    return count
}

//? console.log(countSmileys([]                             ), 0);
//? console.log(countSmileys([':D',':~)',';~D',':)']        ), 4);
//? console.log(countSmileys([':)',':(',':D',':O',':;']     ), 2);
//? console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

//+ Find the missing letter
//+ Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array. You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

const findMissingLetter = (array) => {
    // we can skip the 1st letter
    for (let i = 1; i < array.length; i++) {
        // get the char code of the previous letter
        const prev = array[i - 1].charCodeAt();
        // get the char code of the current letter
        const current = array[i].charCodeAt();

        if (current - prev !== 1) { // if the difference between current and previous is not 1
            // get the character after the previous 
            return String.fromCharCode(prev + 1);
        }
    }

    return null; // if nothing is found
}

//? console.log(findMissingLetter(['a', 'b', 'c', 'e'])); // d
//? console.log(findMissingLetter(['l', 'n', 'o', 'p'])); // m
//? console.log(findMissingLetter(['s', 't', 'u', 'w', 'x'])); // v
//? console.log(findMissingLetter(['a', 'b', 'c'])); // null

//+ Is a number prime?
//+ Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime. Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < (num / 2) + 1; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//? console.log(isPrime(0),  false);
//? console.log(isPrime(1),  false);
//? console.log(isPrime(2),  true);
//? console.log(isPrime(73), true);
//? console.log(isPrime(75), false);
//? console.log(isPrime(-1), false)

//+ The Supermarket Queue
//+ There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out! input customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out. n: a positive integer, the number of checkout tills. output The function should return an integer, the total time required.

function queueTime(customers, n) {
    let w = new Array(n).fill(0);
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w));
        w[idx] += t;

    }
    return Math.max(...w);
}

//? console.log(queueTime([5,3,4],    1), 12);
//? console.log(queueTime([10,2,3,3], 2), 10);
//? console.log(queueTime([2,3,10,2], 2), 12);

//+ Find the divisors!
//+ Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    let arr = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            arr.push(i)
        }
    }
    return arr.length ? arr : `${integer} is prime`
}

//? console.log(divisors(14),        [2, 7]);
//? console.log(divisors(15),        [3, 5]);
//? console.log(divisors(12),  [2, 3, 4, 6]);
//? console.log(divisors(20), [2, 4, 5, 10]);
//? console.log(divisors(13), "13 is prime");
//? console.log(divisors(97), "97 is prime");

//+ Find The Parity Outlier
//+ You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    let oddArr = [],
        evenArr = []
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArr.push(integers[i])
        } else {
            oddArr.push(integers[i])
        }
    }
    return oddArr.length < evenArr.length ? oddArr[0] : evenArr[0]
}

//+ filter solution 

function findOutlier(integers) {
    const even = integers.filter(int => int % 2 === 0);
    const odd = integers.filter(int => int % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}

//? console.log(findOutlier([0, 1, 2]),        1)
//? console.log(findOutlier([1, 2, 3]),        2)
//? console.log(findOutlier([2, 6, 8, 10, 3]), 3)
//? console.log(findOutlier([0, 0, 3, 0, 0]),  3)
//? console.log(findOutlier([1, 1, 0, 1, 1]),  0)

//+ Highest Scoring Word
//+ Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

function high(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}

//? console.log(high('man i need a taxi up to ubud'),                'taxi');
//? console.log(high('what time are we climbing up the volcano'), 'volcano'); 
//? console.log(high('take me to semynak'),                       'semynak');   
//? console.log(high('aa b'),                                          'aa');
//? console.log(high('b aa'),                                           'b');
//? console.log(high('bb d'),                                          'bb');
//? console.log(high('d bb'),                                           'd');
//? console.log(high('aaa b'),                                        'aaa');

//+ Two Sum
//+ Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2). For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted. The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target && i != j) {
                return [i, j]
            }
        }
    }
}

//? console.log(twoSum([1,2,3],          4),     [0,2])
//? console.log(twoSum([1234,5678,9012], 14690), [1,2])
//? console.log(twoSum([2,2,3],          4),     [0,1])
//? console.log(twoSum([2,3,1],          4),     [1,2])

//+ First non-repeating character
//+ Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string. For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string. As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'. If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    let low = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (low.indexOf(low[i]) === low.lastIndexOf(low[i])) {
            return s[i]
        }
    }
    return '';
}

//? console.log(firstNonRepeatingLetter('a'),       'a');
//? console.log(firstNonRepeatingLetter('stress'),  't');
//? console.log(firstNonRepeatingLetter('moonmen'), 'e');

//+ Roman Numerals Encoder

//+ Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer. Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

const solution = (num) => {
    const roman = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };

    let str = "";
    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
};

//? console.log(solution(1000), 'M', '1000 should, "M"')
//? console.log(solution(1001), 'MI', '1001 should, "MI"')
console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007), 'MMVII', '2007 should, "MMVII"')
console.log(solution(2008), 'MMVIII', '2008 should, "MMVIII"')

