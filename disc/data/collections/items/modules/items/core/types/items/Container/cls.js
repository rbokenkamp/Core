module.exports = class extends PreCore.classes.Param {

  static validate(instance, path, meta, data) {
    data = super.validate(instance, path, meta, data)
    if (data === undefined) {
      return
    }

    if (PreCore.getType(data) !== "Object") {
      instance.raise("container_invalid_type", {path})
    }
    return data
  }

}
