//'use strict'

const arr =[1,2,3];

console.log(arr.concat(4,5,6));
console.log(arr.concat([4,5,6]));
console.log(arr.concat([4,5],6));
console.log(arr.concat([4,[5,6]]));

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
//
//  const cards = [];
// for(let suit of ['H','C','D','S']){
//   for(let value=1;value<=13;value++){
//     cards.push({suit,value});
//   }
// }
//
// //console.log(cards);
//
// function cardToString(c){
//   const suits={'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'};
//   const values={1:'A',11:'J',12:'Q',13:'K'};
//
//   for(let i=2;i<=10;i++){
//     values[i]= i;
//   }
//   return values[c.value] + suits[c.suit];
// }
//
// console.log(cards.filter(c => c.value===2).map(cardToString));

//reduce

// const words = ["Beachball","Rodeo","Angel",
//                "Aardvark","Xylophone","November","Chocolate",
//                "Papaya","Uniform","Joker","Clover","Bali"
//               ];
//
// const alphabetical = words.reduce((a,x) =>  {
//   if(!a[x[0]]) a[x[0]] = [];
//   a[x[0]].push(x);
//   return a;
// },{});
//
// console.log(alphabetical);



var s = "haedong";

console.log(s[4]);
