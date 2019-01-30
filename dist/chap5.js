'use strict';

// let num = 3;
// console.log(num+"5") ;
// console.log(typeof(num+"5"));
//
//
// console.log(num*"5");
// console.log(typeof(num*"5"));

//
// const x1=0,x2=3,x3=-1.5,x4=-6.33;
// const p1 = -x1*1;
// const p2 = +x2*2;
// const p3 = +x3*3;
// const p4 = -x4*4;
//
//
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);


//비교연산자

//== 변환가능하면 O
// const a = "33";
// const b = 33;
//
// console.log(a===b);


//동등연산자 vs 일치 연산자
// const n = 5;
// const s = "5";
//
// console.log(n===s);  //false
// console.log(n!==s);  //true
// console.log(n===Number(s)); //true
// console.log(n!=Number(s)); //false
// console.log(n==s); //true
// console.log(n!=s); //false
//
// const a = {name:"an object"};
// const b = {name:"an object"};
//
// console.log(a===b);  //false
// console.log(a!==b);  //true
// console.log(a==b);   //false
// console.log(a!=b);   //true

//단축평가
// const doIt = true;
// let x = 0;
// const result = doIt && x++;
//
// console.log(result);
// console.log(typeof(result));
// var suppliedOptions={};
// const options = suppliedOptions || {name:"Default"};
// console.log(options);

//쉼표 연산자

// let x=1,y=10,z;
// z =(x++,y++);
// console.log(z);


//해체 할당
// const obj ={b:2,c:3,d:4};
//
// const {a,b,c} = obj;
//
// console.log(a);
// console.log(b);
// console.log(c);
//console.log(d); // X


var options = options || {};

console.log(options);