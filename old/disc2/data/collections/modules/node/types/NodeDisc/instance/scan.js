const fs = require("fs")

const scan = module.exports = (self, path, current) => {
  const {home} = self,
      full = home + path

  current = current || self

  const items = fs.readdirSync(home + path)
  for (const item of items) {
    const [first] = item
    if (first === "." || first === "_") {
      continue
    }
    const [key, ext] = item.split(".")
    if (ext === undefined) {
      current[key] = scan(self, path + "/" + key, {})
      continue
    }
    if (ext === "js") {
      current[key] = require(home + path + "/" + key)
      continue
    }
    console.log(`Unknown extension ${ext} for ${path + "/" + item}`)
  }

  return current
}
