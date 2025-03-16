/**
SpreadOperator:
...<object_name>
[OR]
...<array_name>

-> It is used to copy properties of one object into another object
and it is used to copy elements of one array into another array.
 */

var obj1={
    name:"Virat",
    age:35,
    city:"Mumbai"
}
//console.log(obj1)

var obj2={
    ...obj1,
    id:18,
    gender:"Male"
}
console.log(obj2)

//How to copy the array elements:
var arr1=[10,20,30]
console.log(arr1)

var arr2=[...arr1,40,50]
console.log(arr2)

