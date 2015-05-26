var assert = require('assert');
var sha1Hex = require('./');

describe('sha1 hex', function() {
  it('should equal', function() {
    var hash = sha1Hex(new Buffer('unicorn'))
    assert.equal(hash, '84de6753b298abd027fcd1d790eade2413eafb5a');
  });
});
