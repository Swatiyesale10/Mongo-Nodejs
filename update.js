const dbConnect = require('./mogodb');

const updateData = async () =>{
    let data =  await dbConnect()
    let result = await data.updateOne(
        { name:'max pro5'},
        {$set:{name:'max pro 5', price:550}}
        )
        console.log(result)
}

updateData()