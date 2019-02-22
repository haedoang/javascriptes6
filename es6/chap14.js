"use strict"

// 비동기적 프로그래밍


//setInterval & clearInterval


// const start = new Date();
//
// let i = 0;
//
// const intervalId = setInterval(function(){
//   let now = new Date();
//   if(now.getMinutes() !== start.getMinutes() || ++i > 10)
//     return clearInterval(intervalId);
//
//
//   console.log(`${i} : ${now}`);
//
//
// },5*1000);


//오류 우선 콜백

// const fs = require('fs');
//
// //const fname = 'may_or_may_not_exist.txt';
// const fname ='chap9.js';
//
// fs.readFile(fname,function(err,data){
// console.log(err);
// console.log(typeof err)
//   if(err){
//   console.log(err instanceof Error);
//   return console.error(`error reading file ${fname} : ${err.message}`);
// }
//   //console.log(`${fname} contents : ${data}`);
// });


//콜백 헬

// const fs = require('fs');
//
// fs.readFile('a.txt',function(err,dataA){
//   if(err) console.error(err);
//   fs.readFile('b.txt',function(err,dataB){
//     if(err) console.error(err);
//     fs.readFile('c.txt',function(err,dataC){
//       setTimeout(function(){
//         fs.writeFile('d.txt',dataA+dataB+dataC,function(err){
//           if(err) console.log(err);
//         })
//       },
//     1000);
//     })
//   })
// })


//콜백 헬 try catch 오류 예제
//
// const fs = require('fs');
// function readSketchyFile(){
//   try{
//     fs.readFile('does_not_exist.txt',function(err,data){
//       if(err) throw err;
//     });
//   } catch(err){
//     console.log('warning:minor issue occured, program continuing');
//   }
// }
// try catch 안에 있는 readFile 의 익명함수에서 err가발생했기떄문에
//try catch로 에러를 잡아낼 수 없음.


//프라미스

// function countdown(seconds){
//   return new Promise(function(resolve,reject){
//     for(let i = seconds ; i>=0; i--){
//       setTimeout(function(){
//         if(i>0) console.log(i+ '...');
//         else resolve(console.log("GO!"));
//       },(seconds-i)*1000);
//     }
//   })
// }
// countdown(10);


//프로미스 이해 예제
//https://programmingsummaries.tistory.com/325

//프로미스 선언
// var _promise = function(param){
//   return new Promise(function(resolve,reject){
//
//     //비동기 표현 위한 setTimeout 함수
//     setTimeout(function(){
//
//       //파라미터가 참이면,
//       if(param){
//         resolve("해결완료");
//       }
//       //파라미터가 거짓
//       else {
//         reject(Error("실패"));
//       }
//
//     },3000);
//   });
// }
//
//
//
// //프로미스의 실행
// _promise(false).then(function(text){
//   //성공시
//   console.log(text); //해결완료
// },function(text){
//   //실패
//   console.log(text);
// });



//프로미스 사용 then 핸들러
// function countdown(seconds){
//   return new Promise(function(resolve,reject){
//     for(let i = seconds ; i>=0; i--){
//       setTimeout(function(){
//         if(i>0) console.log(i+ '...');
//         else resolve(console.log("GO!"));
//       },(seconds-i)*1000);
//     }
//   })
// }
//
// countdown(5).then(function(){
//   console.log("countdown completed successfully");
// },// resolve
// function(err){
//   console.log("countdown eperienced error :"+ err.message);
// });

//프로미스 사용 catch 핸들러
// const p = countdown(5);
// p.then(function(){
//   console.log("countdown completed successfully!");
// });//resolve
// p.catch(function(err){
//   console.log("countdown experienced an error: "+ err.message);
// });//reject


//error 발생 예제
// function countdown(seconds){
//   return new Promise(function(resolve,reject){
//     for(let i=seconds; i>=0; i--){
//       setTimeout(function(){
//         if(i===13) return reject(new Error("error"));
//         if(i>0) console.log(i+ '...');
//         else resolve(console.log("GO!"));
//       },(seconds-i)*1000);
//     }
//   });
// }
//
//
// countdown(15);

// const EventEmitter = require('events').EventEmitter;
//
// class Countdown extends EventEmitter{
//   constructor(seconds,superstitious){
//     super();
//     this.seconds = seconds;
//     this.superstitious = superstitious;
//   }
//
//   go(){
//     //console.log(this);
//     const countdown = this;
//     return new Promise(function(resolve,reject){
//       for(let i=countdown.seconds;i>=0;i--){
//         setTimeout(function(){
//           if(countdown.superstitious && i === 13) //superstitious undefined;
//             return reject(new Error("err"));
//           countdown.emit('tick',i);
//           if(i===0) resolve();
//         },(countdown.seconds-i)*1000);
//       }
//     });
//   }
// }

//event 사용하기

// const c = new Countdown(15);
//
// c.on('tick',function(i){
//   if(i>0) console.log(i + "...");
// });
//
// c.go().then(function(){
//   console.log("GO!");
// }).catch(function(err){
//   console.error(err.message);
// });
//

//프로미스 파기

