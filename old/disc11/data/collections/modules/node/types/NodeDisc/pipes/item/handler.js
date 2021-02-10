const {floor} = Math
const fs = require("fs")
module.exports = (self, input) => {
  const {path} = input
  const {home} = self.data.params
  const stats = fs.statSync(home+path),
      time = floor(stats.mtimeMs)
  const [dir,ext] = path.split(".")
  if (ext === undefined) {
    console.log({
      time,
      path,
      data: 0,
    })
    self.call("scan", {path})
    return
  }

  const content = fs.readFileSync(home+path)
  console.log({
    time,
    path
  })
  console.log("@@@", stats)
}
