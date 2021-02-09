module.exports = class extends PreCore.classes.Container {

  static validate(instance, path, meta, data) {
    const {classes, types} = PreCore,
        {Param, Branch} = classes
    data = Param.validate(instance, path, meta, data)

    if (data === undefined) {
      return
    }

    const {type} = data

    if (type in classes === false) {
      instance.raise("type_not_exists", {path, type})
    }

    const typeObj = types[type]

    return Branch.validate(instance, path, typeObj.metas.items, data)
  }


}
