const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.colection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.colection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.colection, movieId);
    return movie || [];
  }

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.colection, movie);
    return createMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updateMovieId = await this.mongoDB.update(
      this.colection,
      movieId,
      movie
    );
    return updateMovieId;
  }

  async deleteMovie({ movieId }) {
    const deleteMovieId = await this.mongoDB.delete(this.colection, movieId);
    return deleteMovieId;
  }
}

module.exports = MoviesService;
