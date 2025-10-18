/* Task:
You have to write a function pattern which creates the following pattern up to n/2 number of lines.

If n <= 1 then it should return "" (i.e. empty string).
If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.
Examples:
n = 8:

22
4444
666666
88888888
n = 5:

22
4444
Note: There are no spaces in the pattern.

Hint: Use \n in string to jump to next line.

 */

//solution

function pattern(n) {

    let res = '';
    
    for (let i = 2; i <= n; i += 2)
      res += "\n" + `${i}`.repeat(i);
      
    return res.slice(1);
    
  }