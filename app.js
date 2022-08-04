// let a = "Hello From First Typescript file";
// console.log(a);   //always write tsc.cmd app.ts (ts filename for convergence to js file)
// export { } //in this app.ts file we have to add export method for avoiding duplication for same class name
var user = {
    name: "abc",
    age: 23,
    getname: function () {
        return "getname function is called";
    }
};
console.log(user);
console.log(user.getname());
