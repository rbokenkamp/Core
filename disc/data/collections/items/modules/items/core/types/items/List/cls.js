module.exports = class extends PreCore.classes.Param {

  static validate(instance, path, meta, data) {
    data = super.validate(instance, path, meta, data)
    if (data === undefined) {
      return
    }

    if (PreCore.getType(data) !== "Array") {
      instance.raise("list_invalid_type", {path})
    }
    return data
  }

}
