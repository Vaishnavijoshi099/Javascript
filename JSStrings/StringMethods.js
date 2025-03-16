/* String Methods:
1.charAt()
2.toLowerCase()
3.toUpperCase()
4.slice()
5.substring()
6.replace() 
7.replaceAll()
8.trim()
9.concate()
*/

//1.charAt(): Whenever from a String if we need to extract specific character we use charAt()
var str="    hello world       "
console.log(str.charAt(6)) //w
console.log(str.charAt(8)) //r

//2.toLowerCase(): All the characters will be converted to lowercase
var str1="VAISHNAVI"
console.log(str1.toLowerCase())

//3.toUpperCase(): all the charaters will be converted to Upper case
console.log(str.toUpperCase())

/*4.slice():
>When ever we want to extract a substring from a string we can use slice()
> Syntax: slice(begin_index)
        slice(begin_index,end_index)
>In slice method it will accept negative index values.
*/
console.log(str1.slice(3,6))
console.log(str1.slice(-2))

/*5.substring:
> Its almost similar to slice() method
> The difference between slice and substring is substring does not support -ve values
*/
console.log(str.substring(2)) //llo world
console.log(str.substring(-2)) //hello world

//6.replace():When we wamt to replace a particular string with new String we use replace() method
console.log(str.replace("hello","hi")) //hi world

//7.replaceAll(): When all the occurrences with new string we can't use replace() rather we should use replaceAll()
var str4="hello hello world"
console.log(str4.replaceAll("hello","hi"))

//8.trim():Inorder to remove the whitespaces from the string we use trim()
console.log(str.trim()) //removes whitespaces before and after the String and it won't remove spaces between the Strings

//9.concat(): Combining two Strings 
var string1 = "welcome"
console.log(str4.concat(string1))




