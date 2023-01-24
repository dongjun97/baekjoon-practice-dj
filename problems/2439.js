/**
 * 2439번
 * 
 * 문제
 * 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
 * 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
 * 
 * 입력
 * 5
 * 
 * 출력
 *     *
 *    **
 *   ***
 *  ****
 * *****
 * 
 * let n = require("fs").readFileSync('/dev/stdin').toString().split(' ');
 */
let n = `5`.toString()
for (let i = 1; i <= Number(n); i++) {
    console.log(' '.repeat(Number(n) - i) + '*'.repeat(i))
}
