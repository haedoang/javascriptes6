'use strict'

// const SYM = Symbol();
//
//
// const o = {a:1,b:2,c:3,[SYM]:4};
//
// //console.log(o[SYM])
//
//
// for(let prop in o){
// //  if(!o.hasOwnProperty(prop)) continue;
//   console.log(`${prop} : ${o[prop]}`);
// }


// const SYM= Symbol();
//
// const o = {a:1,b:2,c:3,[SYM]:4};
//
// Object.keys(o).forEach(prop => console.log(`${prop}:${o[prop]}`));


//class instance

// class Car{
//   constructor(make,model){
//     this.make = make;
//     this.model = model;
//     this.userGears = ['P','N','R','D'];
//     this.userGear = this.userGears[0];
//   }
//
//   shift(gear){
//     if(this.userGears.indexOf(gear)<0)
//       throw new Error(`Invalid gear: ${gear}`);
//       this.userGear = gear;
//   }
// }
//
//
// const car1 = new Car("Tesla","Model S");
// const car2 = new Car("Mazda","3i");
//
//
// car1.shift('N');
// car2.shift('D');
//
// console.log(car1.userGear);
// console.log(car2.userGear);
//프로퍼티의 값을 직접 접근하여 수정할 수 있는 단점이 있음..

//weakmap

// const Car = (function(){
//   const carProps = new WeakMap();
//
//   class Car{
//     constructor(make,model){
//       this.make = make;
//       this.model = model;
//       this._userGears = ['P','N','R','D'];
//       carProps.set(this,{userGear:this._userGears[0]});
//     }
//
//     get userGear() {
//       return carProps.get(this).userGear;
//     }
//
//     set userGear(value){
//       if(this._userGears.indexOf(value)<0)
//         throw new Error(`Invalid gear: ${value}`);
//       carProps.get(this).userGear = value;
//     }
//
//     shift(gear){
//       this.userGear = gear;
//     }
//
//   }
//     return Car;
// })();
//
//
// const car1 = new Car("benz","S");
// const car2 = new Car("Honda","Z");
//
// car1.shift('N');
// car2.shift('R');
//
// console.log(car1.userGear);
// console.log(car2.userGear);



//Mixin   ************************
// class Car{
//   constructor(make,model){
//     this.make = make;
//     this.model = model;
//     this.userGears = ['P','N','R','D'];
//     this.userGear = this.userGears[0];
//   }
//
//   shift(gear){
//     if(this.userGears.indexOf(gear)<0)
//       throw new Error(`Invalid gear: ${gear}`);
//       this.userGear = gear;
//   }
// }
//
//
// class InsurancePolicy{
// }
//
// function makeInsurable(o){
//   // o.addInsurancePolicy = p => {this.insurancePolicy=p}; //return 아님
//   // o.getInsurancePolicy = ()=> this.insurancePolicy;  //return ;
//   // o.isInsured = ()=> !!this.insurancePolicy;
//   o.addInsurancePolicy = function(p){
//       this.insurancePolicy = p;
//   }
//   o.getInsurancePolicy = function(){
//     return this.insurancePolicy;
//   }
//
//   o.isInsured = function(){
//     return !!this.insurancePolicy;
//   }
//
// }
//
//
// makeInsurable(Car.prototype);
// //console.log(Car.prototype);
// const car1 = new Car();
// console.log(car1.isInsured());
// car1.addInsurancePolicy(new InsurancePolicy());
//
// console.log(car1.getInsurancePolicy());
// console.log(car1.isInsured());
//
// //car1.addInsurancePolicy(new InsurancePolicy()); err
// //
// // makeInsurable(car1);
// // car1.addInsurancePolicy(new InsurancePolicy());
// //
//
// // class InsurancePolicy{}
// // class Car{
// //   constructor(make,model){
// //     this.make = make;
// //     this.model = model;
// //     this.userGears = ['P','N','R','D'];
// //     this.userGear = this.userGears[0];
// //   }
// //
// //   shift(gear){
// //     if(this.userGears.indexOf(gear)<0)
// //       throw new Error(`Invalid gear: ${gear}`);
// //       this.userGear = gear;
// //   }
// // }
// //
// // const ADD_POLICY = Symbol();
// // const GET_POLICY = Symbol();
// // const IS_INSURED = Symbol();
// // const _POLICY = Symbol();
// // function makeInsurable(o){
// //   o[ADD_POLICY] = function(p){
// //     this[_POLICY] = p;
// //   }
// //   o[GET_POLICY] = function(p){
// //     return this[_POLICY];
// //   }
// //   o[IS_INSURED] = function(p){
// //     return !!this[_POLICY];
// //   }
// // }



// class Car {
//   constructor(make,model){
//     this.make = make;
//     this.model= model;
//     this._userGears =['P','N','R','D'];
//
//   }
//
//   get userGear(){
//     return this._userGear;
//   }
//   set userGear(value){
//     if(this._userGears.indexOf(value)<0)
//       throw new Error(`Invalid gear:${value}`);
//     this._userGear = value;
//   }
//
//   shift(gear){
//     this.userGear =gear;
//   }
// }
//
// const car = new Car();
// // car.userGear("haedoang");
// //console.log(car.userGear);
//
//
// car.userGear =
//
// for(let prop in car){
//   console.log(`${prop}:${car[prop]}`);
// }
