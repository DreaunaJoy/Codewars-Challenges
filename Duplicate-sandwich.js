/* In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

Your task is to output a list of everything inbetween both occurrences of this element in the list.

Examples:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"
Notes
All elements will be the same datatype.
All used elements will be primitive.

*/

//solution

const duplicateSandwich = (list) => {
    let duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a))
    return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated))
  }