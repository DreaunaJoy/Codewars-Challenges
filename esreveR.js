/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

*/

// solution

reverse = function(array) {
    return array.reduceRight(function(a, v){ return a.push(v), a }, []);
  }