'use strict';

// const multiline = "line1\
// line2";


//백틱 사용 multiline
// const multiline = `line1
// line2`;

//공백 들어감..
// const multiline = `line1
//   line2
//   line3`;

//const multiline = "line1\n" + "line2\n" + "line3";
//console.log(multiline);

//const RED = Symbol("thie color of a sunset");

//객체

// const obj = {};
// obj.color="yellow";
// obj["not an identifier"] = 3;
//
// //console.log(obj["not an identifier"]);
// //console.log(obj.color);
//
// //symbol property
//
// const SIZE = Symbol();
// obj[SIZE] = 8;
// obj.SIZE=0;
//
//
// console.log(obj);

//p.93
// const sam1 = {
//   name:'Sam', age:4
// };
//
// const sam2 = {name:'Sam',age:4};
//
// const sam3 = {
//   name:'Sam',
//   Classification:{
//     kingdom:'Anamalia',
//     phylum:'Chordata',
//     class:'Mamalia',
//     order:'Carnivoria',
//     family:'Felidae',
//     subfmaily:'Felinae',
//     genus:'Felis',
//     species:'catus'
//   }
// }


//console.log(sam3.Classification.family);

//number, String,Boolean
// const s = "hello";
// s.rating = 3; //Cannot create property 'rating' on string 'hello'
//console.log(s.rating);
//
// const a1 = [1,2,3,4];
// const a2 = [1,'two',3,null];
// const a3 = [
//   "whiat the hammer? What the chain?",
//   "In what furnace was thy brain?",
//   "What the anvil? What dread grasp",
//   "Dare its deadly terrors clasp?"
// ];
// const a4 = [
//   {name : "Ruby", hardness:9},
//   {name : "Diamond", hardness:10},
//   {name : "Topaz", hardness:8}
// ];
// const a5 = [
//   [1,3,5],
//   [2,4,6]
// ];  // a5= new Array[2][3];
//
// console.log(a5[0][1]);

//Date

// const holloweenParty = new Date(2018,0,27,13,0);
// console.log(holloweenParty);

//RegExp 정규 표현식
// const userEmail = "haedoangnaver.com";
// const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
// var result;
// if(userEmail.match(email)) result = true;
// else result = false;
// console.log(result);
// const b = true;
// const n = b ? 1 : 0;
//
// console.log(n);

// let a = 1;
// let b = a;
// a = 2;
// console.log(b); //2
//
// function change(a){
//   a = 5;
// }
//
// a =3;
// change(a);
// console.log(a);