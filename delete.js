const dbConnect = require('./mogodb');
const deleteData = async () =>{
    let data = await dbConnect()
    let result = await data.deleteOne({name:'max pro 5'})
   // let result = await data.deleteMany({name:'max 1'},{name:'max 2'})
   //let result = await data.deleteMany({name:'max 1'})
   //if data is not in database and trying to delete data
   //then { acknowledged: true, deletedCount: 0}
    console.log(result)

}
deleteData()