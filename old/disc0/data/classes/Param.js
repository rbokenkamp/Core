module.exports = class {

  constructor(params) {
    Object.assign(this, params)
  }

  call(key, input) {
    return this.data.pipes[key].handler(this, input)
  }
}
