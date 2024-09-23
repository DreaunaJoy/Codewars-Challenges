/* Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"

*/

// solution

function evenOrOdd(str) {
  
    const diff = [ ...str ]
      .map(Number)
      .reduce((a, b) => b % 2 ? a - b : a + b, 0);
    
    if (diff > 0)
      return 'Even is greater than Odd';
    
    if (diff < 0)
      return 'Odd is greater than Even';
    
    return 'Even and Odd are the same';
    
  }