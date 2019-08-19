module.exports = split

function split (file, size) {
  return {
    length: Math.ceil(file.size / size),
    get: function (index, cb, start) {
      var reader = new FileReader
      reader.onerror = cb
      reader.onload = function () {
        cb(null, new Uint8Array(reader.result))
      }
      reader.readAsArrayBuffer(
        file.slice(start = index * size, start + size)
      )
    }
  }
}
