var assert = console.assert
var test = require('dexy')
var split = require('./')

var data = new Blob([new Uint8Array([1, 2, 3, 4, 5])])
var chunks = split(data, 2)

test(function (next) {
  assert(chunks.length === 3, 'correct number of chunkss', chunks.length)
  next()
})

test(function (next) {
  chunks.get(0, function (err, p) {
    assert(err === null, 'no error', err)
    assert(p[0] === 1, 'correct chunks value', p[0])
    assert(p[1] === 2, 'correct chunks value', p[1])
    next()
  })
})

test(function (next) {
  chunks.get(1, function (err, p) {
    assert(err === null, 'no error', err)
    assert(p[0] === 3, 'correct chunks value', p[0])
    assert(p[1] === 4, 'correct chunks value', p[1])
    next()
  })
})

test(function (next) {
  chunks.get(2, function (err, p) {
    assert(err === null, 'no error', err)
    assert(p[0] === 5, 'correct chunks value', p[0])
    assert(p[1] === void 0, 'correct chunks value', p[1])
    next()
  })
})

test(function (done) {
  assert(chunks.length === 3, 'correct number of chunkss', chunks.length)
  done()
})
