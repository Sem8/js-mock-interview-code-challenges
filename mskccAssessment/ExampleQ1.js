/* From an array of integers, find the lowest missing integer in the input array
 */

// make variable called checker start at 1

// if checker is in sorted input array using indexOf method then increment 
// checker then  
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let checker = 1;

    A.sort((a, b) => {
        return a-b
    });
    // return A;
    while (A.indexOf(checker) !== -1 ) {
        checker++;
    }
    return checker;
};

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));