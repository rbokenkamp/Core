const fs = require("fs")
module.exports = (self, input) => {
  const {meta, data} = self,
      {params} = data,
      {home} = params,
      {path} = input,
      [full, ext] = path.split(".")

  if (ext === undefined) {
    return fs.readdirSync(home + path).filter(item => item[0] !== ".")
  }
  return fs.readFileSync(home+path)
}
