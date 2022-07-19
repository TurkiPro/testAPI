const passport = require("passport");
const User = require("../models/user");

module.exports = {
    index: (req, res) => {
        User.find({})
            .then(users => {
                res.json(users)
            })
            .catch(errors => {
                res.json({ error: error })
            })
    },
    show: (req, res) => {
        let userId = req.params.userId;
        User.findById(userId)
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
        User.findByIdAndUpdate(userId, { $set: userInfo })
            .then(User => {
                res.json({ message: "User info has been updated" })

            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    delete: (req, res) => {
        let userId = req.params.userId
        User.findByIdAndRemove(userId)
            .then(() => {
                res.json({ message: "User is deleted" })
            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    create: (req, res) => {
        let newUser = new User({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        })
        User.register(newUser, req.body.password, (error, user) => {
            if (user) {
                res.json({ message: "New user created!" })
            } else {
                res.json({ error: error })
            }
        })
    },
    authenticate: (req, res) => {
        passport.authenticate('local', (error, user) => {
            if (user) {
                let signedToken = jsonWeb.sign({
                    data: user._id,
                    exp: new Date().setDate(new Date().getDate() + 1)
                }, 'Turki767')
                res.json({
                    success: true,
                    token: signedToken
                })
            }
            else {
                res.json({
                    success: false,
                    message: 'Could not authenticate user'
                })
            }
        })
    }
}