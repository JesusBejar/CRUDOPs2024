const isAuthenticated = (req, res, next) => {
    if (req.session.user === undefined){
        return res.status(401).json('no way josé')
    }
    next();
}

module.exports = {
    isAuthenticated
}