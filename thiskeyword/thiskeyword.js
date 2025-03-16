/**
 * this keyword:
 */
var person={
    fname:"Virat",
    lname:"Kohli",
    age:36,
    Place:"Delhi",
    // Details:function(){
    //     console.log(this.fname+" "+this.lname+" "+this.age+" "+this.Place)

    // }
}
// person.Details()

var person1={
    fname:"Rohit",
    lname:"sharma",
    age:37,
    Place:"Mumbai",

}
function Details(greeting){
    console.log(greeting+" "+this.fname+" "+this.lname+" "+this.age+" "+this.Place)
}
//Call function: It is used when one or more parameters are to be passed.
// Details.call(person1,"Hello") -->Early Binding 
// Details.call(person,"Hello")
//apply function: It is used when 2nd parameter is passed as array
// Details.apply(person,["Hello"])  --->Early Binding
// Details.apply(person1,["Hi"])
//Bind function:It is late binding.
var Details1=Details.bind(person) //bind will return a new function
Details1("Hello") 



