'use strict'
//scope
// const x = 3;
//
// function f(){
//   console.log(x);
//   console.log(y);
// }
//
// {
//   const y = 5;
//   f();
// }


//closure
// let globalFunc;
// {
//   globalFunc = function(){
//
//   }
// }
//
// console.log(typeof globalFunc)
function celebrityName(firstName) {
    var nameIntro = "This is celebrity is ";
    // 이 내부 함수는 외부함수의 변수와 파라미터에 접근할 수 있습니다.
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
// var mjName = celebrityName("Michael")("Jackson"); // 여기서 celebrityName 외부함수가 리턴됩니다.






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
//
// var x = 3;
// if( x === 3){
//   var x = 2;
//   console.log(x);
// }
// console.log(x);
