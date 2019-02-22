"use strict"

//웹 서버 만들기

// const http = require("http");
//
// const server = http.createServer(function(req,res){
//   console.log(`${req.method} ${req.url}`);
//   res.end('Hello world');
// });
//
// const port = 8088;
//
// server.listen(port, function(){
//   //서버 시작시 호출될 콜백..
//   console.log(`server started on port ${port}`);
// })

const http=require("http");

const server = http.createServer(function(req,res){
  if(req.method === 'GET' && req.url === '/favicon.ico'){
    const fs = require('fs');
    //fs.createReadStream('a.txt');
    //fs.pipe(res);
    const rs = fs.createReadStream('a.txt');
    rs.pipe(res);yyyyh
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end("hello world!");
  }
})

const port = 8088;

server.listen(port,function(){
  console.log(`server is on port ${port}`);
})
