//CODE WARS!!!---------------------
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
greet("Ryan")


// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  var sum = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }else{
      
    }
  }
  return sum;
}
positiveSum([1,-4,7,12])

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num < 0 ? num : -1 * num;
}


function areYouPlayingBanjo(name) {

  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}