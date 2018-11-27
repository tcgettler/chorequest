const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, user){
  let User = user;
  passport.serializeUser(function (user, done) {
    console.log("serialize")
    done(null, user.id);
  });


  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if(user){
        done(null, user);
      }
      else{
        done(user.errors,null);
      }
    });

}); 
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    
    {
    passReqToCallback : true // allows us to pass back the entire request to the callback
    },
  
    function(req, username, password, done) {
        console.log("OK");

    }
    ));
};