import  Express  from "express";

const router = Express.Router()

router.route("/").get((req,res)=>res.send("hello softDev"))

export default router;