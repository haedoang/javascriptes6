"use strict"
//es6 : block scope 변수 선언 가능
const sentences = [
  {subject :'Javascript',verb:'is',object:'great'},
  {subject :'Elephants',verb:'are',object:'large'}
];

//es6 : 객체 분해
function say({subject,verb,object}){
    //es6 기능 : 템플릿 문자열
    //아래 사용한 것은 따옴표가 아닌 백틱(`), 즉
    // 키보드의 탭 키 바로 위의 문자열이다.
    console.log(`${subject} ${verb} ${object}`);
}

//es 6 : for.. of
for(let s of sentences){
  say(s);
}
