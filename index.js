// const {MongoClient}= require('mongodb');
// //path of mongodb
// //mongodb://localhost:27017  //timeout error
// const url = 'mongodb://127.0.0.1:27017'
// const database = 'e-comm'
// const client = new MongoClient(url)


// async function getData()
// {
//     let result = await client.connect();
//     //which database u want to connect
//     let db = result.db(database)
//     //which collection
//     let collection = db.collection('products')
//    let response =  await collection.find({name:'nord'}).toArray();
//     console.log(response)
// }

//getData()


//create seperate file
//suppose there are multiple database and collection so it will multiple methods to connect database 
//and that will be time consuming
//memory allocation is also large
//so we will keep one configue file



// async function dbConnection()
// {
//     let result = await client.connect();
//     //which database u want to connect
//     let db = result.db(database)
//     //which collection
//     return db.collection('products')
    
// }

// dbConnection()

// console.warn(dbConnection())
//get promise
//promise can be handle by  2 way
//async await // promise

// dbConnection().then((res)=>{
// res.find().toArray().then(data => console.log(data))
// })


//
//  const main = async ()=>{
//     let data = await dbConnection()
//     data = await data.find().toArray()
//     console.log(data)
// }
// main()


const dbConnect = require('./mogodb')

 const main = async ()=>{
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}
main()