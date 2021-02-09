module.exports = class extends PreCore.classes.Param {

  static validate(instance, path, meta, data) {
      if (typeof data === "string") {
        if (data === "") {
          data = undefined
        }
        else {
          data = +data
        }
      }
    data = super.validate(instance, path, meta, data)
    if (data === undefined) {
      return
    }


    const {min, max} = meta
    if (typeof data !== "number" || data % 1 !== 0) {
      instance.raise("integer_invalid_type", {path, data})
    }
    if (min !== undefined && data < min) {
      instance.raise("integer_too_small", {path, min, data})
    }
    if (max !== undefined && data > max) {
      instance.raise("integer_too_large", {path, max, data})
    }
    return data
  }
}
