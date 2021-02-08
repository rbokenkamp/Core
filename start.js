const home = __dirname + "/disc"
const NodeDisc = require(__dirname + "/lib/NodeDisc")

const disc = new NodeDisc()
const {stringify} = JSON
Object.assign(disc, {
  key: "disc",
  type: "NodeDisc",
  home,
  extensions: {
    js: false,
    html: false,
    scss: false,
    css: false,
    jpg: true,
    png: true,
  },
  sassPaths: [home + "/data/collections/modules/items/editor/sass"]
})

disc.initialize()

const getType = (value) => {
  if (value === null) {
    return "null"
  }
  let type = typeof (value)
  return type === "object" ? value.constructor.name || "Object": type
}

const toSource = (value) => {
  if (value === null) {
    return "null"
  }
  if (value === undefined) {
    return "undefined"
  }
  const result = ""
  const type = getType(value)
  if (type === "Array") {
    let result = "["
    for (const v of value) {
      result += (result === "[" ? "" : ",") + toSource(v)
    }
    return result + "]"
  }
  if (type === "Date") {
    return "new Date(" + value.getTime() + ")"
  }
  if (type === "RegExp" || type === "function") {
    return value.toString()
  }
  if (type === "Buffer") {
    return `Buffer.from("${value.toString("base64")}", "base64")`
  }

  if (type === "string") {
    return stringify(value)
  }
  if (type === "Object" || typeof value === "object") {
    let result = "{"
    for (const name in value) {
      result += (result === "{" ? "" : ",") + stringify(name) + ":" + toSource(value[name])
    }
    result += "}"
    return result
  }

  return "" + value
}

const fs = require("fs")
fs.writeFileSync("./output.js", "module.exports=" + toSource(disc))
