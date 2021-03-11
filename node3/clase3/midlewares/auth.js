const verifyAdmin = (req, res, next) => {
    req.session.idUser && req.session.admin == 1 //condicion
    ? (next()) //si se cumple
    :res.redirect('/login'); //si no se cumple
}
const verifyUser = (req, res, next) => {
    req.session.idUser
    ? (next())
    : res.redirect('/login')
}

module.exports  = {verifyAdmin, verifyUser};