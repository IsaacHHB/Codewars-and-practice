// ES6 string addition
//It is easy to join two strings together like this string1 + string2. Another way to get the desired result would be with string1.concat(string2) ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings. + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat! If one of the arguments is a number your code must coerce it into being a string.

function joinStrings(string1, string2) {
    return `${string1} ${string2}`
}

//Credit Card Mask
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc){
    if (cc.length > 4) {
      let result = '';
      return cc.split('').reduce((acc, cur, i) => {
        if (cc.length - i > 4) {
          result += '#';
        } else {
          result += cur;
        }
        return result;
      }, '');
    } else {
      return cc;
    }
  }