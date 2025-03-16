function a(){
var age=22;
  
    console.log("a Function"+ " " +age)
    function b(){
        console.log("b Function"+" "+age)
    }
    return b()
}
console.log(a())