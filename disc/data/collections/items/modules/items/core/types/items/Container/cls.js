module.exports = class extends PreCore.classes.Param {

  static validate(instance, path, meta, data) {
    const {types,classes} = PreCore

    for (const key in data) {
      if (key in meta === false) {
        instance.raise("branch_unknown_param", {path: path + "/" + key})
      }
    }

    for (const key in meta) {
      let itemMeta = meta[key]
      if (typeof itemMeta === "string") {
        itemMeta = {type: itemMeta}
      }
      const itemType = itemMeta.type
      if (itemType in types === false) {
        instance.raise("type_not_exists", {path: path + "/" + key, type: itemType})
      }

      if (itemMeta.internal === true) {
        continue
      }

      const result = classes[itemType].validate(instance, path + "/" + key, itemMeta, data[key])
      if (result !== undefined) {
        data[key] = result
      }
    }

    return data
  }

}
