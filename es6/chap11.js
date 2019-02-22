//예외처리


'use strict'

// const err = new Error("err");
//
// //console.log(typeof err); //obj
// //console.log(err instanceof Error); //true
//
//  const email = "haedoang@naver.com"
//
// function validateEmail(email){
//   return email.match(/@/) ? email : new Error(`invalid email : ${email}`);
// }
//
// //console.log(validateEmail("haedoang#naver.com"));
//
//
// const validatedEmail = validateEmail(email);
//
// console.log(typeof(validatedEmail))
//
// if(validatedEmail instanceof Error){
//   console.log(`Error: ${validatedEmail.message}`);
// }
//


//try catch
// function validateEmail(email){
//   return email.match(/@/) ? email : new Error(`invalid email : ${email}`);
// }
// const email = null;
//
// try{
//   const validatedEmail = validateEmail(email);
//   if(validatedEmail instanceof Error){
//     console.error(`Error:${validatedEmail.message}`);
//   } else{
//     console.log(`Valid email : ${email}`);
//   }
// } catch(e){
//   console.log(`Error: ${e.message}`);
// }

//Error.prototype.stack

// function a(){
//   console.log('a: calling b');
//   b();
//   console.log('a: done');
// }
// function b(){
//   console.log('b: calling c');
//   c();
//   console.log('b: done');
// }
// function c(){
//   console.log('c: throwing error');
//   throw new Error('c Error');
//   console.log('c: done');
// }
//
// function d(){
//   console.log('d: calling c');
//   c();
//   console.log('d:done');
// }
//
// try{
//   a();
// } catch(e){
//   console.log(e.stack);
// }
//
// try{
//   d();
// } catch(e){
//   console.log(e.stack);
// }

//try catch finally

try{
  console.log("this line is executed..");
  throw new Error("throw Error");
  console.log("this line is not ...");
} catch(e){
  console.log("there was an error..");
} finally{
  console.log("...always executed");
  console.log("perform cleanup here");
}
