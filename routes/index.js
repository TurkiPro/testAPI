const router = require('express').Router();
userRoutes = require('./user');
postRoutes = require('./post');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;