"use strict"

//file read

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname,'hello.txt'),{encoding:"utf-8"},function(err,data){
    if(err) return console.error("Error read file");
    console.log("read file contents:")
    console.log(data);
})

//read시 읽을 파일의 인코딩 을 명시해주어야 한다.!

//동기처리하기 readFileSync
//동기처리시 try/catch블록을 통해 예외처리를 합니다.
