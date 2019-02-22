"use strict"

function calculate(a,x,n){
  if( x === 1) return a*n;
  return a*(1- Math.pow(x,n))/(1-x);
}
//module.exports = calculate;

//객체로 리턴하기.
// module.exports = {
//   geometricSum(a,x,n){
//     if(x === 1 ) return a*n;
//     return a*(1 - Math.pow(x,n)) / (1-x);
//   },
//   arithmeticSum(n){
//     return (n + 1)*n/2;
//   },
//   quadraticFormula(a,b,c){
//     const D = Math.sqrt(b*b - 4*a*c);
//     return [(-b + D)/(2*a),(-b - D)/(2*a)];
//   }
// }


//exports문법 사용하기 : 객체만을 리턴할 수 있습니다.
exports.geometricSum = (a,x,n)=>{
  if(x === 1) return a*n;
  return a*(1 - Math.pow(x,n))/(1-x);
}

exports.arithmeticSum = n => (n+1)*n/2;

exports.quadraticFormula = (a,b,c) =>{
  const D = Math.sqrt(b*b -4*a*c);
  return [(-b + D)/(2*a),(-b - D)/(2*a)];
}
