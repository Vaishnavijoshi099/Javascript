/* What is Object?
An Object is a Combination of Properties and behaviour
Objects refers to real world physical entity

-->Object is a concept which will help us to store multiple information in one variable

-->In js we need not need a class to create a object

-->Object in js is a collection of key value pairs

-->All keys inside js objects must be unique

-->How to create a Object?
We can create object in two different ways:
1.Object Literals
2.By using Object Constructor

1.Object Literals:
Syntax:var obj_name={key_name(k1):value,k2:value,k3:value........kn:value}
whole key-value pair is called Object property.
Eg:Let person={name:"Vaish",age:22,city:"Bangalore",gender:female}*/

var person1={name:"Vaish",age:22,city:"Bangalore",gender:"female"}
console.log(person1)


/* By using Object Constructor 
Syntax: var obj_name=new Object()*/

var car = new Object()
car.name="BMW",
car.model=2023,
car.color="black"
console.log(car)

var Product={pname:"Watch",price:1500,category:"Quartz",rating:4.5,stock:true}
console.log(Product)

/*Operations Of Onject:
-->One Object can perform 4 operations:
1.Read/Access the data
2.Write/Update the data
3.Modify the data
4.Delete the data
 
Q1.How to access or read specific property from the Object?
Syntax:obj_name.keyname or obj_name[keyname]
*/

// console.log(Product.pname)
// console.log(Product['rating'])
// console.log(Product.category)

/*2.How to modify or update the value of a property from the Object?
Syntax:obj_name.keyname=new value*/

Product.pname="Automatic Watch"
Product.rating=5
console.log(Product)

/*3.How to insert or add or write new property inside the object?
Syntax: obj_name.keyname=new value or obj_name["keyname"]=new_value*/

Product.brand="Fastrack"
Product['color']="black"
console.log(Product)

/*4.How to delete or remove the property from the object?
syntax:delete obj_name.keyname
--> Delete is a special keyword in javascript */

delete Product.rating
console.log(Product)

 







