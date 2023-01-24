/**
 * 1000번
 * 
 * 문제
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 
 * 입력
 * 1 2
 * 
 * 출력
 * 3
 * 
 * let i = require("fs").readFileSync('/dev/stdin').toString().split(' ');
 */
let n = `1 2`.toString().trim().split(' ').map(Number)
console.log(n[0] + n[1])
