import app from './server.js';
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDao from './api/dao/restaurantsDAO.js'
dotenv.config()
const MongoClinet=mongodb.MongoClient

const port =process.env.PORT || 8000

MongoClinet.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize:50,
        wtimeout:2500,
        useNewUrlParser:true
    }
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
}
).then(async client=>{
    await RestaurantsDao.injectDB(client)
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})