/* Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/

// solution

function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
  }