/* Fix the code snippet below
 */

// Original code snippet
function solution(A) {
    var ans = 0;
    for (i = 1; i < A.length; i++) {
        if (ans > A[i]) {
            ans = A[i];
        }
    }
    return ans;
}

console.log(solution([-1, 1, -2, 2]));
console.log(solution([-1, 1, 3, 2]));
console.log(solution([-1, 3, -10, 2]));

// Fixed code snippet
function solution(A) {
    var ans = 0;
    for (i = 0; i < A.length; i++) {
        if (ans > A[i]) {
            ans = A[i];
        }
    }
    return ans;
}
