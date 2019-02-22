"use strict"
//exports 한 caclulate 함수 모듈을 사용하기
//const amanda_calculate =require('./amanda.js');
//const tyler_calculate = require('./tyler.js');

//console.log(amanda_calculate(1,2,5));
//console.log(tyler_calculate(2));
// const amanda = require('./amanda.js');
// console.log(amanda);
// console.log(amanda.geometricSum(1,2,5));
//console.log(amanda.quadraticFormula(1,2,-15));

//함수 모듈 통한 모듈 커스터마이징
//함수하나를 반환하는 모듈은 함수를 즉시 호출하려는 의도로 만들어짐.
// debug 모듈 사용하기
//
// const debug = require('debug')('main');
// debug("starting");


//debug 모듈 사용하기
const debug1 = require('./debug.js')('one');
const debug2 = require('./debug.js')('two');

debug1('started first debugger!');
debug2('started second debugger!');

setTimeout(()=>{
  debug1("after some time...");
  debug2("what happends?");
},200);
