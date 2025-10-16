/* You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.

 */

//solution

const top3 = (products, amounts, prices) =>
  products
    .map((name, index) => ({ name, index, revenue: amounts[index] * prices[index] }))
    .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
    .slice(0, 3)
    .map(product => product.name)