const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('service - movies', function () {

  const MoviesService = proxyquire('../Services/movies', {
    '../lib/mongo': MongoLibMock
  });

  const moviesService = new MoviesService()

  describe('when getMovies method us called', async function () {
    it('Should call the get all MongoLib metho', async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true)
    })
    it('shold return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    })
  })
})