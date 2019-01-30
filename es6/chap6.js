

// function f(x){
//   console.log(`f 내부 :x =${x}`);
//   x =5;
//   console.log(`f 내부 :x =${x}(할당후)`)
//
// }
//
// let x = 3;
// console.log(`f호출 전 :x =${x}`);
// f(x);
// console.log(`f호출 후 :x=${x}`);


// function f(x){
//   return `in f: x=${x}`;
// }
// console.log(f());


//매개변수 해체

// function getSentence({subject,verb,object}){
//   return `${subject} ${verb} ${object}`;
// }
//
// //동일
// // function getSentence(o){
// //   return `${o.subject} ${o.verb} ${o.object}`;
// // }
//
//
//
// const o = {
//   subject : "I",
//   verb:"love",
//   object:"Javascript"
// };
//
// console.log(getSentence(o));

// function addPrefix(prefix,...words){
//   const prefixedWords=[];
//   for(let i=0;i<words.length;i++){
//     prefixedWords[i]=prefix+words[i];
//   }
//   return prefixedWords;
// }
//
// console.log(addPrefix("con","verse","vex"));

//this

// const o = {
//   name:'Julie',
//   greetBackwards:function(){
//     function getReverseName(){
//       let nameBackwards ='';
//       for(let i =this.name.length-1;i>=0;i--){
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     }
//     return `${getReverseName()} si eman ym, olleH`;
//   }
// }
//
// o.greetBackwards();

//
// const c = parseFloat("15.5 kph");
// console.log(c);

//
// const c=3;
//
// console.log(if(isPrime(c)));
