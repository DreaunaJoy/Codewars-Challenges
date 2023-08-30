/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

//solution

function find_average(array) {
    return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
  }

