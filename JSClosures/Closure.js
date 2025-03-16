/*
Closures in Javascript:
-> It is a technique to access outer function variable into inner function.
[OR]
-> It is a function to define function inside another function.
Syntax:
function outer(){
function inner(){
}
return inner;
}
*/
//example-1
function Outer(){
    var city="Bangalore"
    console.log("Outer function "+city)
    function inner(){
        console.log("Inner function "+city)

    }
    return inner()
}
Outer()

//example-2
function Outer1(){
    var  c=10;
    function inner1(a,b){
        var res=a+b+c;
        console.log(res)
    }
    return inner1

}
var result=Outer1()
result(10,2)


