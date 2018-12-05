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
            guildmaster: req.body.userId,
        }).then(function(response){
            res.json(response);
        }).catch(function(error){
            res.json(error);
        });
    });

    router.post('/api/Quests', function(req, res){
        db.Quests.create({
            questName: req.body.questName,
            area: req.body.area,
            reward: req.body.reward
        }).then(function(response){
            db.Guild.findByIdAndUpdate({_id: req.body.guildId}, {$push: {quests:response._id}}).then(function(data){
                console.log(data);
                res.json(data)
        }).catch(function(err){
            res.json(err);
        });
    });
    });

    router.post('/api/Encounters', function(req, res){
        db.Encounter.create({
            encounterName: req.body.questName,
            area: req.body.area,
            reward: req.body.reward
        }).then(function(response){
            db.Guild.findByIdAndUpdate({_id: req.body.guildId}, {$push: {encounters:response._id}}).then(function(data){
                res.json(data)
        }).catch(function(err){
            res.json(err);
        });
    });   
    });

    router.post('/api/Bosses', function(req, res){
        db.Boss.create({
            bossName: req.body.questName,
            area: req.body.area,
            reward: req.body.reward
        }).then(function(response){
            db.Guild.findByIdAndUpdate({_id: req.body.guildId}, {$push: {bosses:response._id}}).then(function(data){
                res.json(data)
        }).catch(function(err){
            res.json(err);
        });
    });   
    });
    
module.exports = router;