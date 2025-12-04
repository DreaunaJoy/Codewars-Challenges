/* Reverse and invert all integer values in a given list.

[1,12,'a',3.4,87,99.9,-42,50,5.6] --> [-1,-21,-78,24,-5]
Remove all types other than integer. */

//solution

function reverseInvert(array){
    return array.filter(x => Number.isInteger(x)).map(x => {
      const a = Math.abs(x);
      const r = +[...a.toString()].reverse().join('');
      return x >= 0 ? -r : r;
    });
  }

