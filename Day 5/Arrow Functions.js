//https://www.hackerrank.com/challenges/js10-arrows/problem

/*
//statement 
If the element is even, multiply the element by 2
If the element is odd, multiply the element by 3

The function must then return the modified array.
*/


function modifyArray(nums) {
    return nums.map(e => e & 1 ? e * 3 : e * 2);
}
