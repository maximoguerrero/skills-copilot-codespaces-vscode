// Create webserver with express
const express = require('express');
const router = express.Router();

// Import controller
const commentsCtrl = require('../controllers/comments');

// Create routes
router.post('/', commentsCtrl.createComment);
router.get('/', commentsCtrl.getAllComments);
router.get('/:id', commentsCtrl.getOneComment);
router.put('/:id', commentsCtrl.modifyComment);
router.delete('/:id', commentsCtrl.deleteComment);

// Export
module.exports = router;