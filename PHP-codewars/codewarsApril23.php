<?php
// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.For example:Given [34, 15, 88, 2] your solution will return 2Given [34, -345, -1, 100] your solution will return -345You can assume, for the purpose of this kata, that the supplied array will not be empty.

function smallestInteger ($arr) {
    $sorted = sort($arr);
    return $arr[0];
}