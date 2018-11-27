const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function (username, password, done) {
		db.User.findOne({ username: username }).then(function (user) {
			user.comparePassword(password, function (error, response) {
				console.log(response);
			  if (error) {
				return done(null, error)
			  }
			  return done(null, user);
		  })
		})
	});

		module.exports = strategy
