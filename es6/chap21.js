"use strict"

//접근자 프로퍼티 get. set
//접근자프로퍼티 정의 시 Enumerable, Configurable false 열거, 쓰기 불가능.
// 접근자 프로퍼티와 데이터 프로퍼티 동시에 설정할 수 없음..

//  const USER_EMAIL =Symbol();
// //
// class Users{
//   setEmail(value){
//     if(!/@/.test(value)) throw new Error(`invalid email :${value}`);
//     this[USER_EMAIL] = value;
//   }
//   getEmail(){
//     return this[USER_EMAIL];
//   }
//
// }
//
// const user = new Users();
// user.setEmail("john@doe.com");
// console.log(`User email : ${user.getEmail()}`);
// //console.log(user[USER_EMAIL]) 심볼데이터접근..


// 접근자 프로퍼티 사용
//
// const USER_EMAIL = Symbol();
// class User {
//   set email(value){
//     if(!/@/.test(value)) throw new Error(`invalid email : ${value}`);
//     this[USER_EMAIL] = value;
//   }
//   get email(){
//     return this[USER_EMAIL];
//   }
// }
//
// const user = new User();
//
// console.log(user.email ="haedoang@naver.com")


// 프로토타입 메서드 이해하기.
// class Rectangle{
//   constructor(width,height){
//     this.width = width;
//     this.height = height;
//   }
//   get perimeter(){
//     return this.width*2 + this.height*2;
//   }
// }
//
// const r = new Rectangle(4,2);
// console.log(r.perimeter);

//객체 프로퍼티 이해하기.
const obj = {foo:"bar"};
//console.log(Object.getOwnPropertyDescriptor(obj,'foo'));

//객체 프로퍼티 조작하기.
//Object.defineProperty(obj,'foo',{writable:false});
//console.log(Object.getOwnPropertyDescriptor(obj,'foo'));
//쓰기 시도
//obj.foo = 3;

//객체 프로퍼티 추가하기.
// Object.defineProperty(obj,'color',{
//   get : ()=> this._color,
//   set : value => { this._color = value }
// })
//
//
// //데이터 프로퍼티 추가하기.
// Object.defineProperty(obj, 'name',{
//   value :"Cynthia",
//
// });
//
// Object.defineProperty(obj,'greet',{
//   value : function(){
//     console.log(this);
//     return `Hello, my name is ${this.name}!`
//   },
//
// })
// console.log(obj); // enumerable
// console.log(obj.greet())

//배열에 추가하기.

// const arr = [3,1.5,9,2,5.2];
// arr.sum = function(){ return this.reduce((a,x)=>a+x)};
// arr.avg = function(){ return this.sum()/this.length;};
// Object.defineProperty(arr,'sum',{enumerable:true});
// Object.defineProperty(arr,'avg',{enumerable:true});
//
//

//프록시 ES6 메타 프로그래밍 프로그램이 자기 자신을 수정함!
const coefficients = {
  a:1,c:3
}
function evaluate(x,co){
  return co.a+co.b*x +co.c * Math.pow(x,2);
}
const betterCoefficients = new Proxy(coefficients,{
  get(target, key){ return target[key] ||0;
  }
})

console.log(evaluate(5,coee));
