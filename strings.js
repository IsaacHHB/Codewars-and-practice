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

//* How it works: Searches each character from the starting index value(0 if not specified in the optional arg), and returns candidates that match the input search value. If all returned candidates match the input search vvalue in the same order, then returns true, else false

//* Time complexity:

//* Examples
let text4 = "Sample Text!"
// console.log(1, text4.includes('Sample'))
// console.log(2, text4.includes('sample'))
// console.log(3, text4.includes('T'))
// console.log(4, text4.includes('!'))

//?--------------------------------------------------------------------------------------------------
//! indexOf
//* What is does: takes in the string as an arg and searches the calling string for an occurrence of the search string. Returns the index value of the first occurrence. Can take a second, optional arg to start at specific index within the calling string.

//* How it works:

//* Time complexity:

//* Examples
let text5 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! match
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text6 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! repeat
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text7 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! replace
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text8 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! search
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text9 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! slice
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text10 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! split
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text11 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! substr
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text12 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! toLowerCase
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text13 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! toUpperCase
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text14 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------
//! trim
//* What is does:

//* How it works:

//* Time complexity:

//* Examples
let text15 = "Sample Text!"


//?--------------------------------------------------------------------------------------------------