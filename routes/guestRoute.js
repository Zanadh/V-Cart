
const router = require("express").Router() 
const GuestController = require("../controllers/guestController")
const checkLogin = require("../middlewares/checkLogin")

// const checkLogin = (req,res,next)=>{
//     console.log("middleware check login"); 
//     console.log(req.session.isLoggedIn,req.session.userRole,req.session.userId,req.session.userName);
//     // console.log(req.session);
//     if(!req.session.isLoggedIn){ 
//         res.redirect("/") 
//         // next()  
//     }else{
//         next()  
//     } 
// }
// app.use(checkLogin)
router.get("/",checkLogin, GuestController.getHomePage) 
router.get("/payment",checkLogin, GuestController.getPaymentPage) 
router.get("/delete/:id",checkLogin, GuestController.getDeleteProcess) 

router.get("/productScan",checkLogin, GuestController.getScanPage)  
router.get("/productScan/add?",checkLogin, GuestController.getScannedPage)  
router.get("/productScan/add?",checkLogin, GuestController.getScannedPage)  

router.get("/logout",checkLogin, GuestController.getLogout)  

module.exports = router