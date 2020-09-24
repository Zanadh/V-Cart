const { Product, Admin } = require('../models/index')


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
                res.redirect('/homeAdmin')
            })
            .catch(err => {
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
        res.send('')
    }
    static getScannedPage(req, res) {
        res.send('')
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
    static logout(req, res) {
        // req.session.destroy(err => {
        //     if (err) {
        //         res.dend(err)
        //     } else {
        //         res.redirect('/login')
        //     }
        // })
        res.send(req.session)
    }
}

module.exports = AdminController