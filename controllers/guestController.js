const { Product, Guest, Cart} = require("../models/index")
const quantityCounter = require("../helpers/qtyCount")

class GuestController{ 
    static getHomePage(req,res){
        let guestId = 2 // testing guestid
        Guest.findByPk(guestId,{include:[Product]})
            .then(data=> { 
                Cart.findAll({where:{GuestId:guestId}})
                    .then(cartData =>{
                        // res.send({data,cartData})
                        // data.Products.forEach(element => {  
                        // for(let i = 0;i<data.products.length;i++){
                        //     let count = 0 
                        //     console.log("test"); 
                        //     data.Products[i].quantity = count
                        // }
                        // res.send(data)
                        // res.send(data) 
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
        // 
    }
    static getDeleteProcess(req,res){
        res.render("homeGuest")
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
                return Cart.create({GuestId:guestId,ProductId:data.id})
            })
            .then(()=>{
                res.redirect("/homeGuest")
            })
            .catch(err=> res.send(err)) 
    }
    
}

module.exports = GuestController