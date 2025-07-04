/* Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true

*/

//solution

function numbers () {
    var params = Array.prototype.slice.call(arguments)
    
    return params.every(isNumber);
  }
  
  function isNumber (arg) {
    return typeof arg === 'number';
  }/