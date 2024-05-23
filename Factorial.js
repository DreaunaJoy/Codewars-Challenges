/* Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

 */

// solution

function factorial(n){
    let sum = 1;
     for (let i = 1; i <= n; i++){
       sum = sum * i;
     }
     return sum; 
   
   }