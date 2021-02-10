const fs = require("fs"),
    sass = require("sass"),
    {floor} = Math

module.exports = class extends PreCore.classes.Disc {

  read(path) {
    const full = this.home + path
    if (fs.existsSync(full) === false) {
      return
    }
    const index = path.lastIndexOf(".")
    if (index === -1) {
      return fs.readdirSync(full).filter(item => item[0] !== ".")
    }
    return fs.readFileSync(full)
  }

  getTime(path) {
    const stats = fs.statSync(this.home + path)
    return floor(stats.mtimeMs)
  }

  exists(path) {
    return fs.existsSync(this.home + path)
  }

  write(path, value) {
    const full = this.home + path
    const index = path.lastIndexOf(".")
    if (index === -1) {
      if (fs.existsSync(full)) {
        return
      }
      return fs.mkdirSync(full)
    }
    fs.writeFileSync(full, value)
  }

  require(path) {
    return require(this.home + path)
  }

  scss(data) {
    const options = {data, includePaths: this.sassPaths}
    return sass.renderSync(options).css.toString("utf8")
  }


}
