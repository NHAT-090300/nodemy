const viewLogin = (req, res) => {
    return res.render('pages/user/login', { layout: 'layout1' })
}
const viewRegister = (req, res) => {
    return res.render('pages/user/register', { layout: 'layout1' })
}
const profile = (req, res) => {
    return res.render('pages/index.ejs', { layout: false })
}
module.exports = {
    viewLogin,
    viewRegister,
    profile
}
