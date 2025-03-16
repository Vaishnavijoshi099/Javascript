/*Destructing an array or Object:
-> It is a technique to unpack properties or elements from object or array and assigning 
variables.  */

// var person={
//     name:"Virat",
//     age:35,
//     city:"Mumbai",
//     gender:"Male"
// }
// //Old approach
// var name=person.name
// var age=person.age
// var city=person.city
// var gender=person.gender

// console.log(name + " " + age + " " + city + " " + gender)

// // //New approach
// const{name,age,city,gender}=person
// console.log(name + " " + age + " " + city + " " + gender)

// //How to destruct the Array:
// var arr=[10,20,30,40,50,60]
// //Old approach
// var ele1=arr[0]
// var ele2=arr[1]
// var ele3=arr[2]
// var ele4=arr[3]
// var ele5=arr[4]
// var ele6=arr[5]

// console.log(ele1+" "+ele2+" "+ele3+" "+ele4+" "+ele5+" "+ele6)
// console.log(ele1+ele2)

// //New approach
// let[element1,element2,element3,element4,element5]=arr
// console.log(element1+element2-element3-element4+element5)


const arr =[10,20,30,40,50]
const [a,b,c]=arr
console.log(a,b,c);

const [a1,b1,...c1]=arr
console.log(a1,b1,c1);

const obj={
    name:'Vaish,The Full Stack Developer',
    age:22,
    city:'Bangalore',
    Country:'India'
}
const {name,...age}=obj
console.log(name,age);
