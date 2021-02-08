module.exports = (self, input) => {
  const {module, type, key} = input
  return self.call("require", {path: `/data/collection/modules/${module}/types/${type}/pipes/${key}/handler`})
}
