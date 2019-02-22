"use strict"

// process 모듈 사용하기.. 프로그램에 관한 정보를 담고 있다.

// 프로세슷 종료 process.exit(0) 정상적인 종료 :0

const fs = require("fs");
// console.log(process.argv);
// fs.readdir(__dirname,function(err,files){
//   //console.log(files);
//   if(err){
//     console.error("Fatal error:couldn't read data directory.");
//     process.exit(1);
//   }
//   const txtFiles = files.filter(f=>/\.txt$/i.test(f));
//   //console.log(txtFiles);
//   if(txtFiles.length === 0){
//     console.log("No .txt files to process");
//     process.exit(0);
//   }
// })


const filenames = process.argv.slice(2); // 0 - 인터프리터 , 1 프로그램전체경로 제외하기
//console.log(filenames);

let counts = filenames.map(f =>{
  try{
    const data =fs.readFileSync(f,{encoding:"utf-8"});
    //console.log(data.split('\n').length)
    return `${f}: ${data.split('\n').length}`;
  } catch(err) {
    return `${f}: couldn't read file.`;
  }
});

console.log(counts.join(`\n`));


const debug = process.env.DEBUG === "1" ?
  console.log : function(){};

debug("Visible only if environment variable DEBUG is set!");

console.log(`Current directory : ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New current directory :${process.cwd()}`);
