/**
 * 1330번
 * 
 * 문제
 * 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
 * 
 * 입력
 * 1 2
 * 
 * 출력
 * <
 * 
 * let n = require("fs").readFileSync('/dev/stdin').toString().split(' ');
 */
let n = `1 3`.toString().trim().split(' ').map(Number)
let a = n[0]
let b = n[1]
if(a > b) console.log('>')
else if(a < b) console.log('<')
else console.log('==')
