import  Express  from "express";
import cors from 'cors';
import restaurants from './api/restaurants.route.js';
const app = Express()
app.use(cors())
app.use(Express.json())
app.use("/api/v1/restaurants",restaurants)
app.use("*",(req,res)=>res.status(404).json({Error:"not found"}))

export default app;