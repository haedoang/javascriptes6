//함수와 추상적사고

"use strict"

//윤년

// const year = new Date().getFullYear();
//
// //console.log(year); //2019
//
// if(year%4 !==0){
//   console.log(`${year} is NOT a leap year.`);
// } else if(year % 100 != 0) {
//   console.log(`${year} IS a leap year.`);
// } else if (year % 400 !=0) {
//   console.log(`${year} is NOT a leap year.`);
// }
// else {
//   console.log(`${year} IS a leap year`);
// }



//countdown

// var i;
// for(i=5;i>=0;i--){
//   setTimeout(function(){
//     console.log(i===0 ? "go" : i);
//   },(5-i)*1000);
// } // :: 함수가 루프 안에서 실행되지 않고 루프 종료 후 실행됨 -1출력

//클로저사용

// function loopBody(i){
//   setTimeout(function(){
//     console.log(i===0 ? "go!" : i);
//   },(5-i)*1000);
// }
//
// var i;
// for(i=5;i>=0;i--){
//   loopBody(i);
// }

//익명함수로 변경하기

// var i;
// for(i=5;i>=0;i--){
//   (function(a){
//     setTimeout(function(){
//       console.log(a===0 ? "go!" : a);
//     },(5-i)*1000);
//   })(i);
// }

//배열 안의 함수

// const sin = Math.sin;
// const cos = Math.cos;
// const theta = Math.PI/4;
// const zoom =2;
// const offset = [1,-3];
//
// const pipeline = [
//   function rotate(p){
//     return {
//       x : p.x * cos(theta) - p.y * sin(theta),
//       y : p.x * sin(theta) + p.y * cos(theta)
//     };
//   },
//   function scale(p){
//     return {
//       x : p.x * zoom,
//       y : p.y * zoom
//     };
//   },
//   function translate(p){
//     return {
//       x : p.x + offset[0],
//       y : p.y + offset[1]
//     }
//   }
// ];
//
// const p = {x:1,y:1};
// let p2 = p;
// for(let i =0; i<pipeline.length;i++){
//   p2 = pipeline[i](p2);
//   console.log(p2);
// }



//함수안에 함수

// function sum(arr,f){
//   if(typeof f !='function'){
//     f = x => x;
//   }
//
// return arr.reduce((a,x) => a += f(x),0);
// }
//
// console.log(sum([1,2,3]));
// console.log(sum([1,2,3],x=>x*x));
// console.log(sum([1,2,3],x => Math.pow(x,3)))

//재귀

// function findNeedle(haystack){
//   if(haystack.length === 0){
//     return "no haystack here!";
//   }
//   if(haystack.shift() === 'needle'){
//     //console.log("실행되나?")
//     return "found it!"
//   }
//   console.log(haystack)
//   return findNeedle(haystack);
// }
//
// console.log(findNeedle(['hay','hay','hay','hay','hay','needle','hay','hay','hay']));
