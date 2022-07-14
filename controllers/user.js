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
    }
}