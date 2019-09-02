const livescript = require("livescript")
module.exports = {
  process: (src, filename, config, options) => {
    let compiledObject = livescript.compile(src, {filename: filename, map: 'embedded'})
    return {
      code: compiledObject.code,
      map: compiledObject.map.toString()
    }
  },
}
