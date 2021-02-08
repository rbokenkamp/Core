module.exports = class extends PreCore.classes.Container {


  construct(params) {
    const {parent, key, type} = params,
        {types, classes} = PreCore,
        typeObj = types[type],
        metas = typeObj.instance.items,
        path = params.path = parent ? parent.path + "/" + key : ""

    this.stage = "construct"
    for (const key in params) {
      if (key in metas === false) {
        this.raise("tree_unknown_param", {path: path + "/" + key})
      }
    }
    for (const key in metas) {
      const meta = metas[key]
      const {internal} = meta
      const metaType = meta.type
      const {kind} = types[metaType]
      if (internal) {
        continue
      }
      if (kind !== "Param") {
        continue
      }
      if (metaType in classes === false) {
        this.raise("type_not_exists", {type: metaType, path: path + "/" + key})
      }
      const cls = classes[metaType]
      const value = params[key] = cls.validate(this, path + "/" + key, meta, params[key])
      this[key] = value
    }

  }


  build(params) {
    this.construct(params)
    this.create(params)
  }

  create(params) {
    const {type, path} = params,
        {types, classes} = PreCore,
        typeObj = types[type],
        metas = typeObj.instance.items
    console.log("CREATE", this.path, this.type)
    this.stage = "create"
    for (const key in metas) {
      const meta = metas[key]
      const {internal} = meta
      const metaType = meta.type
      const {kind} = types[metaType]
      if (internal) {
        continue
      }
      if (kind !== "Branch") {
        continue
      }

      if (metaType in classes === false) {
        this.raise("type_not_exists", {type: metaType, path: path + "/" + key})
      }

      const self = Object.assign({}, meta, params[key])
      self.key = key
      this.branch(self)
    }
  }

  createContainers(container, key) {
    const {getType} = PreCore.classes.Type
    for (const item in container) {
      const branch = container[item]
      if (getType(branch) !== "Object") {
        continue
      }

      if (item in ignore) {
        continue
      }

      const itemKey = key === undefined ? item : key + "/" + item

      if ("type" in branch === false) {
        this.createContainers(branch, itemKey)
        continue
      }

      branch.key = itemKey
      this.branch(branch)
    }
  }


  signalContainers(container, event, params) {
    const {getType} = PreCore.classes.Type

    for (const key in container) {
      const branch = container[key]
      if (getType(branch) !== "Object") {
        continue
      }

      if ("__branch" in branch === false) {
        this.signalContainers(branch, event, params)
        continue
      }

      if (key in ignore) {
        continue
      }

      branch.signal(event, params)

    }
  }

  signal(event, params) {
    //  console.log("SIGNAL", this.path, this.type, event)
    if (event in this) {
      this[event](params)
    }


    //   this.signalContainers(this, event, params)
  }

  getError(name, params) {
    const {errors, classes} = PreCore

    if (name in errors === false) {
      this.raise("error_not_exists", {name, path: params.path})
    }

    if (params.path === "") {
      params.path = "<core>"
    }

    const message = this.getErrorMessage(errors[name], params)
    return new classes.CoreError(message, name, params)

  }

  raise(name, params) {
    throw this.getError(name, params)
  }

  getErrorMessage(template, params) {
    const script = (params ? "const {" + Object.keys(params) + "} = params; " : "") + "result = `" + template + "`"

    try {
      let result
      eval(script)
      return result
    } catch (err) {
      console.log("@@@@", "INVALID PARAMS", "@@@@")
      console.log("template", template)
      console.log("params", params)
      console.log("script", script)
      console.log("@@@@", "INVALID PARAMS", "@@@@")
      throw err
    }
  }


  get(key) {
    const parts = key.split("/")
    let current = this
    for (let i = 0; i < parts.length; i++) {
      current = current[parts[i]]
    }
    return current
  }

  _set(key, value) {
    const parts = key.split("/"),
        last = parts.length - 1

    let current = this
    for (let i = 0; i < last; i++) {
      current = current[parts[i]]
    }
    return current[parts[last]] = value
  }

  setBranch(key, value) {
    const index = key.lastIndexOf("/")
    if (index === -1) {
      return this[key] = value
    }

    const container = this.traverse(key.substr(0, index))
    return container[key.substr(index + 1)] = value
  }

  removeBranch(key) {
    const index = key.lastIndexOf("/")
    if (index === -1) {
      return delete this[key]
    }
    const container = this.traverse(key.substr(0, index))
    delete container[key.substr(index + 1)]
  }

  branch(params) {
    params.core = this.core || this
    params.parent = this
    const {key} = params
    const branch = PreCore.instance(params)
    return this.setBranch(key, branch)
  }

  release(params) {
    console.log("RELEASE", this.path, this.type)
    this.stage = "release"
    const {parent, key} = this
    if (parent) {
      parent.removeBranch(key)
    }

  }


}
