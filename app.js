const express = require("express")
const app = express()
const router = require("./routes/route")
const session = require('express-session')

const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(session({
    secret: "qwertyuiop123",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60000
    }
}))
 
  
app.use(router)

app.listen(port, () => { console.log("listening on port ", port); })




