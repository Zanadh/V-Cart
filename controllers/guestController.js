const { Product, Guest, Cart} = require("../models/index")
const quantityCounter = require("../helpers/qtyCount")
const qr = require("qrcode");

class GuestController{ 
    static getHomePage2(req,res){ 
        Cart.findAll({ 
            include:[Product]
        })
            .then(cartData =>{ 
                // console.log(cartData[0].id);
                res.send(cartData)
                // res.render("homeGuest2",{data:cartData})
            }) 
            .catch(err=>{
                res.send(err)
            }) 
    }
    static getHomePage(req,res){
        // let guestId = 97 // testing guestid
        // Guest.findByPk(guestId,{include:[Product]})
        Guest.findByPk(req.session.userId,{include:[Product]})
            .then(data=> { 
                // Cart.findAll({where:{GuestId:guestId}})
                Cart.findAll({where:{paymentStatus:false,GuestId:req.session.userId}})
                    .then(cartData =>{
                        // res.send({data,cartData}) 
                        data.helper = {quantityCounter}
                        res.render("homeGuest",{data,cartData})
                    }) 
                    .catch(err=>{
                        res.send(err)
                    })
            })
            .catch(err=> {
                console.log(err);
                res.send(err)
            })  
    }

    // static getDeleteProcess(req,res){  


        // Cart.findOne({Where:{ProductId: req.params.productId,GuestId : req.session.userId} })
        // .then(data=>{
        //     // res.send(data)
        //     return Cart.destroy(data)
        // })
        // .then(()=>{ res.redirect("/homeGuest")})
        // .catch(err=>{res.send(err)})
        // Cart.findOne({ProductId: req.params.productId},
        //     { where:{GuestId : req.session.userId}
        //   }).then(function (record) {
        //     return record.destroy({ProductId: req.params.productId});
        //   }).then(function (record) {
        //     //   res.sendStatus(200);
        //     res.redirect("/homeGuest")
        //   }).catch(err=>{res.send(err)})
    // }
    static getDeleteProcess(req,res){ 
        Cart.destroy({where:{ProductId:req.params.productId,GuestId:req.session.userId}, limit:1}) 
            .then(data=>{
                res.redirect("/homeGuest")
            })
            .catch(err=>{
                res.send(err)
            }) 
    }
    static getScanPage(req,res){
        res.render("scanner") 
    }
    static getScannedPage(req,res){ 
        let guestId = 2 // testing guestid
        Product.findByPk(req.query.id)
            .then(data => {
                if(!data) { 
                    res.redirect("error?err=product+not+found")
                }
                return Cart.create({GuestId:req.session.userId,ProductId:data.id,paymentStatus:false})
            })
            .then(()=>{
                res.redirect("/homeGuest")
            })
            .catch(err=> res.send(err)) 
    }
    static getPaymentPage(req,res){
            let id = String(req.session.userId);
            // id = '6'

        if (!id) res.send("Empty Data!");
        qr.toDataURL(id, (err, src) => {
            if (err) res.send("Error occured");
            console.log(src);
            res.render("paymentPage", { src });
        });
        // qr.toString(id, (err, src) => {
        //     if (err){
        //         console.log(err);
        //         res.send("Error occured"); 
        //     } else{
        //         console.log(src);
        //         res.render("paymentPage", { src });
        //     }
        // });
    }
    
    static getLogout(req,res){
        req.session.isLoggedIn = false
        req.session.userRole = null
        req.session.userId = null
        req.session.userName = null
        res.redirect("/")
    }
    
}

module.exports = GuestController