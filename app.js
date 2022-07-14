const express = require('express');
const mongoose = require('mongoose');

app = express();

app.get('/', (req, res) => {
    res.json({ message: "Ayo" });
});

app.listen(3000, () => {
    console.log("express started!!")
});