const express = require("express")
const app = express() 
const router = require("./routes/route")

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
const port = 3000

app.use(router)

app.listen(port,()=>{console.log("listening on port ", port);})




