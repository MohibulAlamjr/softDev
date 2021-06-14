import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./api/DAO/restuarantDAO";

dotenv.config()


const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50,
        wtimeout:2500,
        useNewUrlParser:true
    }
).catch (err=>{
    console.error(err.stack)
    process.exit(1)
})
.then (async client =>{
    await RestaurantsDAO.injectDB(client)
    app.listen (port,() =>{
       console.log(`Listening on port ${port}`)
    })
})
