/* Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"

*/

//solution

const nextLetter = str =>
  str.replace(/[a-z]/gi, match => {
    const code = match.charCodeAt()

    if (code === 90) return 'A'
    else if (code === 122) return 'a'
    else return String.fromCharCode(code + 1)
  })