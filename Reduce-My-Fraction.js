/* Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

 */

//solution

const reduce = fraction => {
    const gcd = (numerator, denominator) => denominator ? gcd(denominator, numerator % denominator) : numerator;
    return fraction.map(val => val / gcd(...fraction))
  };