const db = require('../models/Index.js');
const express = require("express");
const router = express.Router();
const passport = require("passport")

    /*********************************************Signin API Calls **********************************************/
    router.post('/api/newUser', function (req, res) {
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
    /*********************************************************End of signin api calls **************************************************/
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
        return next();
        res.redirect('/');
    }

    router.get('/api/getUserInfo/:id', function(req, res){
        db.User.findOne({where: {_id: req.params.id}})
        .then((response)=>{
            res.json(response);
        });
    })

    router.post('/api/createGuild', function(req, res){
        console.log(req.body)
        db.Guild.create({
            guildname: req.body.guildname,
            guildmaster: req.body.userId
        }).then(function(response){
            res.json(response);
        }).catch(function(error){
            res.json(error);
        });
    });
    
module.exports = router;