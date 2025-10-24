/* You were given a string of integer temperature values, each separated by a space character.

Create a function that return its lowest value, or None/null/Nothing if the string is empty.

*/

//solution

function lowestTemp(t) {
    return t ? Math.min(...t.split(' ')) : null;
  }