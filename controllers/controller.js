const { Admin } = require('../models/index')

class Controller {
    static homePage(req, res) {
        res.render('loginPage')
    }
    static getLogin(req, res) {
        // console.log(req.session);
        res.render("adminLogin")
    }
    static postLogin(req, res) {
        Admin.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                if(data.password === req.body.psw){
                    req.session.isLogin  = true
                    req.session.name = data.username
                }
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
        // res.send(req.body)

    }
}

module.exports = Controller