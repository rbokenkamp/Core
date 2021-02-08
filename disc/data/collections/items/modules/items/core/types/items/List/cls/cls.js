module.exports = class List extends Array {

  call(key, input) {
    self.pipes.items.call.handler(this, {key, input})
  }
}
