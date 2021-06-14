import express from "express"
import RestaurantsCtrl from './restaurants.contoller';


const router=express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

export default router