module.exports = split

function split (u8a, size) {
  return {
    length: Math.ceil(u8a.length / size),
    get: function (index, start) {
      return u8a.slice(start = index * size, start + size)
    }
  }
}
