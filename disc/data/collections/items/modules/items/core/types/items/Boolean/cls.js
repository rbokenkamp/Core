module.exports = class extends PreCore.classes.Param {

  static validate(instance, path, meta, data) {
    data = super.validate(instance, path, meta, data)
    if (data === undefined) {
      return
    }

    if (typeof data !== "boolean") {
      instance.raise("boolean_invalid_type", {path})
    }
    return data
  }

}
