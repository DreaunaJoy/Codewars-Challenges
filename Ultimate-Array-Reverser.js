/* Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

*/

//solution

const ultimateReverse = (arr, str = [...arr.join``].reverse().join``, start = 0) => 
  arr.reduce((a,c) => (a.push(str.slice(start,start+c.length)), start+=c.length, a), []);