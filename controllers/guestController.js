const { Product, Guest, Cart} = require("../models/index")
const quantityCounter = require("../helpers/qtyCount")

class GuestController{ 
    static getHomePage2(req,res){ 
        Cart.findAll({
            where:{GuestId:req.session.userId},
            include:[Product]
        })
            .then(cartData =>{ 
                res.render("homeGuest",{data:cartData})
            }) 
            .catch(err=>{
                res.send(err)
            }) 
    }
    static getHomePage(req,res){
        // let guestId = 2 // testing guestid
        Guest.findByPk(req.session.userId,{include:[Product]})
            .then(data=> { 
                Cart.findAll({where:{GuestId:req.session.userId}})
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

    static getDeleteProcess(req,res){
        res.send(req.params)
        // Cart.findAll({where:{ProductId:req.params.productId}})
        //     .then(data=>{
                
        //     })
        // res.render("homeGuest")
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
                return Cart.create({GuestId:req.session.userId,ProductId:data.id})
            })
            .then(()=>{
                res.redirect("/homeGuest")
            })
            .catch(err=> res.send(err)) 
    }
    static getLogout(req,res){
        res.redirect("/")
    }
    
}

module.exports = GuestController