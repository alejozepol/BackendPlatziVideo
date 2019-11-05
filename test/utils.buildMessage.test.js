const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function () {
  describe('when receives na entity and an action', function(){
    it('should return the respective menssage', function(){
      const result = buildMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    })
  })

  describe('Whrn receives an entity and an action and is a list', function(){
    it('should return the respective message with the entitu in plurar', function(){
      const result = buildMessage('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
    })
  })
})