"use strict"

// const d = new Date();
// console.log(d);
//console.log(d.valueOf());


//console.log(new Date(0)); //유닉스 타임스태프

//날짜 문자열해석

//console.log(new Date("June 14, 1903 GMT-0000"));


//moment.js lib 설치하기

 const moment = require("moment-timezone");
//
// // const d = new Date(Date.UTC(2016,4,27));
// //
// // console.log(d);//UTC기준 날짜.
// // console.log(new Date(2016,4,27)); //UTC 기준으로 차이나는 시간에 해당하는 날짜
//
//
//
// //timezone set
//
// const d = moment.tz([2016,3,27,9,19],'America/Los_Angeles'); //moment.parseZone("2016-04-27T09:19:00.000-07:00")
// const s = moment.tz([2016,3,27,9,19],'Asia/Seoul');
// //
//   console.log(d.toDate());
//   console.log(s.toDate());

//날짜 데이터 전송하기

// const before = {d : new Date()};
// //console.log(before.d instanceof Date);
// const json = JSON.stringify(before);
// console.log(json);
// console.log(typeof json);
// const after = JSON.parse(json);
// console.log(after);
// console.log(typeof after);
//
// console.log(after.d instanceof Date);
// console.log(typeof after.d);
//
// //JSON 타입으로 날짜객체가 넘어온 경우 바로 다룰수 없음!
//
// after.d = new Date(after.d);
// console.log(after.d instanceof Date);

// const before = {d: new Date().valueOf()}; //숫자형 날짜
// console.log(typeof before.d );
// const json = JSON.stringify(before);
// console.log(json);
// console.log(typeof json); //문자열
//
// const after = JSON.parse(json);
// console.log(typeof after.d);


//날짜 형식
//
// const d = new Date(Date.UTC(1989,7,15));
// console.log(d.toLocaleDateString());
// //console.log(d.toLocaleFormat());
// console.log(d.toLocaleTimeString());
// console.log(d.toTimeString());
// console.log(d.toUTCString());
//
// console.log(moment(d).format("YYYY-MM-DD"));


//날짜 구성 요소

// const d = new Date(Date.UTC(1815,9,10));
//
// //los Angeles 기준
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
//
// //UTC기준 메서드
//
// console.log(d.getUTCFullYear());
// console.log(d.getUTCMonth());
// console.log(d.getUTCDate());

//날짜 연산
//날짜 정렬

const dates = [];

//랜덤한 날짜를 몇 개 만듭니다.
const min = new Date(2017,0,1).valueOf();
const delta = new Date(2020,0,1).valueOf() - min;

for(let i=0; i<10; i++){
  dates.push(new Date(min + delta*Math.random()));
}
//정렬전
console.log(dates);
//날짜 역순
console.log(dates.sort((a,b)=>b - a));
//날짜 순
console.log(dates.sort((a,b)=>a - b));


//moment 날짜 더하거나 빼는 메서드
// let m = moment();
// console.log(m);
// m.add(3,'days');
// console.log(m);
// m.subtract(2,'years');
// console.log(m);


//사용자가 알기 쉬운 상대적 날짜

//console.log(moment().subtract(40000,'seconds').fromNow());
