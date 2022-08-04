// let a = "Hello From First Typescript file";
// console.log(a);   //always write tsc.cmd app.ts (ts filename for convergence to js file)
// export { } //in this app.ts file we have to add export method for avoiding duplication for same class name

//to run on below cmd use tsc.cmd app.ts
//to run on js file use node app.js

// class App {
//     test() {
//         console.log("Function called through class");
//     }
// }
// let a1 = new App();                         //if you use let in ts it will be var in js
// a1.test();

//Next Module you can declare value like this
// let a: string = "2Hello";
// console.log(a);
// //can also done with boolean
// let b: boolean = true;
// console.log(b);

//nextmodule
// let data = ["abc", "pqr", "xyz"];  //if you first write all strins inarryb aand then push int it will show error but if you write int between array and then push int its okk
// data.push(22);       //this will not work
// console.log(data[1]);

//but if you do this it will work..
// let data1 = ["abc", "pqr", "22", "xyz"];
// data1.push(100);
// console.log(data1);

//if you want pure array do this array of string you cannot insert number inside it..it will gave error
// let data2: string[] = ["abc", "pqr", "xyz"];   //if you push string into string array it will work
// data2.push("mno")
// console.log(data2);



// next module Object Type

// let users = {      //if we didnt put type of name i.e string it will assume i.e in it there ius string so its type is string
//     name: "abc",
//     age: 22,
//     post: "SDE1",
//     address: "Pune",
// }
// users.name = "xyz";    //if you assign string which is givenup bydefault it will replace abc by xyz
// //you cannot enter a new value..like   =>>>  user.email="abc@gmail.com";
// console.log(users);

//using interface
//use interface and give that name to the object..
// interface userTyped {      //here we defined a interface and defined a objects type i.e name of string and used it with usersobj like users:userTyped
//     name: string,
//     age: number,
//     post: string,
//     address: any            //here we typed address as any means we can assign both string and number to it
// }
// let users: userTyped = {      //if we didnt put type of name i.e string it will assume i.e in it there ius string so its type is string
//     name: "abc",            //if you try to give number in name objects attribute it will gave error bcoz it typed as string
//     age: 22,
//     post: "SDE1",
//     address: 100,           //here we wrote here string but gave no bcoz its type is any
// }
// console.log(users);


//if you dont want to write a interface then use any keyword as objects type as def and us name as number and age as string
// let users: any = {
//     name: "abc",
//     age: 22,
//     post: "SDE1",
//     address: "Pune"
// }
// users.name = 100;   //when you assign 100 to name it runs bcoz now type of obj is any
// console.log(users);


//next module union type
// let data: string | number = "abc";  //if you gave | i.e union and then second data type you can also push num in string
// data = 20;   //if you try to assign here true it will show error bcoz at up we did not assigned type boolean to object
// console.log(data);  //if you want then write  | boolean to it


//next module Interface
//whenwe have a normal variable then we can define its data type..i.e no , stringbut wheb we have a class or an object
//class has functions and properties to define all's data type we create a common template / a data type of all
//which is our interface its syntax is :-
//interface interface-name{ propertyname : value ,propertyname : value ,}
interface userinterface {
    name: string,
    age: number,
    getname: () => String,
}
let user: userinterface = {
    name: "abc",
    age: 23,
    getname: function () {
        return "getname function is called";
    }
}
console.log(user);
console.log(user.getname());