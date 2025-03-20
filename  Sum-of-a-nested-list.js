/* Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10

*/

//solution

const sumNested = arr =>
  arr.reduce((pre, val) => pre + (Array.isArray(val) ? sumNested(val) : val), 0);