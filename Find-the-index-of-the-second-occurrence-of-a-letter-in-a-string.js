/* In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.

Examples:

for inputs  "Hello world!!!", 'l'  ->  return 3
for inputs  "Hello world!!!", 'A'  ->  return -1

*/

//solution

function secondSymbol(s, symbol) {
    const index = s.indexOf(symbol);
    return s.indexOf(symbol, index + 1)
  }