const Movie = require('../models/Movie.js');

class MovieController {
  static uploadMoviePhoto(req, res) {
    const movieId = req.params.id;
    const filePath = req.file.path

    Movie.putPhoto(movieId, filePath, (err, result) => {
      if(err){
        res.send(err);
      } else{
        res.status(201).json({ result });
      }
    });
  }
}

module.exports = MovieController;



