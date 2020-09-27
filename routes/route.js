const router = require("express").Router()
const Controller = require("../controllers/controller")
const guestRoute = require("./guestRoute") 
const adminRoute = require("./adminRoute")   

router.post("/guestLogin", Controller.postGuestLogin) 
 

router.get("/", Controller.homePage)
router.get("/logout", Controller.getLogout)
router.get("/adminLogin", Controller.getLogin)
router.post("/adminLogin", Controller.postLogin)




router.get("/loginPage", Controller.getLogin) 
router.use("/homeGuest", guestRoute)
router.use("/homeAdmin", adminRoute)

module.exports = router