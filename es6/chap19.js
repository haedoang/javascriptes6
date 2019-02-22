"use strict"

const para2 =$('p').get();

console.log(para2);
console.log(typeof para2);
//console.log(para2 instanceof $)
const a = document.querySelectorAll('p');
const $b = $('p');
console.log(a);
console.log($b);

console.log(a==$b)
