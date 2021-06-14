import express from "express";
import cors from "cors";
import restuarants from "./api/restuarants.route.js";

const app = express()

app.use(cors())
app.use(express.json())


app.use ("/api/v1/restuarants",restuarants)
app.use("*",(req,res)=>res.status(404).json({error:"not found"}))

export default app;