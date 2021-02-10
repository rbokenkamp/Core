module.exports = class {

  call(key, params) {
    this.data.pipes[key].handler(this, params)
  }

  static instance(self) {
    const {meta, data} = self,
        {classes} = data

    const {type, module, key} = data,
        {Branch} = classes

    console.log("key", key)
    console.log("type", type)
    console.log("module", module)
    console.log("meta", meta)
    console.log("classes", classes)
  }

}
