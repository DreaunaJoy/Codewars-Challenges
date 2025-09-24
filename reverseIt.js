/* Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

Examples of inputs and subsequent outputs:

"Hello" -> "olleH"

"314159" -> "951413"

[1,2,3] -> [1,2,3]

*/

//solution

function reverseIt(data){
    switch (typeof data){
    case 'string':return data.split("").reverse().join("");
    case 'number':return parseFloat(String(data).split("").reverse().join(""));
    default: return data;
    }
   }