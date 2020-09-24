const router = require("express").Router()
const Controller = require("../controllers/controller")
const guestRoute = require("./guestRoute")
const adminRoute = require("./adminRoute")

router.get("/", Controller.getLogin)

router.get("/loginPage", Controller.getLogin)
router.use("/homeGuest", guestRoute)
router.use("/homeAdmin", adminRoute)

module.exports = router