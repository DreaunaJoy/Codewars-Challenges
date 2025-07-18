/* You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]

*/

//solution

function findMissingNumbers(arr){
    var result = [], c = 0;
    for (let a=arr[0], b=arr[arr.length-1]; a < b; a++) {
      (arr[c] !== a) ? result.push(a) : c++;
    }
    return result;
  }