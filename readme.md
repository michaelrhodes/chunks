# chunks
split and join chunks of binary data

[![build status](https://travis-ci.org/michaelrhodes/chunks.svg?branch=master)](https://travis-ci.org/michaelrhodes/chunks)

## install
```sh
npm install michaelrhodes/chunks#1.0.0
```

## use
```js
// Split
var split = require('chunks/split')
var data = new Uint8Array([1, 2, 3, 4, 5])
var chunks = split(data, 2)

assert(chunks.length === 3)
assert(chunks.get(0)[0] === 1)
assert(chunks.get(0)[1] === 2)
assert(chunks.get(1)[0] === 3)
assert(chunks.get(1)[1] === 4)
assert(chunks.get(2)[0] === 5)
assert(chunks.get(2)[1] === void 0)
assert(chunks.length === 3)

// Join
var join = require('chunks/join')
var file = join(chunks.length)

assert(file.complete === false)

file.set(0, chunks.get(0))
file.set(1, chunks.get(1))
file.set(2, chunks.get(2))

assert(file.complete === true)
assert(file.value.length === data.length)
assert(file.value[0] === data[0])
assert(file.value[1] === data[1])
assert(file.value[2] === data[2])
assert(file.value[3] === data[3])
assert(file.value[4] === data[4])

// Split (w/ FileReader)
var split = require('chunks/split/async')
var data = new Blob([new Uint8Array([1, 2, 3, 4, 5])])
var chunks = split(data, 2)

assert(chunks.length === 3)

chunks.get(0, function (err, p) {
  assert(err === null)
  assert(p[0] === 1)
  assert(p[1] === 2)
  assert(chunks.length === 3)
})

chunks.get(1, function (err, p) {
  assert(err === null)
  assert(p[0] === 3)
  assert(p[1] === 4)
  assert(chunks.length === 3)
})

chunks.get(2, function (err, p) {
  assert(err === null)
  assert(p[0] === 5)
  assert(p[1] === void 0)
  assert(chunks.length === 3)
})
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
