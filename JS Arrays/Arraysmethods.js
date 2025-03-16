/*slice()
Whenever we need to extract particular elements from array we can use slice()
Syntax:slice(startindex,endindex)*/

var arr=[10,"sachin",true,15.687,"virat","y"]
var res=arr.slice(1)
console.log(res)
console.log(arr.slice(2,5))
console.log(arr)//slice method will not alter the original Array

/*Splice()
-->Extraction starts at the start index extracts the length of number
of elements from the Array
--> It will alter the original array.
Syntax:splice(start_index,length)
*/

var arr2=["Vaish",23,15.90,"x",99.09]
console.log(arr2.splice(0,3))
console.log(arr2)
