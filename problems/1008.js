/**
 * 1008번
 * 
 * 문제
 * 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
 * 
 * 입력
 * 1 3
 * 
 * 출력
 * 0.33333333333333333333333333333333
 * 
 * let n = require("fs").readFileSync('/dev/stdin').toString().split(' ');
 */
let n = `1 3`.toString().trim().split(' ').map(Number)
console.log(n[0]/n[1])
