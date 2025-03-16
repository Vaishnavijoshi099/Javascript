/** Promise:It is the way to handle Asynchronous Operation
 * It represents 3 states/behaviour:
 * 1.fullfill
 * 2.reject
 * 3.Pending
 * .then-->if the promise is resolved or fullfilled
 * .catch-> if the promise is rejected
 */

var d1=new Promise((resolve,reject)=>{
    if(false){  //true for resolving the promise
       resolve("Promise resolved")
    }
    else{
        reject("Promise rejected")
    }
    
})
// d1.then((res)=>{
//     console.log(res)
// })

d1.catch((res1)=>{
    console.log(res1)
});
