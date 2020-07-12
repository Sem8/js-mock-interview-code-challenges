/* Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.


Constraints:

1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4
 */

/*Pseudocode:
- Declare a profit variable initialized to 0
- Declare a maxDifference variable initialized to 0
- Loop through the array and check that while input array element at current index plus 1 (i + 1) minus element from current index i is
more than maxDifference then re-set maxDifference to prices[i+1] - prices[i]
- Outside while loop, let profit += maxDifference and re-set maxDifference to 0
- outside for loop, return profit.
 */

var maxProfit = function (prices) {
  let profit = 0;
  let maxDifference = 0;

  for (let i = 0; i < prices.length; i++) {
    while (prices[i + 1] - prices[i] > maxDifference) {
      maxDifference = prices[i + 1] - prices[i];
    }
    profit += maxDifference;
    maxDifference = 0;
  }

  return profit;
};

/*Sligtly better refactored code solution from Kevin Naughton
but same idea as mine
*/

// var maxProfit = function (prices) {
//   let profit = 0;

//   if (prices.length <= 0) {
//     return 0;
//   }

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i + 1] > prices[i]) {
//       profit += prices[i + 1] - prices[i];
//     }
//   }

//   return profit;
// };

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([100, 180, 260, 310, 40, 535, 695])); // 865
