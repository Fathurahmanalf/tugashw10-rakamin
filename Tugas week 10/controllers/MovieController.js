const pool = require('../config/connection');
const multer = require('multer');
const { diskStorage } = require('multer');
const Movie = require('../models/Movie');

class MovieController {
  static uploadMoviePhoto(req, res) {
    multer({ storage: diskStorage }).single("photo")(req, res, (err) => {
      if (err) {
        res.status(400).send({
          status: false,
          data: "Error uploading file.",
        });
      } else {
        const file = req.file.path;
        if (!file) {
          res.status(400).send({
            status: false,
            data: "No File is selected.",
          });
        } else {
          const movieId = req.params.id;
          Movie.uploadPhoto(movieId, file);
          res.send(file);
        }
      }
    });
  }
}

module.exports = MovieController;



