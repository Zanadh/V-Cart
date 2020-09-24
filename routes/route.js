const router = require("express").Router()
const Controller = require("../controllers/controller")
const guestRoute = require("./guestRoute")
const adminRoute = require("./adminRoute") 
router.get("/", Controller.getLogin)
// router.get("/loginPage", Controller.getLogin)
router.get("/logout", Controller.getLogout)
router.post("/guestLogin", Controller.postGuestLogin) 
 
router.use("/homeGuest", guestRoute)
router.use("/homeAdmin", guestRoute)

module.exports = router