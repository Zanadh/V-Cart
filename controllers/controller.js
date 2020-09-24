
const {Guest,Admin } = require("../models/index") 
class Controller {
    static homePage(req, res) {
        res.render('loginPage')
    }
    static getLogin(req, res) {
        // console.log(req.session);
        res.render("adminLogin")
    }
    static postGuestLogin(req,res){   
        Guest.create(req.body)
            .then((data)=>{  

                req.session.isLoggedIn = true 
                req.session.userRole = 'guest' 
                req.session.userId = data.id
                req.session.userName = data.name
                res.redirect("/homeGuest")
            })
            .catch(err=>{
                res.send(err)
            })
    }
    static postLogin(req, res) {
        Admin.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                if(!data){
                    res.redirect("/adminLogin")
                }
                if(data.password === req.body.psw){
                    req.session.isLoggedIn  = true
                    req.session.userRole  = 'admin'
                    req.session.userName = data.username 
                    req.session.userId =  data.id
                }else{
                    res.render("error", {data:"wrong password"})
                }
                // res.send(req.session)
                res.redirect("/homeAdmin")
            })
            .catch(err => {
                res.send(err)
            })
        // res.send(req.body) 
    }
    static getLogout(req,res){
        req.session.isLoggedIn = false
        req.session.userRole = null
        req.session.userId = null
        req.session.userName = null

        res.redirect("/")
    }

}
module.exports = Controller