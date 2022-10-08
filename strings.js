//! charAt
//* What is does: Takes in an index and a string and returns the specific character at that location

//* How it works: See if the specified index passed into the method matches any index available withtin the string, then returns the character at the index, if available.

//* Time complexity: 0(1)

//* Examples
// let text1 = "Sample Text"
// console.log(1,text1.charAt(0))
// console.log(2, text1.charAt(text1.length-1))
// console.log(3, text1.charAt('0'))
// console.log(4, text1.charAt('test'))



//?--------------------------------------------------------------------------------------------------
//! charCodeAt
//* What is does: Takes in an index value and a string and returns an int for the UTF-16 value located at that index 

//* How it works: See if the specified index passed into the method matches any index available withtin the string, then returns the UTF-16 at the index, if available. if the integer value is larger than 655536, then charCodeAt(i+1) should be used to get the other half of the value pair.

//* Time complexity: 0(1) ?

//* Examples
// let text2 = "Sample Text!"
// console.log(1,text2.charCodeAt(0))
// console.log(2,text2.charCodeAt(text2.length-1))
// console.log(3,text2.charCodeAt(1))
// console.log(4,text2.charCodeAt(15))


//?--------------------------------------------------------------------------------------------------
//! concat
//* What is does: joins multiple strings together and outputs a single string---- or arrays

//* How it works: takes in a calling string and concatinates all strings passsed in as arguments to the method in sequence

//* Time complexity:

//* Examples
// let text3 = "Sample Text!"
// console.log(text3.concat('!'))
// console.log(text3.concat('!', 'This is a second argument!'))
// console.log(text3.concat('!', 9000))
// console.log(text3.concat(true))
// console.log(text3.concat("\uD83D\uDE00"))
// console.log(text3.concat([1,2,3]))

//?--------------------------------------------------------------------------------------------------
//! includes
//* What is does: takes in a string as an arg and checks to see if the calling string contains the arg and returns a boolean. The method is case-sensitive. Alse has an optional arg for the position at which to begin the search.

//* How it works:

//* Time complexity:

//* Examples
let text4 = "Sample Text!"

//?--------------------------------------------------------------------------------------------------
//! indexOf
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! match
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! repeat
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! replace
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! search
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! slice
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! split
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! substr
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! toLowerCase
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! toUpperCase
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------
//! trim
//* What is does:

//* How it works:

//* Time complexity:

//* Examples


//?--------------------------------------------------------------------------------------------------