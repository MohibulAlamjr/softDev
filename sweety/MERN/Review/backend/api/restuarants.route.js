import express from "express";
import RestaurantsCtrl from "./restuarants.contoller";

const router = express.Router()

router.route("/").get((req,res)=> res.send ("hello world"))

export default router