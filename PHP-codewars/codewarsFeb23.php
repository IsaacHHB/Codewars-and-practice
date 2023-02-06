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
}

//? echo '67', numberToString(67);
//? echo '51', numberToString(51);
//? echo '397', numberToString(397);
//? echo '799', numberToString(799);
