const express = require('express');
const mongoose = require('mongoose');

app = express();
const router = require('./routes/index');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blogs', {
    useNewUrlParser: true
});

app.use('/', router);

app.get('/', (req, res) => {
    res.json({ message: "Ayo" });
});

app.listen(3000, () => {
    console.log("express started!!")
});