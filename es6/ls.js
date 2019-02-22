"use strict"

const fs = require("fs");


//readdir : 해당 경로의 폴더나 파일 리드하기.
fs.readdir(__dirname,function(err,files){
  if(err) return console.error("Unable to read directory contents");
  console.log(`Contents of ${__dirname}:`);
  console.log(files.map(f=>'\t' + f).join('\n'));
})
