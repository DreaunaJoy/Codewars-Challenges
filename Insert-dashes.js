/* Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).

 */

// solution

function insertDash(num) {
    var s = num + '', output = '';
    for (var i = 0; i < s.length; i++) { output += s[i] + (s[i] % 2 * s[i+1] % 2 ? '-' : '') }
    return output;
 }