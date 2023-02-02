<?php
//+ Even or Odd
//+ Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(int $n): string{
    return $n % 2 == 0 ? "Even" : "Odd";
}

echo "Even", even_or_odd(2);
echo "Even", even_or_odd(0);
echo "Odd", even_or_odd(7);
echo "Odd", even_or_odd(1);
echo "Odd", even_or_odd(-1);