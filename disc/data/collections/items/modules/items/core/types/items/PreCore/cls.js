const PreCore = module.exports = class {

  static instance(params) {
    const {type, module} = params,
        cls = PreCore.classes[type]

    if (cls === undefined) {
      throw new Error()`Unknown type ${type}`
    }
    const branch = new cls()
    if (PreCore.stage === "precore") {
      Object.assign(branch, params)
    }
    branch.build(params)
    return branch
  }

  static instanceOf(typeA, typeB) {
    const {types} = PreCore
    if (typeA in types === false || typeB in types === false) {
      return false
    }

    if (typeA === typeB) {
      return true
    }

    let current = types[typeA]
    while (true) {
      const extend = current.extend
      if (extend === undefined) {
        return false
      }
      if (extend === typeB) {
        return true
      }
      current = types[extend]
    }
  }

  static getType(value) {
    if (value === null) {
      return "null"
    }
    let type = typeof (value)
    return type === "object" ? value.constructor.name || "Object" : type
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

  static getErrors(obj) {
    if (obj == undefined) {
      return
    }
    const {items} = obj

    if (items === undefined) {
      return
    }

    for (const key in items) {
      const item = items[key],
          errors = item.errors
      if (errors === undefined) {
        continue
      }
      Object.assign(PreCore.errors, errors.items)
    }
  }



}

PreCore.stage = "precore"
PreCore.classes = {}
PreCore.sources = {}
PreCore.types = {}
PreCore.errors = {}
PreCore.instances = {}
PreCore.templates = {}
PreCore.styles = {}
