/* forEach()
-->If we want to access each and every element of an array we use forEach() method
-->forEach() will not return any value
--> It will not alter original array
-->Syntax:
<array_name>.forEach(function(ele,index){
console.log(element,index)
})*/
var arr=["raj",100,"rahul",true]
arr.forEach(function(ele,index){
    console.log(ele +" " + index)
})
console.log(arr)

/*map() 
> map() should return some value
> returned value is always added in new array
> map() will not alter the original array
*/

var arr1=[10,25,20,8,7]

var new_arr=arr1.map((ele)=>{
    return ele*50
})
console.log(new_arr)
console.log(arr1)

/*filter()
> It is used to filter the elements or data from the array based on certain conditions
>Filter callback function will return boolean value
>It will not alter original array
>It will create new array

>Syntax:<array_name>.filter(function(element,index){
return <boolean value>
})
*/

var arr2=[98,78,23,34,55]
var new_array=arr2.filter(function(ele){
    return ele>55

})
console.log(new_array)
console.log(arr2)

/*sort()
> It is used to sort the array either in ascending or descending order
*/


var names=["vaish","samiksha","sneha"]
console.log(names)
console.log(names.sort())


var arr4=[100,80,60,40,20]
var result=arr4.sort((a,b)=>{
    return a-b //for ascending order
})
console.log(result)

var arr3=[10,20,30,40,50]
var result1=arr3.sort((a,b)=>{
    return b-a //for descending order
})
console.log(result1)

