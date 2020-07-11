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
- Have a profit variable set to 0
- Have a minimumElem variable set to the first element in input array
- Have a maxElem variable declared to nothing for now
- Loop through the array starting at index 1, 
   - check if element at current index (initially index 1) is smaller than initial minimumElem then reset minimumElem to 
   this element at this current index
      - If element at current index + 1 (i+1) is larger than element at current index i then set the profit variable to element at 
      index i+1 minus element at index i
      - then set minimumElem variable to element at i+2  
   - else, if element at index 1 is bigger than initial minimumElem then do nothing, it'll go to the next index at index 2 & check again
 */

// var maxProfit = function (prices) {
//   let profit = 0;

//   let minElem = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minElem) {
//       minElem = prices[i];
//       if (prices[i + 1] > minElem && prices[i + 2] < prices[i + 1]) {
//         let difference = prices[i + 1] - prices[i];
//         profit += difference;
//         minElem = prices[i + 2];
//       }
//     } else {
//       while (minElem < prices[i]) {
//         let maxElem = prices[i];
//         continue;
//       }
//     }
//   }

//   return profit;
// };

var maxProfit = function (prices) {
  let profit = 0;

  let minElem = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let maxDifference = 0;
    while (prices[i] < minElem) {
      minElem = prices[i];
    }
    while (prices[i + 1] - prices[i] > maxDifference) {
      maxDifference = prices[i + 1] - prices[i];
      profit += maxDifference;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
