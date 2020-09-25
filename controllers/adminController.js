const { Product, Admin ,Cart} = require('../models/index')


class AdminController {
    static getHomePage(req, res) {
        res.render('homeAdmin')
    }
    static showAllProduct(req, res) {
        Product.findAll()
            .then(data => {
                // res.send(data)
                res.render('homeAdmin', { data: data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static addProductForm(req, res) {
        res.render('addProduct')
    }
    static addProductPost(req, res) {
        let obj = {
            name: req.body.name,
            type: req.body.type,
            stock: req.body.stock,
            price: req.body.price
        }
        Product.create(obj)
            .then(data => {
                console.log(data);
                // res.send(data)
                res.redirect('/homeAdmin')
            })
            .catch(err => {
                res.render("error",{data:err})
                res.send(err)
            })
    }
    static deleteProduct(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.redirect('/homeAdmin')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static getScanPage(req, res) {
        res.render("scanPay")
    }
    static getScannedPage(req, res) {
        // res.send(req.query)
        Cart.update({paymentStatus:true},{where:{GuestId:req.query.id}})
            .then(data=>{
                console.log(data);
                // res.send(data)
                res.redirect("/homeAdmin")
            })
            .catch(err=>{
                console.log(err);
                res.send(err)
            })
    }
    static editProduct(req, res) {
        Product.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.render('editProduct', { data: data })
            })
    }
    static editProductPost(req, res) {
        let obj = {
            name: req.body.name,
            type: req.body.type,
            stock: req.body.stock,
            price: req.body.price,
        }
        Product.update(obj, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/homeAdmin')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static getLogout(req,res){
        req.session.isLoggedIn = false
        req.session.userRole = null
        req.session.userId = null
        req.session.userName = null
        res.redirect("/")
    }
}

module.exports = AdminController