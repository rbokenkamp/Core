module.exports = class extends PreCore.classes.Container {

  static validate(instance, path, meta, data) {
    console.log("-".repeat(80))
    const {classes, types} = PreCore,
        {Branch, Tree} = classes
    data = Branch.validate(instance, path, meta, data)

    if (data === undefined) {
      return
    }


    if (typeof data === "string") {
      data = {type: data}
    }

    const {type} = data

    if (type in classes === false) {
      instance.raise("type_not_exists", {path, type})
    }

    return Tree.validate(instance, path, types[type].metas, data)
  }


}
