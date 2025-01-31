/* Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

*/

//solution

const reverseAndMirror = (s1, s2) =>
  (fn => `${fn(s2)}@@@${fn(s1)}${[...fn(s1)].reverse().join(``)}`)
  (str => [...str].map(val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]()).reverse().join(``));