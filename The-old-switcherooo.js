/* Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

'abc'      --> '123'
'ABC'      --> '123'
'codewars' --> '315452311819'
'abc-#@5'  --> '123-#@5'

*/

//solution

function encode(str) {
    return str.replace(/[a-z]/gi, c => c.charCodeAt() - (c < "a" ? 64 : 96))
  }