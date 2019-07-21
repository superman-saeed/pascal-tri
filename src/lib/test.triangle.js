
const assert = chai.assert;

// Use "tdd" interface.  This is a shortcut to setting the interface;
// any other options must be passed via an object.
mocha.setup('tdd');

// This is equivalent to the above.
mocha.setup({
  ui: 'tdd'
});

// Use "tdd" interface, ignore leaks, and force all tests to be asynchronous
mocha.setup({
  ui: 'tdd',
  ignoreLeaks: true,
  asyncOnly: true
});


describe("#nextRow",function(){
  it('should return array of the next row in triangle', function(done) {
    assert.equal(nextRow([1,2,1]).toString(), [1,3,3,1].toString());
    done();
  });

});

describe("pascal triangle",function(){
  it('should return a pascal triangle of size 4', function(done) {
    assert.equal(triangle(4).toString(), [[1],[1,1],[1,2,1], [1,3,3,1],[1,4,6,4,1]].toString());
    done();
  });

});
