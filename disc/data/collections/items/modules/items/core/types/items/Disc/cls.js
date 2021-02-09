module.exports = class extends PreCore.classes.Service{


  construct(params) {
    params.index = params.index || 0
    super.construct(params)
  }
  source(path, current) {
    const {paths} = this

    const items = this.read(path)
    for (const item of items) {
      const [key, ext] = item.split(".")
      const itemPath = path + "/" + key
      if (ext === undefined) {
        current[key] = this.source(itemPath, current[key] || {})
        continue
      }
      if (ext == "js") {
        if (key === "cls") {
          paths[path.substr(path.lastIndexOf("/") + 1)] = path
          continue
        }
        current[key] = this.require(itemPath)
      }
    }
    return current
  }

  getErrors(obj) {
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
  initialize() {
    const {paths} = this,
        {types, classes, merge, errors} = PreCore

    let processing = true
    while (processing) {
      processing = false
      for (const key in paths) {
        const path = paths[key],
            keyPath = path.substr(1)

        let typeObj = this.get(keyPath)
        const {extend} = typeObj
        if (extend === undefined || extend in paths === false) {
          if (extend) {
            typeObj = merge(types[extend], typeObj)
            this._set(keyPath, typeObj)
          }
          this.getErrors(typeObj.fixed)
          this.getErrors(typeObj.instance)
          classes[key] = this.require(path + "/cls")
          types[key] = typeObj
          delete paths[key]
          continue
        }
        processing = true
      }
    }

  }

  static build(params) {

    const {type} = params,
        {classes} = PreCore,
        cls = classes[type],
        branch = PreCore.core = new cls()

    branch.paths = {}
    Object.assign(branch, params)
    branch.source("", branch)
    branch.initialize()
    delete branch.paths
    branch.build(branch)
    return branch
  }

}
