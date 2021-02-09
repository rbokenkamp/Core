module.exports = class extends PreCore.classes.Branch {

  create(params) {
    super.create(params)
    const {items} = params
    const {item} = this
    console.log("!!!", this)
    for (const key in items) {
       console.log(key)
    }
  }
}
