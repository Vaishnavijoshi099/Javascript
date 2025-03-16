var person={
    name:"Vaishnavi",
    age:22,
    gender:"female",
    address:{
        state:"Karnataka",
        city:"Kalaburagi",
        pincode:585102,
        Area:{
            main:"3rd main",
            cross:"8th cross",
            h_no:"1-892/1"
        }
    }
    

}
//console.log(person)
console.log(person.gender) //access the data
console.log(person.address.city) //accessing the nested object values
console.log(person.address.Area.h_no)

/*How to add function inside the Object? */

var person1={
    name:"Virat",
    age:35,
    city:"mumbai",
    play:function(){
        console.log(this.name+" "+"is playing")
    },
    eat:function(){
        console.log(this.name+ " " + "is eating")
    }

}
//console.log(person1.play())
person1.play()
person1.eat()

/* How to retrieve only the keynames?
Syntax:Object.keys(obj_name)*/

console.log(Object.keys(person1))

/*How to retrieve only the values from the Object?
Syntax:Object.values(obj_name)*/

console.log(Object.values(person1))


