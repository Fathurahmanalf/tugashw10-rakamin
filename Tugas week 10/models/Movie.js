const pool = require('../config/connection');

class Movie {
  static async putPhoto(id, photo) {
    try {
        const query = `UPDATE public.movies SET photo = $1 WHERE id = $2`;
        const result = await pool.query(query, [photo, id]);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
  }
}
module.exports = Movie;

