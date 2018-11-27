const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const path = require('path');
const db = require('./models/index.js');
const MONGODB_URI = "mongodb://localhost/chorequest";
const passport = require("./passport");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

/* Express app ROUTING */
app.use('/api/login', require('./routes/auth-routes.js'));
const api = require("./routes/api-routes.js");
app.use(api);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});