const nonObject = {
  "Array": true,
  "Buffer": true,
  "RegExp": true,
  "Date": true,
}
module.exports = (self, value) => {
  if (value === null) {
    return "null"
  }
  let type = typeof (value)
  if (type !== "object") {
    return type
  }
  const name = value.constructor.name
  if (nonObject[name]) {
    return name
  }
  return "Object"
}
