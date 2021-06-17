import  Express  from "express";
import RestaurantsContoller from "../api/restaurants.contoller";

const router = Express.Router()

router.route("/").get(RestaurantsContoller.apigetRestaurants)

export default router;