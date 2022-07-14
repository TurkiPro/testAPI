const router = require('express').Router();
postController = require('../controllers/post');

router.get('/', postController.index);
router.get('/:postId', postController.show);
router.put('/:postId/update', postController.update);
router.delete('/:postId/delete', postController.delete);

module.exports = router;