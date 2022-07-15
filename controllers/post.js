let post = require("../models/post");

module.exports = {
    index: (req, res) => {
        post.find({})
            .then(posts => {
                res.json(posts)
            })
            .catch(errors => {
                res.json({ error: error })
            })
    },
    show: (req, res) => {
        let postId = req.params.postId;
        post.findById(postId)
            .then(post => {
                res.json({ post })
            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    update: (req, res) => {
        let postId = req.params.postId
        let postInfo = {
            title: req.body.title,
            text: req.body.text,
            userId: req.body.userId
        }
        post.findByIdAndUpdate(postId, { $set: postInfo })
            .then(() => {
                res.json({ message: "post has been updated" })

            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    delete: (req, res) => {
        let postId = req.params.postId
        post.findByIdAndRemove(postId)
            .then(() => {
                res.json({ message: "post is deleted" })
            })
            .catch(error => {
                res.json({ error: error })
            })
    },
    create: (req, res) => {
        let Post = new post({
            title: req.body.title,
            text: req.body.text,
            userId: req.body.userId
        })
        Post.save((error) => {
            if (error)
                res.json({ error: error })
            else
                res.json({ message: "Post created!" })
        })
    }
}