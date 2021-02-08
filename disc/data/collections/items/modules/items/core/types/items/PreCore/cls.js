const PreCore = module.exports = class {

  static instance(params) {
    const {type, module} = params,
        cls = PreCore.classes[type]

    if (cls === undefined) {
      throw new Error()`Unknown type ${type}`
    }
    const branch = new cls()
    branch.build(params)
    return branch
  }

  static getType(value) {
    if (value === null) {
      return "null"
    }
    let type = typeof (value)
    return type === "object" ? value.constructor.name : type
  }

  static merge(...arg) {
    let [a, b, c] = arg
    const {getType, merge} = PreCore
    b = b === undefined ? {} : b
    a = a === undefined ? {} : a
    const result = {}
    for (const key in a) {
      const valueA = a[key]
      const typeA = getType(valueA)
      if (key in b === false) {
        if (typeA === "Object") {
          result[key] = merge(valueA, {})
          continue
        }
        result[key] = valueA
        continue
      }

      const valueB = b[key]
      const typeB = getType(valueB)
      if (typeB === "Object") {
        result[key] = merge(typeA === "Object" ? valueA : {}, valueB)
        continue
      }
      result[key] = valueB
    }

    for (const key in b) {
      if (key in a === true) {
        continue
      }
      const valueB = b[key]
      const typeB = getType(valueB)
      if (typeB === "Object") {
        result[key] = merge({}, valueB)
        continue
      }
      result[key] = valueB
    }
    if (c === undefined) {
      return result
    }
    arg.shift()
    arg[0] = result
    return merge(...arg)
  }

}

PreCore.classes = {}
PreCore.types = {}
PreCore.errors = {}