// const c = new Countdown(15,true).on('tick',function(i){
//   if(i>0) console.log(i + "...");
// });
//
// c.go().then(function(){
//   console.log("GO!");
// }).catch(function(err){
//   console.error(err.message);
// })  //13 err reject 출력후 계속 진행..  then catch // XXX:


//프로미스 reject 시 timeout 취소하기.

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter{
  constructor(seconds,superstitious){
    super();
    this.seconds = seconds;
    this.superstitious = superstitious;
  }

go(){
  const countdown = this;
  const timeoutIds = [];
  return new Promise(function(resolve,reject){
    for(let i = countdown.seconds; i>=0; i--){
      timeoutIds.push(setTimeout(function(){
        if(countdown.superstitious && i === 13){
          timeoutIds.forEach(clearTimeout);
          return reject(new Error("err"));
        }
        countdown.emit('tick',i);
        if(i===0) resolve();
      },(countdown.seconds-i)*1000))
    }
  })
}
}


// const c = new Countdown(15,true).on('tick',function(i){
//   if(i>0) console.log(i + "...");
// });
//
// c.go().then(function(){
//   console.log("GO!");
// }).catch(function(err){
//   console.error(err.message);
// });


//프로미스 체인

// function launch(){
//   return new Promise(function(resolve,reject){
//     console.log("lift off!");
//     setTimeout(function(){
//       resolve("In orbit!");
//     },2*1000)
//   });
// }
//
//
// const c = new Countdown(5).on('tick',i => console.log(i+"..."));
//
// c.go().then(launch).then(function(msg){
//   console.log(msg);
// }).catch(function(err){
//   console.error(err.message);
// })

//결정되지 않은 프로미스 방지 :: 프로미스에 타임아웃을 건다~
// function launch(){
//   return new Promise(function(resolve,reject){
//     if(Math.random() < 0.5 ) return;
//     console.log("Lift off!");
//     setTimeout(function(){
//       resolve("In orbit!");
//     },2*1000);
//   });
// }
//
// //프로미스 타임아웃걸기!
//
//
// function addTimeout(fn,timeout){
//   if(timeout === undefined) timeout = 11000; //default;
//   return function(...args){
//     return new Promise(function(resolve,reject){
//       const tid= setTimeout(reject,   //callback function
//                             timeout,  //delay
//                             new Error("promse timed out") //매개변수
//                           );
//
//       fn(...args).then(function(...args){
//         clearTimeout(tid);
//         resolve(...args);
//       }).catch(function(...args){
//         clearTimeout(tid);
//         reject(...args);
//       })
//
//     });
//   }
// }
//
// const c = new Countdown(5).on('tick',i => console.log(i+"..."));
//
// c.go().
// then(addTimeout(launch),11*1000).
// then(function(msg){
//   console.log(msg);
// }).
// catch(function(err){
//   console.error("Houston, we have a problem: "+err.message);
// })



//제너레이터
const fs = require('fs');
//1) 노드의 오류 우선 콜백을 프로미스로 변경하기


function nfcall(f,...args){
  return new Promise(function(resolve,reject){
    f.call(null,...args,function(err, ...args){
      //console.log(args.length)
      if(err) return reject(err);
      resolve(args.length<2 ? args[0] : args);
    })
  });
}


//2) promise timeout 함수만들기
function ptimeout(delay){
  return new Promise(function(resolve,reject){
    setTimeout(resolve,delay);
  });
}

//3) 제너레이터 실행기

function grun(g){
  const it = g();
  (function iterate(val){
    //console.log("val:"+val);
    const x = it.next(val);
    if(!x.done){
      if(x.value instanceof Promise){
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        setTimeout(iterate,0, x.value);
      }
    }
  })();
}

//4) 제너레이터 생성

// function* theFutureIsNow(){
//   const dataA = yield nfcall(fs.readFile,'a.txt');
//   const dataB = yield nfcall(fs.readFile,'b.txt');
//   const dataC = yield nfcall(fs.readFile,'c.txt');
//   yield ptimeout(60*1000);
//   yield nfcall(fs.writeFile,'d.txt',dataA+dataB+dataC);
// }
//
// grun(theFutureIsNow);



//promise.call
// function* theFutureIsNow(){
//   const data = yield Promise.all([
//     nfcall(fs.readFile,'a.txt'),
//     nfcall(fs.readFile,'b.txt'),
//     nfcall(fs.readFile,'c.txt')
//   ]);
//   yield ptimeout(60*1000);
//   yield nfcall(fs.writeFile,'d2.txt',data[0]+data[1]+data[2]);
// }
// grun(theFutureIsNow);



//generator try catch
function* theFutureIsNow(){
  let data;

  try{
    data = yield Promise.all([
    nfcall(fs.readFile,'a.txt'),
    nfcall(fs.readFile,'b.txt'),
    nfcall(fs.readFile,'c.txt')
  ]);
  } catch(err){
    console.error("Unable to read one or more input files: "+ err.message);
    throw err;
  }

  yield ptimeout(60*1000);
  try{
    yield nfcall(fs.writeFile,'d3.txt',data[0]+data[1]+data[2]);
  } catch(err){
    console.error("unable to write output file: " + err.message);
    throw err;
  }
}
grun(theFutureIsNow);
