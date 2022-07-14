const router = require('express').Router();
userController = require('../controllers/user');

router.get('/', userController.index);

module.exports = router;