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
module.exports = checkLogin