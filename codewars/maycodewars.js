//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=> a + b, 0) + arr2.reduce((a,b)=> a + b, 0); 
  }

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

  function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}