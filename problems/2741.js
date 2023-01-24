/**
 * 2741번
 * 
 * 문제
 * 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
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
for(let x = 1; x <= Number(n); x++){
  a += x +'\n'
}
console.log(a);
