//iterator generator

"use strict"
require('core-js/fn/array/values');
//
// const book = [
//   "반짝반짝 작은별",
//   "인생의 무게",
//   "아주특별한우리형",
//   "하얀마음 백구",
//   "버킷리스트400"
// ];
//
// const it = book.values();
//
//
// // ????
// // while(!it.next().done){ //이시점에서 읽어버리나본데?
// //   console.log(it.next().value);
// // }
//
// let current = it.next();
// while(!current.done){
//   console.log(current.value);
//   current = it.next();
// }


//iteration protocol

// class Log{
//     constructor(){
//       this.messages = [];
//     }
//     add(message){
//       this.messages.push({message,timestamp:Date.now()});
//     }
//     [Symbol.iterator](){
//       return this.messages.values();
//     }
// }
//
// const log = new Log();
// log.add("첫날");
// log.add("둘째날");
// log.add("셋째날");
//
// for(let entry of log){
//   console.log(`${entry.message} @ ${entry.timestamp}`);
// }


//피보나치
// class FibonacciSequence{
//   [Symbol.iterator](){
//     let a=0, b=1;
//     return{
//       next(){
//         let rval = {value:b,done:false};
//         b += a;
//         a = rval.value;
//         return rval;
//       }
//     }
//   }
// }
//
// const fib = new FibonacciSequence();
// let i =0;
// for(let n of fib){
//   console.log(n);
//   if(++i> 9) break;
// }



//제너레이터 : 이터레이터를 사용해 자신의 실행을 제어하는 함수
//표기법 : function* 함수명(){}

//
// function* rainbow(){
//   yield 'red';
//   yield 'orange';
//   yield 'yellow';
//   yield 'green';
//   yield 'blue';
//   yield 'indigo';
//   yield 'violet';
// }
//
// //제너레이터 호출
// const it = rainbow();
//
// //console.log(it.next()); { value: 'red', done: false }
//
//
// for(let color of rainbow()){
//   console.log(color);
// }


//예제 추가
// function *myGen() {
//     const x = yield 1;       // x = 10
//     const y = yield (x + 1); // y = 20
//     const z = yield (y + 2); // z = 30
//     return x + y + z;
// }
//
// const myItr = myGen();
// console.log(myItr.next());   // {value:1, done:false}
// console.log(myItr.next(10)); // {value:11, done:false}
// console.log(myItr.next(20)); // {value:22, done:false}
// console.log(myItr.next(30)); // {value:60, done:true}
//
//








function* interrogate(){
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next());
console.log(it.next("김해동"));
console.log(it.next("보라"));
