const express = require('express');
const mongoose = require('mongoose');
const User = require("./models/user");



app = express();
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const router = require('./routes/index');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blogs', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(express.json());

app.use(cookieParser('gamifier'));
app.use(expressSession({
    secret: 'gamifier',
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 6000 }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);

app.use('/', router);

app.listen(3000, () => {
    console.log("express started!!")
});