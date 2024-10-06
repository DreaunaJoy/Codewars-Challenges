/* Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

Examples
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]

*/

// solution

function last(first, ...rest) {
    if (rest.length) return rest.pop();
    if (first.length) return [...first].pop();
    return first;
  }