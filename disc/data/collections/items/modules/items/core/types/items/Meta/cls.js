module.exports = class extends PreCore.classes.Container {

  static validate(instance, path, meta, data) {
    console.log("+-".repeat(11), "META")
    const {classes, types} = PreCore,
        {Param, Container} = classes
    data = Param.validate(instance, path, meta, data)

    if (data === undefined) {
      return
    }

    const {type} = data

    if (type in classes === false) {
      instance.raise("type_not_exists", {path, type})
    }

    const typeObj = types[type]

    console.log("###", type, types[type].metas)

    return Container.validate(instance, path, typeObj.metas.items, data)
  }


}
