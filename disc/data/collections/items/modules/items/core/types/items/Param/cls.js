module.exports = class {

  static validate(instance, path, meta, data) {
    const {required, defaultValue} = meta

    data = data === undefined ? defaultValue : data
    if (data === undefined && required) {
      instance.raise("branch_required", {path})
    }
    return data
  }

  static toSource(value) {
    return "" + value
  }

  static equals(a, b) {
    return a === b
  }

}
