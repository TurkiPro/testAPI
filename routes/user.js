const router = require('express').Router(),
    userController = require('../controllers/user');

router.post('/login', userController.authenticate);
router.use(userController.verifyJWT);
router.get('/', userController.index);
router.get('/:userId', userController.show);
router.put('/:userId/update', userController.update);
router.delete('/:userId/delete', userController.delete);
router.post('/create', userController.create);

module.exports = router;   