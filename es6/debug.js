"use strict"
//debug 모듈 만들기
let lastMessage;

module.exports = function(prefix){
  return function(message){
    const now = Date.now();
    const sinceLastMessage = now - (lastMessage || now);
    console.log(`${prefix} ${message} +${sinceLastMessage}ms`);
    lastMessage = now;
  }
}
