/* Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
  
  */

  // solution

  const scrollingText = (text) =>{
    let word = text[text.length-1].toUpperCase() + text.toUpperCase().slice(0, text.length-1)
    return Array.from({length:text.length}, x => word = word.slice(1) + word[0])
  }