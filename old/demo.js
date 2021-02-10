const fs = require("fs")
const home = __dirname+"/disc/data"

const scan = (path, self) => {
  const items = fs.readdirSync(home+path)
  console.log("@@@", path, items)
  for (const item of items) {
    if (item[0] === ".") {
      continue
    }
    const [key, ext] = item.split(".")
    console.log("@@@", key, ext)
    if (ext === undefined) {
      self[key] = scan(path+"/"+key, {})
      continue
    }
    if (ext == "js") {
      self[key] = require(home+path+"/"+key)
    }
  }
  return self
}
const self = scan("", {})




const getType = (value) => {
  if (value === null) {
    return "null"
  }
  let type = typeof (value)
  return type === "object" ? value.constructor.name || "Object": type
}

const {stringify} = JSON

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

fs.writeFileSync("./output.js", "module.exports=" + toSource(self))
