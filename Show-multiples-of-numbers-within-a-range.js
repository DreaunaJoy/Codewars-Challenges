/* Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

*/

//solution

const multiples = (s1, s2, s3) =>
  [...Array(s3 - s1)].map((_, idx) => idx + s1).filter(val => !(val % s1 || val % s2));