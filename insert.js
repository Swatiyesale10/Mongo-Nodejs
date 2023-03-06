const dbConnect = require('./mogodb')

const insert =async ()=>{

const db = await dbConnect()
//db.insert is not working
const result = await db.insertMany([{
    name:'max 1',
    brand:'micromax',
    price:320,
    category:'mobile'
},
{
    name:'max 2',
    brand:'micromax',
    price:220,
    category:'mobile'
},
{
    name:'max 3',
    brand:'micromax',
    price:420,
    category:'mobile'
}])
console.log(result)

}

insert()