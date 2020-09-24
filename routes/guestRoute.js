
const router = require("express").Router() 
const GuestController = require("../controllers/guestController")

router.get("/", GuestController.getHomePage) 
router.get("/delete/:productId", GuestController.getDeleteProcess) 

router.get("/productScan", GuestController.getScanPage)  
router.get("/productScan/add?", GuestController.getScannedPage) 

module.exports = router