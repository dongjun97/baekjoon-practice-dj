/**
 * 1330번
 * 
 * 문제
 * (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
 *      472 ---1
 * x    385 ---2
 * ----------
 *     2360 ---3
 *    3776  ---4
 *   1416   ---5
 * ----------
 *   181720 ---6
 * (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
 * 
 * 입력
 * 472
 * 385
 * 
 * 출력
 * 2360
 * 3776
 * 1416
 * 181720
 * 
 * let n = require("fs").readFileSync('/dev/stdin').toString().split(' ');
 */
let n = `472
385`.toString().trim().split('\n').map(Number)
let a = n[0]
let b = n[1]
let t = Math.floor(b / 100);
let s = Math.floor(b / 10) - (t * 10);
let f = b % 10;
console.log(a * f);
console.log(a * s);
console.log(a * t);
console.log(a * b);
