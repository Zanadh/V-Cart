
class GuestController{ 
    static getHomePage(req,res){
        res.render("homeGuest")
    }
    static getDeleteProcess(req,res){
        res.render("homeGuest")
    }
    static getScanPage(req,res){
        res.render("scanner")
    }
    static getScannedPage(req,res){
        // masukin ke cart
        res.render("scanner")
    }
    
}

module.exports = GuestController