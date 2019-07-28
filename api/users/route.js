let express = require("express");
let userControler= require("./controller");
let router = express.Router();
router.post("/",userControler.addUser)
router.get("/",userControler.getUsers)
module.exports = router
