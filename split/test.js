var assert = console.assert
var split = require('./')

var data = new Uint8Array([1, 2, 3, 4, 5])
var chunks = split(data, 2)

assert(chunks.length === 3, 'correct number of chunkss', chunks.length)
assert(chunks.get(0)[0] === 1, 'correct chunks value', chunks.get(0)[0])
assert(chunks.get(0)[1] === 2, 'correct chunks value', chunks.get(0)[1])
assert(chunks.get(1)[0] === 3, 'correct chunks value', chunks.get(1)[0])
assert(chunks.get(1)[1] === 4, 'correct chunks value', chunks.get(1)[1])
assert(chunks.get(2)[0] === 5, 'correct chunks value', chunks.get(2)[0])
assert(chunks.get(2)[1] === void 0, 'correct chunks value', chunks.get(2)[1])
assert(chunks.length === 3, 'correct number of chunkss', chunks.length)
