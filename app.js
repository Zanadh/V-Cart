const express = require("express")
const app = express() 
const router = require("./routes/route")
const session = require("express-session")

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(session({
    secret: "qwertyuiop123",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60000
    }
}))

const checkLogin = (req,res,next)=>{
    console.log("middleware check login"); 
    console.log(req.session.isLoggedIn,req.session.userRole,req.session.userName);
    // console.log(req.session);
    if(!req.session.isLoggedIn){ 
        res.redirect("/") 
    }
    next() 
    
}
// app.use(checkLogin)

const port = 3000

app.use(router)

app.listen(port,()=>{console.log("listening on port ", port);})




