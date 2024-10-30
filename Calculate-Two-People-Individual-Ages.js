/* Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

*/

// solution

const getAges = (sum, difference) =>
  sum < 0 || difference < 0 || sum < difference ? null : [(sum + difference) / 2, (sum - difference) / 2];