//functions :Functions are the block of code which are destined to perform specific task
// Advantage: Code reusability
//Syntax: function function_name(){
//                  //function block
//}

function add1(){ //Named function
    var num1=60
    var num2=30
    console.log(num1+num2)
}
add1()

/*Types of functions 
1.Named function
2.Parameterized function
3.return function
4.Anonymous Function
5.Callback function
6.Higher Order function
7.Arrow funtion
8.Immediately Invoke function
9.Async function

2.Parameterized function:
Syntax:function function_name(Parameters){
                 //function block
}
function_name(arguments)     
parameters: These are the variables without scope statements 
which is used to store data and we utilize inside a function
Arguments:where it will accepts always the data to store for the arguments*/

function Details(name,age,city){
    console.log(name)
    console.log(age)
    console.log(city)

}
Details("Virat",35,"mumbai")

function add(x,y){
    var add=x+y;
    console.log(add)
}
add(20,20)
add(20,'r')  //Output:20r
//add(20) Output:NaN -->Not a Number
function add2(x,y){
    var add=x/y;
    console.log(add)
}
add2(20,'r') //Output:NaN

// return function
/*return function: function which can return the resukts and it should catch
by seperate variable and we can see output.

parameters-arguments--> input-->function-->output-->return statement

return should be last executable statement inside the function
after return statement if you write anything it will not execute*/
function wish(){
    return "Good morning"
}
var res =wish()
console.log(res)

//parameterized return function
function add3(x,y){
    return x+y;
}
var res1 = add3(20,30);
console.log(res1)

function sub(){
    var a = 20;
    var b = 90;
    var res = b-a
    return res
}
var result=sub();
console.log(result)

/*Anonymous Function: Function without a name is called Anonymous function.
Syntax:function(){
          //function block
          } 
*/

var greet = function(){
   console.log("I am,anonymous function")
}
greet()

//Parameterized Anonymous 
var details =function(name,age,city){
    console.log(name)
    console.log(age)
    console.log(city)
}
details("Vaish",22,"Bangalore")

//returned anonymous function
let multiply = function(x,y){
    return x*y
}
let res2=multiply(2,3);
console.log(res2)

/* Function expression: function expression is the process of assigning a anonymous
function to  a variable and making a call*/

/*Call Back function: ay function which you are passing as argument those 
functions are called callback function*/

/*Higher-order function: any function which is taking another function as argument
that function is called Higher-order function.
Functions are called higher-order function only if it takes minimum one 
function as argument.*/
function print(){
    console.log("Welcome to JS class")
}
function add4(x,y){
    var res = x+y
    return res
}
function fun(f){
   // console.log(f)
   f()

}
//fun(print())
//fun(add4(2,4))
fun(function(){
    var city="Bangalore"
    console.log(city)
})

/*Arrowfunction: It is introduced in ES-6 version.It is created without using
function keyword.It is mainly used as Call Back function.
Syntax: ()=>{
       //function block
    }*/

var a=()=>{
    console.log("hello world")
}
a()
var add5=()=>console.log(10+50)
add5()

//arrow function by passing a parameters
var b = (name,age,city)=>{
    console.log(name)
    console.log(age)
    console.log(city)
}
b("Vaishnavi",22,"Gulbarga")

//arrow function as returned function
var wish=()=>{
    return "Hello good mrng!"
}
var c = wish()
console.log(c)

//console.log(wish())


















