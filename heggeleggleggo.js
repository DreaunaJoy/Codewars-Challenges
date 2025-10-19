/* Egg Talk.

Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

Example
hello => heggeleggleggo

eggs => egegggeggsegg

FUN KATA => FeggUNegg KeggATeggA

 */

//solution

const heggeleggleggo = word => word.replace(/([^aeiou\s])/gi, "$1egg");