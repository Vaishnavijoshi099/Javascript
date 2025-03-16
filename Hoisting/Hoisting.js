/*
> Hoisting:
-> Hoisting is the default behavior of moving all the declaration at the top of the scope before
code execution

->Note: javascript  only hoist declarations,not initializations.
-> Javascript allocates memory for all variables and functions defined in 
program before execution.
*/

//console.log(a) --->undefined.. By seeing this example we can conclude that we cannot do variable hoisting in Javascript.
var a=10;
console.log(a); 

//In javascript we can hoist only function declaration and we cannot hoist function expression..
sayHello() //hello Good Mrng!!
function sayHello(){
    console.log("hello Good Mrng!!")
}
//sayHello(); //hello Good Mrng!!

//console.log(res(10,90)) //error

var res=(a,b)=>{
    return a+b;
}
console.log(res(10,90)) //100


