const Rule = module.exports = class extends PreCore.classes.Param {

  static validate(instance, path, meta, data) {
    data = super.validate(instance, path, meta, data)
    if (data === undefined) {
      return
    }

    if (PreCore.getType(data) !== "RegExp") {
      instance.raise("rule_invalid_type", {path})
    }
    return data
  }

  static equals(a, b) {
    return a.toString() === b.toString()
  }

  static toSource(value) {
    return value.toString()
  }

}
