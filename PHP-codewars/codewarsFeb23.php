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
echo ["u","a",107,"u"], isVow([105,97,107,111]);
echo [107,98,"",127], isVow([107,98,101,127]);
