
const router = require("express").Router() 
const GuestController = require("../controllers/guestController")

router.get("/", GuestController.getHomePage) 
router.get("/delete/:productId", GuestController.getDeleteProcess) 

router.get("/scanner", GuestController.getScanPage)  
router.get("/scanner/add?", GuestController.getScannedPage) 

module.exports = router