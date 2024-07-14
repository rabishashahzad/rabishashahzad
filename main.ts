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

import { error } from "console"

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
// let a : number= 5;
// let b: number=10;

// let isALessThanB:boolean = a < b;
// console.log(isALessThanB)


// let isAGreaterThanB:boolean = a > b;
// console.log(isAGreaterThanB)



/// intersection
// interface Person {
//     name: string;
//     age: number;
// }

// interface Employee {
//     employeeId: number;
//     department: string;
// }

// // Intersection type
// type PersonEmployee = Person & Employee;

// // Function to display information about a person who is also an employee
// function displayPersonEmployeeInfo(pe: PersonEmployee): void {
//     console.log(`Name: ${pe.name}`);
//     console.log(`Age: ${pe.age}`);
//     console.log(`Employee ID: ${pe.employeeId}`);
//     console.log(`Department: ${pe.department}`);
// }

// Example usage
// const personEmployee: PersonEmployee = {
//     name: "Alice",
//     age: 30,
//     employeeId: 12345,
//     department: "Engineering"
// };

// displayPersonEmployeeInfo(personEmployee);

// // Trying to create an object with missing properties will cause an error
// // const invalidPersonEmployee: PersonEmployee = {
// //     name: "Bob",
// //     age: 25
// //     // Error: Property 'employeeId' is missing in type '{ name: string; age: number; }' but required in type 'Employee'.
// // };

// console.log(`The person ${personEmployee.name} is ${personEmployee.age} years old, works in the ${personEmployee.department} department, and has an employee ID of ${personEmployee.employeeId}.`);



// // Variable Declarations and Type Annotations
// let fullName: string = "John Doe";
// const birthYear: number = 1990;
// let isMarried: boolean = false;
// let children: string[] = ["Jane", "Mark"];
// let address: [string, number] = ["Main Street", 123];

// // Enums
// enum Role {
//     Admin,
//     User,
//     Guest
// }

// let userRole: Role = Role.User;

// // Any Type
// let random: any = 42;
// random = "A random string";
// random = { key: "value" };

// // Union Types
// type ID = string | number;
// let userId: ID = 101;
// userId = "ABC123";

// // Type Aliases
// type StringOrNumber = string | number;

// // Functions
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

// function add(a: number, b: number): number {
//     return a + b;
// }

// function logMessage(message: string): void {
//     console.log(message);
// }

// // Interfaces
// interface Person {
//     name: string;
//     age: number;
//     greet: () => string;
// }

// let person: Person = {
//     name: "Alice",
//     age: 30,
//     greet() {
//         return `Hello, my name is ${this.name}.`;
//     }
// };

// // Classes
// class Employee {
//     private id: number;
//     public name: string;
//     protected department: string;

//     constructor(id: number, name: string, department: string) {
//         this.id = id;
//         this.name = name;
//         this.department = department;
//     }

//     public getDetails(): string {
//         return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
//     }
// }

// class Manager extends Employee {
//     private employees: Employee[];

//     constructor(id: number, name: string, department: string, employees: Employee[]) {
//         super(id, name, department);
//         this.employees = employees;
//     }

//     public getDetails(): string {
//         return `${super.getDetails()}, Employees: ${this.employees.length}`;
//     }
// }

// let employee = new Employee(1, "John", "Engineering");
// let manager = new Manager(2, "Jane", "Engineering", [employee]);

// // Generics
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// // Modules
// // Assuming we have a separate file called "mathUtils.ts"
// // mathUtils.ts
// export function multiply(a: number, b: number): number {
//     return a * b;
// }

// // Importing the module
// import { multiply } from './mathUtils';

// let product = multiply(2, 3);

// // Example Usage
// console.log(`Name: ${fullName}`);
// console.log(`Birth Year: ${birthYear}`);
// console.log(`Married: ${isMarried}`);
// console.log(`Children: ${children.join(", ")}`);
// console.log(`Address: ${address[0]}, ${address[1]}`);
// console.log(`Role: ${Role[userRole]}`);
// console.log(`Random: ${JSON.stringify(random)}`);
// console.log(`User ID: ${userId}`);
// console.log(greet("Alice"));
// console.log(`Sum: ${add(5, 10)}`);
// logMessage("This is a log message.");
// console.log(person.greet());
// console.log(employee.getDetails());
// console.log(manager.getDetails());
// console.log(`Output1: ${output1}`);
// console.log(`Output2: ${output2}`);
// console.log(`Product: ${product}`);
