/* Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal

*/

// solution

function compare(s1, s2) {
    function sum(s) {
      let a = (s||'').toUpperCase().split('');
      return a.every( (v) => /[A-Z]/.test(v) ) ? a.reduce( (r, v) => r + v.codePointAt(0),0) : 0;
    }
    return sum(s1) === sum(s2);
  }