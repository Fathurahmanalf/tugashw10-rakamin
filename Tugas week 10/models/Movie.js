const pool = require('../config/connection');

class Movie {
  static uploadPhoto(index, filePath) {
    upload[index].photo = filePath;
  }

  static getPhoto(index) {
    return upload[index].photo;
  }
}


module.exports = Movie;

