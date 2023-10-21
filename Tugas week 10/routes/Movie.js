const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController');
const upload = require('../middlewares/multer.js');


router.put('/:id/upload', MovieController.uploadMoviePhoto);

module.exports = router;