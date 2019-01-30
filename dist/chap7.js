'use strict';

//IIFE
// const f = (function(){
//
//   console.log("즉시실행");
//   let count =0;
//   return function(){
//     return `I have been called ${++count} time(s).`;
//   }
// })();
//
// //
// console.log("1번째 호출");
// console.log(f());
//
// console.log("2번째 호출");
// console.log(f());


//호이스팅

// if(x!==3){
//   console.log(y);
//   var y = 5;
//   if( y === 5){
//     var x = 3;
//   }
//   console.log(y);
// }
// if( x===3){
//   console.log(y);
// }

var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);