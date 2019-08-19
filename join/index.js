module.exports = join

function join (length) {
  var chunks = Array(length)
  var size = 0
  var have = 0

  return Object.defineProperties({}, {
    set: {
      value: function (index, buf) {
        if (!chunks[index]) {
          chunks[index] = buf
          size += buf.byteLength
          have++
        }
      }
    },
    value: {
      get: function () {
        var u8a = new Uint8Array(size)
        for (var i = 0, s = 0; i < length; i++) {
          u8a.set(chunks[i], s)
          s += chunks[i].byteLength
        }
        return u8a
      }
    },
    complete: {
      get: function () {
        return have === length
      }
    }
  })
}
