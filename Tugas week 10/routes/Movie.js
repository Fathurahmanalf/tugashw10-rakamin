const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController');
const multer = require('multer');
const diskStorage = require('../middlewares/multer');



router.put('/:id/upload', multer({ storage : diskStorage}).single("photo"), MovieController.uploadMoviePhoto);

module.exports = router;