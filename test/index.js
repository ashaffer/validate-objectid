var assert = require('assert');
var objectid = require('..');

describe('validate-objectid', function() {
  it('should work', function() {
    assert(! objectid());
    assert(! objectid('test'));
    // 24 character string
    assert(! objectid('abcdefghijklmnopqrstuvwx'));
    assert(objectid('542f9cabed89afee4aaf2e61'));
  });
});