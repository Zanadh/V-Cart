
const router = require("express").Router()
const AdminController = require("../controllers/adminController")

// router.get("/", AdminController.getHomePage)
// router.get("/delete/:productId", AdminController.getDeleteProcess) 

// router.get("/scanner", AdminController.getScanPage)  
// router.get("/scanner/add?", AdminController.getScannedPage) 
router.get("/", AdminController.showAllProduct)
router.get("/add", AdminController.addProductForm)
router.post("/add", AdminController.addProductPost)
router.get("/delete/:id", AdminController.deleteProduct)
router.post("/delete/:id", AdminController.deleteProduct)
router.get("/edit/:id", AdminController.editProduct)
router.post("/edit/:id", AdminController.editProductPost)


module.exports = router