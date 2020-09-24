const express = require("express")
const app = express()
const router = require("./routes/route")
const port = 3000
const session = require('express-session')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(
    session({
        secret: 'cakeshoph8',
        resave: false,
        saveUninitialized: true
    }))

app.use(router)

app.listen(port, () => { console.log("listening on port ", port); })




