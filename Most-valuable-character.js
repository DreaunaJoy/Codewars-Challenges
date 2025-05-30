/* In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
More examples in test cases. Good luck!

 */

//solution

const solve = function( str ) {
    let arr = [...str].map( el => str.lastIndexOf(el) - str.indexOf(el) ) 
    arr = arr.map( (el, i)=> el === Math.max(...arr) ? str[i] : '' )
    return arr.filter(el => el).sort()[0]
  }