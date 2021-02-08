const fs = require("fs")

module.exports = (self, input) => {
  console.log("+-".repeat(11), input)
  const {meta, data} = self,
      {params} = data,
      {extensions} = params

  let {path, current} = input

  console.log("@@@", path)
  current = current || self

  const items = self.call("read", {path})
  for (const item of items) {
    console.log("+++", path, item)
    if (item === "meta") {
      debugger
    }
    const [key, ext] = item.split(".")
    if (ext === undefined) {
      current[key] = self.call("scan",  {
        path: path + "/" + key
        , current: {},
      })
      continue
    }

    if (ext === "js") {
      current[key] = self.call("require", {path: path + "/" + key})
      continue
    }

    const content = self.call("read", {path: path+"/"+item})
    if (ext in data.pipes) {
      current[key] = self.call(ext, {content})
      continue
    }
    const isText = extensions[ext]
    if (isText === undefined) {
      console.log(`Unknown extension ${ext} for ${path + "/" + item}`)
      continue
    }
    if (isText === true) {
      current[key] = content.toString("utf8")
      continue
    }
    current[key] = content
  }

  return current
}
