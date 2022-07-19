const router = require('express').Router(),
    userController = require('../controllers/user');

router.get('/', userController.index);
router.get('/:userId', userController.show);
router.put('/:userId/update', userController.update);
router.delete('/:userId/delete', userController.delete);
router.post('/create', userController.create);
router.post('/login', userController.authenticate);

module.exports = router;   