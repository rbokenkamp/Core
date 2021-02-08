module.exports = class extends Array {

  call(key, params) {
    this.data.pipes[key].handler(this, params)
  }

}
