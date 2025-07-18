/* You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

 */

//solution

function arraySum(arr) {
    return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
  }