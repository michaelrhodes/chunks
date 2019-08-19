var assert = console.assert
var split = require('../split')
var join = require('./')

var data = new Uint8Array([1, 2, 3, 4, 5])
var chunks = split(data, 2)
var file = join(chunks.length)

assert(chunks.length === 3, 'correct number of chunks', chunks.length)
assert(file.complete === false, 'corrent complete value', file.complete)

file.set(0, chunks.get(0))
file.set(1, chunks.get(1))
file.set(2, chunks.get(2))

assert(file.complete === true, 'corrent complete value', file.complete)
assert(file.value.length === data.length, 'correct value length', file.value.length)
assert(file.value[0] === data[0], 'correct value[0]', file.value[0])
assert(file.value[1] === data[1], 'correct value[1]', file.value[1])
assert(file.value[2] === data[2], 'correct value[2]', file.value[2])
assert(file.value[3] === data[3], 'correct value[3]', file.value[3])
assert(file.value[4] === data[4], 'correct value[4]', file.value[4])
