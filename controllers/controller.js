const {Guest } = require("../models/index")
class Controller{ 
    static getLogin(req,res){
        res.render("loginPage")
    }
    static getLogout(req,res){
        req.session.isLoggedIn = false
        req.session.userRole = null
        req.session.userId = null
        req.session.userName = null

        res.redirect("/")
    }
    static postGuestLogin(req,res){   
        Guest.create(req.body)
            .then((data)=>{ 
                console.log(data); 
                req.session.isLoggedIn = true
                req.session.userRole = 'Guest'
                req.session.userId = data.id
                req.session.userName = data.name
                // console.log("--------------");
                // console.log(req.session);
                res.redirect('/homeGuest')  

            })
            .catch(err=> res.send(err))
    }
}

module.exports = Controller