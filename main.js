"use strict";
// //   enum Week_days  {
// // monday = "mon"  ,
// // tuesday = "tues" ,
// // wedneday ="wed" ,
// // thursday ="thurs",
// // friday= "fri",
// // saturday ="sat",
// // sunday ="sun",
// //  }
// //  const day = Week_days.friday
// //  console.log([day]);//output:"Wednesday"
Object.defineProperty(exports, "__esModule", { value: true });
// import { resolve } from "path"
// //  console.log("wed")
// //  enum week_days{
// //     monday  ,
// //     tuesday,
// //     wedneday ,
// //     thursday ,
// //     friday,
// //     saturday ,
// //     sunday ,
// //     }
// // week_days[4]    
// //////enum
// // let person ={
// // name : "rabisha",
// // age : "15"
// // }
// // console.log(
//             // ["rabisha"]
//         // );
// // // //parameter
// // function test_func (name ?: string) {
// //     console.log(`${name} hello`);
// // }
// // console.log("rabisha")
// // test_func()
// // //  //  //slice method
// //  const animal = ['ant','camel','cat','lion','wolf']
// // //   let slice_return = animal.slice (0,4)
// // //    console.log(slice_return)
// // // let slice_catch = animal.slice(2,4)
// //   // slice_catch[2]= "rabisha"
// // let slice_catch = [...animal]
// //  console.log("copy :"+slice_catch);
// // console.log("original :"+animal);
// // // //splice
// // const month = ['Jan','March','April','June']
// // // month.splice(1,0,'Feb','march')
// //  month.splice(1,0,'Feb')
// // month.splice(4,0,'may','')
// //   month.splice(2,1)
// //  console.log( month);
// //sort
// // const name = ['salar','imama','sikandar','raisa']
// // name.sort()
// // console.log(name)
// ////number sort
// // const animal = [1,222,45,98,78];
// // animal.sort((a,b) => a - b);
// // console.log(animal);
// // ///reverse
// // // const number = ['1','2','3']
// // // number.reverse()
// // // console.log(number)
// //callback
// //promise
// //async =function se promise koreturn karta hai
// //await = promise ke resolvehone ka wait karta ha. pomise ki return value kovarible me store karata hai
// // synthetic sugar
// let a = new Promise((res,rej)=>{
// setTimeout(() => {
// res("rabisha")
// },1500)
// })
// a.then((p)=> console.log(p))
// function name(){
//       return new Promise((res,rej)=> {
//         setTimeout(() => {
//         rej("response ok")
//         },1500)
//     })
// }
// name().then((p)=> {console.log(p)})
//  async function task(){
//     try{   
//       let data  = await name()
//         console.log(data);
//         console.log("hello")
//     }catch(error) {
//        console.log("my error :" + error)      
//         }
//     }
// task()
//tuples
//     let name:[string,boolean,number] = ["rabisha",true,234]
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2])
// name.splice(2,0,"feb")
// console.log(name)
//     let myTuple: [string, number] = ["hello", 10]; 
// console.log(myTuple[0]); 
// console.log(myTuple[1]);
// myTuple.push("world"); 
// console.log(myTuple); 
/////// boolean
// let isDone: boolean = false;
// let isCompleted: boolean = true;
// console.log(isDone) 
//first level
// function checkStatus(status: boolean): string {
//     if (status) {
//         return "The task is completed.";
//     } else {
//         return "The task is not completed.";
//     }
// }
// let isDone: boolean = false;
//  let isCompleted: boolean = true;
// console.log(checkStatus(isDone));
// console.log(checkStatus(isCompleted));
///second level
var a = 5;
var b = 10;
var isALessThanB = a < b;
console.log(isALessThanB);
var isAGreaterThanB = a > b;
console.log(isAGreaterThanB);
