/* On a plane there are n points with integer coordinates points[i] = [xi, yi]. 
Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or 
diagonally (it means to move one unit vertically and one unit horizontally in one 
    second).
You have to visit the points in the same order as they appear in the array. 

Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> 
[1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
Example 2:

Input: points = [[3,2],[-2,2]]
Output: 5
*/

/* Pseudocode: My solution
- Declare a variable called seconds and initialize it to 0
- Declare an array called dummyCoord and initialize it to [0, 0]
- Loop through input matrix, points
   - Have a pointer called currentXCoord which will point to current array from points with first element from the array points[i[0]]
   - Have a pointer called currentYCoord pointing to current array from points with 2nd elemen from the array points[i[1]]
   - Have a pointer called nextXCoord which will point to next array from points with 1st element from the array points[i+1[0]]
   - Have a pointer called nextYCoord which will point to next array from points with 2nd element from the array points[i+1[0]]

   - have an if statement of if nextXCoord is less than currentXCoord and nextYCoord is less than currentYCoord
      - have a while loop of while nextXCoord is less than or equal to currentXCoord 
         -increment dummyCoord at 1st position (dummyCoord[0]++)
         - increment dummyCoord at 2nd position (dummyCoord[1]++)
 */

let minTimeToVisitAllPoints = (points) => {
  let seconds = 0;
  let dummyCoord = [0, 0];

  for (let i = 0; i < points.length - 1; i++) {
    dummyCoord = points[i];
    let nextXCoord = points[i + 1][0];
    let nextYCoord = points[i + 1][1];

    // Go diagonal:
    while (dummyCoord[0] !== nextXCoord && dummyCoord[1] !== nextYCoord) {
      if (dummyCoord[0] < nextXCoord) {
        dummyCoord[0]++;
      }
      if (dummyCoord[0] > nextXCoord) {
        dummyCoord[0]--;
      }
      if (dummyCoord[1] < nextYCoord) {
        dummyCoord[1]++;
      }
      if (dummyCoord[1] > nextYCoord) {
        dummyCoord[1]--;
      }
      seconds++;
    }

    // Change y-axis:
    while (dummyCoord[0] === nextXCoord && dummyCoord[1] !== nextYCoord) {
      if (dummyCoord[1] < nextYCoord) {
        dummyCoord[1]++;
        seconds++;
      }
      if (dummyCoord[1] > nextYCoord) {
        dummyCoord[1]--;
        seconds++;
      }
    }

    // Change x-axis:
    while (dummyCoord[0] !== nextXCoord && dummyCoord[1] === nextYCoord) {
      if (dummyCoord[0] < nextXCoord) {
        dummyCoord[0]++;
        seconds++;
      }
      if (dummyCoord[0] > nextXCoord) {
        dummyCoord[0]--;
        seconds++;
      }
    }
  }

  return seconds;
};

pointsOne = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
pointsTwo = [
  [3, 2],
  [-2, 2],
];

console.log(minTimeToVisitAllPoints(pointsOne)); // 7
console.log(minTimeToVisitAllPoints(pointsTwo)); // 5

// Solution 2: 64 ms, faster than 70.88% 
// Memory Usage: 36.8 MB, less than 24.76% of JavaScript online submissions 
var minTimeToVisitAllPoints = function(points) {
  if (points.length < 2) return 0;
  
  let time = 0;
  
  for (let i = 1; i < points.length; i++) {
  // Calculate the distances between current point and previous point for 
  // each axis
    const x = Math.abs(points[i - 1][0] - points[i][0]);
    const y = Math.abs(points[i - 1][1] - points[i][1]);
    
	// For each distance the time will be the max value between X and Y
    // So we can get the total time by plus the max value of each distance
    time += Math.max(x, y);
  }
  
  return time;
    
};
