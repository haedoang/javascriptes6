"use strict"

//stream : 읽기 스트림 , 쓰기 스트림, 이중 스트림


//write stream.
const fs = require("fs");
// const ws = fs.createWriteStream('stream.txt',{encoding:"UTF-8"});
// ws.write('line 1\n');
// ws.write('line 2\n');
// ws.end();


//readstream..
//
// const rs = fs.createReadStream('stream.txt',{encoding:"utf-8"});
// rs.on('data',function(data){
//   console.log('>> data: ' + data.replace('\n','\\n'));
// });
// rs.on('end',function(data){
//   console.log('>> end');
// })


//읽기 쓰기 스트림 파이프 연결
const rs = fs.createReadStream('stream.txt');
const ws = fs.createWriteStream('stream_copy.txt');
rs.pipe(ws); //read STream한 값을 writeStream을 함. 
