const express =require("express");
const router=express.Router();
const { getStock } =require("../controller/controller.js");

router.get("/stock",getStock);

module.exports = router;