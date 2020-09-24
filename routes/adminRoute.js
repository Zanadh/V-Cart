
const router = require("express").Router() 
const AdminController = require("../controllers/adminController")

router.get("/", AdminController.getHomePage) 
// router.get("/delete/:productId", AdminController.getDeleteProcess) 

// router.get("/scanner", AdminController.getScanPage)  
// router.get("/scanner/add?", AdminController.getScannedPage) 

module.exports = router