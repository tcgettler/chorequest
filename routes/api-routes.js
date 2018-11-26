const passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy;
const db = require('../models/Index.js');

module.exports = function (app) {
    /*********************************************Signin API Calls **********************************************/
    app.post('/api/newUser', function (req, res) {
        db.User.create({
          username: req.body.content.username,
          email:req.body.content.email,
          password: req.body.content.password,
        }).then(function (response) {
          res.json(response);
        }).catch(function(error){
            res.json(error);
        });
    });

    app.post('/api/login',
        passport.authenticate('local-signin'),
        function (req, res) {
        console.log('test')
        res.json({
            user: req.user,
            success: true
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
        return next();
        res.redirect('/');
    }

    app.get('/api/login', isLoggedIn, function(req, res){
        res.json(req.user);
    })
    /*********************************************************End of signin api calls **************************************************/
  
}