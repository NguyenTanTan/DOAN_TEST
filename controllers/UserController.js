class UserController{
    // [GET] users/login 
    showLogIn(req, res) {
        res.render('loginPage')
    }

    // [GET] users/signup 
    showSignUp(req, res) {
        res.render('signUpPage')
    }
}

module.exports = new UserController