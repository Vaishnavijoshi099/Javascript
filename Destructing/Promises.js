let data=new Promise((resolve,reject)=>{
    if(true){
        console.log("Promise is Resolved")
    }
    else{
        console.log("Promise is rejected")
    }
})
data.then((res2)=>{
    console.log(result);
})
data.catch((res2)=>{
    console.log(result);
})
