/* Add two English words together!

Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten" 
Input - Will be between zero and ten and will always be in lower case

Output - Word representation of the result of the addition. Should be in lower case

 */

//solution

class Arith{
    constructor(number){
      this.number = number
      this.arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                 "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
                 "nineteen", "twenty"]
    }
   add(n){
     return this.arr[this.arr.indexOf(n) + this.arr.indexOf(this.number)]
   }
 }