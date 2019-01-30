'use strict';

//'use strict'

//const arr =[1,2,3];

// console.log(arr.concat(4,5,6));
// console.log(arr.concat([4,5,6]));
// console.log(arr.concat([4,5],6));
// console.log(arr.concat(4,[5,6]));

// const arr = [1,2,3,4,5];
//
//
// console.log(arr.slice(-5,-3));


//splice *
//
// const arr = [1,5,7];
// arr.splice(1,0,2,3,4);
// console.log(arr);
//
// arr.splice(5,0,6);
// console.log(arr);


//copyWith **
//
// const arr = [1,2,3,4];
// console.log(arr.copyWithin(1,2));
//
//
// console.log(arr.copyWithin(2,0,2));
//
// console.log(arr.copyWithin(0,-3,-1));


//
// const arr = [1,2,3,4,5,6,7];
//
// //ex1) 1234 123 ㄱㄱ
// console.log(arr.copyWithin(4,0,3));

//
// const arr = [3,9,1,4,7];
// arr.sort();
//
// console.log(arr);
// const arr = [
//   {name:"zaa"},
//   {name:"azz"},
//   {name:"bac"}
// ];
// console.log(arr.sort()); //x
//
// arr.sort((a,b) => a.name < b.name);
// console.log(arr);

//
// const arr = [{id:5,name:"Judith"},{id:7,name:"Francis"}];
//
// //console.log(arr.findIndex(o => o.id ===5));
// console.log(arr.findIndex(function(o){
//   return o.id===7
// }));


//
// const arr=[4,1,16,17,5,16,10,3,49];
// console.log(arr.find((x,i) => i> 2 && Number.isInteger(Math.sqrt(x))));
//
// const items =["Widget","Gadget"];
// const prices = [9.95, 22.95];
//
// //const cart = items.map((x,i) => ({name:x,price:prices[i]})    );
// const cart = items.map(function(x,i){
//   return {name:x,price:prices[i]};
// });
//
//
// console.log(cart);


//화살표함수 이해하기
// function Person(){
//   console.log(this); //person 객체의 this
//
//   setTimeout(function growUp(){
//     console.log(this); // window로 바인딩 되어 출력.
//   },1000);
// }
//
// var p = new Person();

// function Person(){
//   console.log(this);
//   var that = this;
//
//   setTimeout(function growUp(){
//     console.log(that);
//   },1000);
// }
//
// var p = new Person();

//filter

var cards = [];
var _arr = ['H', 'C', 'D', 'S'];
for (var _i = 0; _i < _arr.length; _i++) {
  var suit = _arr[_i];
  for (var value = 1; value <= 13; value++) {
    cards.push({ suit: suit, value: value });
  }
}

console.log(cards);