const express = require('express');
const passport = require("passport");
const session  = require('express-session')
const mongoose = require('mongoose');
const path = require('path');
const db = require('./models/Index.js');
const MONGODB_URI = "mongodb://localhost/chorequest";

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require('./routes/api-routes')(app);

require("./config/passport.js")(passport, db.User);

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});