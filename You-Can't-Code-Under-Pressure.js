/* Code as fast as you can!

You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

 */

//solution

function Counter() {
    var _count = 0;
  
    this.check = function() {
      return _count;
    }
    this.increment = function() {
      _count++;
    }
  };