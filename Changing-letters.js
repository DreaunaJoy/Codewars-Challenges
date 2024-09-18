/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

 */

// solution

const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');