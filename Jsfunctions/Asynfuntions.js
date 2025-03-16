/* Async function: async function is introduced in ES-8 make it easier to work with
promises.They are declared with 'async' keyword and use the 'await' keyword to pause
execution until promise is resolved */

async function fetchData(){
    let response=await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    console.log(data)
}
fetchData()