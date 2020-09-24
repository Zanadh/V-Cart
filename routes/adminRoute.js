const router = require("express").Router()
const AdminController = require("../controllers/adminController") 
  
const checkLogin = (req,res,next)=>{
    console.log("middleware check login"); 
    console.log(req.session.isLoggedIn,req.session.userRole,req.session.userId,req.session.userName);
    // console.log(req.session);
    if(!req.session.isLoggedIn){ 
        res.redirect("/") 
        // next()  
    }else{
        next()  
    } 
}
// router.get("/", AdminController.getHomePage)
// router.get("/delete/:productId", AdminController.getDeleteProcess) 
 
router.get("/scanner", AdminController.getScanPage)  
router.get("/scanner/pay?", AdminController.getScannedPage)  
router.get("/logout",checkLogin, AdminController.getLogout)
router.get("/",checkLogin, AdminController.showAllProduct)
router.get("/add",checkLogin, AdminController.addProductForm)
router.post("/add",checkLogin, AdminController.addProductPost)
router.get("/delete/:id",checkLogin, AdminController.deleteProduct)
router.post("/delete/:id",checkLogin, AdminController.deleteProduct)
router.get("/edit/:id",checkLogin, AdminController.editProduct)
router.post("/edit/:id",checkLogin, AdminController.editProductPost)


module.exports = router