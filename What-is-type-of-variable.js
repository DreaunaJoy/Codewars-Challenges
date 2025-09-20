/* Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'

*/

//solution

const type = (value) => {
    if (Array.isArray(value)) return "array";
    if (value instanceof Date) return "date";
    if (value === null) return "null";
    
    return typeof value;
  };