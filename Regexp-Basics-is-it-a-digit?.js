/* Implement String#digit? (in Java StringUtils.isDigit(String)), w
hich should return true if given object is a digit (0-9), false otherwise.
*/

//solution


String.prototype.digit = function() {
    return this.length === 1 && '0' <= this && this <= '9';
  };