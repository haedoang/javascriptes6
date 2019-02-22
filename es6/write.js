"use strict"

//fs 사용하기

const fs = require("fs");

// fs.writeFile("hello.txt","hello from Node!",function(err){
//   if(err) return console.log("Error writing to file");
// })


//현재작업디렉토리 : __dirname 변수 사용하기
//
// fs.writeFile(__dirname+"/hello2.txt","hello from Node!",function(err){
//   if(err) return console.log("Error writing to file");
// })


// path사용하기.
const path = require('path');

fs.writeFile(path.join(__dirname,'hello3.txt'),'hello from Node!',function(err){
  if(err) return console.error("Error writing to file");
})

//동기처리하기 writeFileSync 
