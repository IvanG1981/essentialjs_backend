const router = require('express').Router();

const postController = require('../controllers/post.controller');

router.route('/compose').post(postController.create);
router.route('/update/:postId').patch(postController.update);
router.route('/remove/:postId').delete(postController.destroy);
router.route('/:postId').get(postController.show);
router.route('/').get(postController.list);



module.exports = router;

