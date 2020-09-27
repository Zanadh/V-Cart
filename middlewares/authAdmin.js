const authAdmin = (req, res, next) => {
    if (req.session.role == 'admin') {
        next()
    } else {
        res.app.locals.error = `Unauthorized access, Admin only`
        res.redirect('/')
    }
}

module.exports = authAdmin