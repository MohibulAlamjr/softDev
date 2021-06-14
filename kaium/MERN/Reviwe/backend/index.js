import app from "./server.js";
import dotenv from 'dotenv';
import mongodb from 'mongodb'
dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000
MongoClient.connect(
process.env.RESTREVIEWS_DB_URI,
{
    poolSize:50,
    wtimeout:2500,
    useNewUrlparse:true
}
)
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})