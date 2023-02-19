<?php
//+ Even or Odd
//+ Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(int $n): string{
    return $n % 2 == 0 ? "Even" : "Odd";
}

//? echo "Even", even_or_odd(2);
//? echo "Even", even_or_odd(0);
//? echo "Odd", even_or_odd(7);
//? echo "Odd", even_or_odd(1);
//? echo "Odd", even_or_odd(-1);

//+Is there a vowel in there?
//+ Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u). If they are, change the array value to a string of that vowel. Return the resulting array.

function isVow(array $a){
    $total = [];

    for ($i = 0; $i < count($a); $i++) {
        if ($a[$i] == 97 || $a[$i] == 101 || $a[$i] == 105 || $a[$i] == 111 || $a[$i] == 117) {
            array_push($total, chr($a[$i]));
            continue;
        }
        array_push($total, $a[$i]);
    }

    return $total;
}

//? echo ["e",121,"e"], isVow([101,121,101]);
//? echo ["u","a",107,"u"], isVow([117,97,107,117]);
//? echo ["u","a",107,"u"], isVow([105,97,107,111]);
//? echo [107,98,"",127], isVow([107,98,101,127]);
//? echo ["u","a",107,"u"], isVow([111,105,101,97]);

//+ Sum of positive
//+ You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20 Note: if there is nothing to sum, the sum is default to 0.

function positive_sum($arr){
    $total = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] > 0) {
            $total += $arr[$i];
        }
    }
    return $total;
}

//? echo 15, positive_sum([1, 2, 3, 4, 5]);
//? echo 13, positive_sum([1, -2, 3, 4, 5]);
//? echo 0, positive_sum([]);
//? echo 0, positive_sum([-1, -2, -3, -4, -5]);
//? echo 9, positive_sum([-1, 2, 3, 4, -5]);

//+ Convert a Number to a String!
//+ We need a function that can transform a number (integer) into a string. What ways of achieving this do you know?

function numberToString($num){
    return "{$num}";
    // return (string) $num;
}

//? echo '67', numberToString(67);
//? echo '51', numberToString(51);
//? echo '397', numberToString(397);
//? echo '799', numberToString(799);

//+ Remove First and Last Character
//+ It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function remove_char(string $s): string{
    return substr($s, 1, -1); //Returns a substring that starts at 1 (2nd character) and goes to final character -1
}
/* 
function remove_char(string $s) : string
{
    $x = str_split($s);
    array_pop($x);
    array_shift($x);
    $imp = implode("", $x);

    return $imp;
} 
*/

//? echo 'loquen', remove_char('eloquent');
//? echo 'ountr', remove_char('country');
//? echo 'erso', remove_char('person');
//? echo 'lac', remove_char('place');

//+ Square(n) Sum
//+ Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function square_sum($numbers) : int {
    $arr = [];
    for($i = 0; $i < count($numbers); $i++){
      $squared = pow($numbers[$i] , 2);
      array_push($arr, $squared);
    }
    return (int)array_reduce($arr, fn($carry, $number) =>
    $carry + $number);
}

//? echo square_sum([1,2]), 5;
//? echo square_sum([0, 3, 4, 5]), 50;
//? echo square_sum([]), 0;
//? echo square_sum([-1,-2]), 5;
//? echo square_sum([-1,0,1]), 2;

//+ Grasshopper - Summation
//+ Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation($n) {
    $total = 0;
    for($i = 0; $i <= $n; $i++){
      $total += $i;
    }
    return $total;
}

//? echo summation(1), 1;
//? echo summation(2), 3;
//? echo summation(3), 6;
//? echo summation(4), 10;
//? echo summation(5), 15;

//+ Opposite number
//+ Very simple, given an integer or a floating-point number, find its opposite.

function opposite($n) {
    return $n * -1;
}

//? echo opposite(1), -1;
//? echo opposite(14), -14;
//? echo opposite(-34), 34;

//+ String repeat
//+ Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr($n, $str){
    return str_repeat($str, $n);
}

echo "***", repeatStr(3, "*");
echo "@@", repeatStr(2, "@");
echo "!", repeatStr(1, "!");

//+ Remove String Spaces
//+ Simple, remove the spaces from the string, then return the resultant string.

function no_space(string $s): string {
    return str_replace(" ", "", $s);
}

//? echo '8j8mBliB8gimjB8B8jlB', no_space('8 j 8   mBliB8g  imjB8B8  jl  B');
//? echo '88Bifk8hB8BB8BBBB888chl8BhBfd', no_space('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd');
//? echo '8aaaaaddddr', no_space('8aaaaa dddd r     ');

//+ Descending Order
//+ Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.