/* Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

 */

//solution

function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
  }