module.exports = class extends PreCore.classes.Branch {

  create(params) {
    super.create(params)
    const {items} = params
    console.log("!!!")
    for (const key in items) {
       console.log(key)
    }
  }
}
