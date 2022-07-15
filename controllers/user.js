const user = require("../models/user");

module.exports = {
    index: (req, res) => {
        user.find({})
            .then(users => {
                res.json(users)
            })
            .catch(errors => {
                res.json({ error: error })
            })
    },
    show: (req, res) => {
        let userId = req.params.userId;
        user.findById(userId)
            .then(user => {
                res.json({ user })
            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    update: (req, res) => {
        let userId = req.params.userId
        let userInfo = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
        user.findByIdAndUpdate(userId, { $set: userInfo })
            .then(user => {
                res.json({ message: "User info has been updated" })

            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    delete: (req, res) => {
        let userId = req.params.userId
        user.findByIdAndRemove(userId)
            .then(() => {
                res.json({ message: "User is deleted" })
            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    create: (req, res) => {
        let newUser = new user({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        })
        user.register(newUser, req.body.pass, (error, user) => {
            if (user) {
                res.json({ message: "New user created!" })
            } else {
                res.json({ error: error })
            }
        })


    }
}