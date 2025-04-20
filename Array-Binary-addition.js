/* Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

[1, 2]      --> "11"
[1, "a", 2] --> false / False (depending on the language)

*/

//solution

const arr2bin = arr => arr.every(Number.isInteger) && arr.reduce((sum, n) => sum + n, 0).toString(2);