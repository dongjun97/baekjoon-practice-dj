/**
 * 2741번
 * 
 * 문제
 * 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
 * 
 * 입력
 * 5
 * 
 * 출력
 * 1
 * 2
 * 3
 * 4
 * 5
 * 
 * let n = require("fs").readFileSync('/dev/stdin').toString().split(' ');
 */
let n = `5`.toString()
let a = ''
for(let x = Number(n); x > 0; x--){
  a += x +'\n'
}
console.log(a);
