const ignore = {
  parent: true,
}

module.exports = class extends PreCore.classes.Container {

  build(params) {
    this.construct(params)
    this.create(params)
  }

  construct(params) {
    const {parent, key, type} = params,
        {types, classes, core, instances} = PreCore,
        {disc} = core,
        typeObj = types[type],
        metas = typeObj.instance.items,
        path = params.path ? params.path : (params.path = parent ? parent.path + "/" + key : "")

    if (path === "/collections/items/modules/items/core/types/items/Branch/instance/id") {
      debugger
    }
    this.type = params.type
    this.path = path

    if (disc.exists(path) === false) {
      disc.write(path, 0)
    }

    if (params.id === undefined) {
      const id = params.id = core.index || 0
      core.setKey("index", id + 1)
    }
    this.stage = "construct"
//    console.log("CONSTRUCT", params.path, params.type)

    Object.defineProperty(this, '__branch', {
      value: 0,
      enumerable: false,
    })

    for (const key in params) {
      if (key in metas === false) {
        this.raise("branch_unknown_param", {path: path + "/" + key})
      }
    }

    const values = {}
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
      values[key] = params[key]
    }
    this.set(values)
    instances[this.id] = this
  }

  setSelf(obj) {
    if (PreCore.getType(obj) !== "Object") {
      this.raise("container_invalid_type", {path: this.path})
    }

    const result = {}
    for (const key in obj) {
      const value = this.setKey(key, obj[key])
      if (value !== undefined) {
        result[key] = value
      }
    }
    return result
  }

  setKey(key, value) {
    if (value === undefined && this.stage !== "construct") {
      throw new Error("@@@ TODO REMOVE @@@")
    }
    const {path} = this,
        {classes, types, core} = PreCore,
        typeObj = types[this.type],
        metas = typeObj.instance.items,
        meta = metas[key]

    if (meta === undefined) {
      this.raise("branch_unknown_param", {path: path + "/" + key})
    }

    const {type, storable} = meta,
        cls = classes[type]

    value = cls.validate(this, path + "/" + key, meta, value)
    if (value === undefined) {
      return
    }
    if (cls.equals(this[key], value)) {
      return
    }
    this[key] = value
    if (storable) {
      console.log("@@@ SET @@@", this.path + "/" + key, value, storable)
      core.disc.write(this.path + "/" + key + ".js", "module.exports = " + cls.toSource(value))
    }
    return value
  }

  set(value, key) {
    if (key === undefined) {
      return this.setSelf(value)
    }
    const parts = key.split("/")
    if (parts.length === 1) {
      this.setKey(key, value)
    }
  }


  create(params) {
    const {type, path} = params,
        {types, classes} = PreCore,
        typeObj = types[type],
        metas = typeObj.instance.items

    //  console.log("CREATE", this.path, this.type)
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

  signalContainers(container, event, params) {
    const {getType} = PreCore

    for (const key in container) {
      const branch = container[key]
      const type = getType(branch)
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

    this.signalContainers(this, event, params)
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


  branch(params) {
    params.parent = this
    const {key} = params
    const branch = PreCore.instance(params)
    return this[key] = branch
  }

  release(params) {
    const {instances, instanceOf} = PreCore
    //   console.log("RELEASE", this.path, this.type)
    this.stage = "release"
    const {parent, key} = this
    if (parent) {
      if (instanceOf(parent.type, "Collection") && this.path.match(/items\/[^\/]+$/)) {
        delete parent.items[key]
      } else {
        delete parent[key]
      }
    }
    delete instances[this.id]

  }

  static validate(instance, path, meta, data) {
    const {types, classes} = PreCore

    for (const key in data) {
      if (key in meta === false) {
        instance.raise("branch_unknown_param", {path: path + "/" + key})
      }
    }

    for (const key in meta) {
      let itemMeta = meta[key]
      if (typeof itemMeta === "string") {
        itemMeta = {type: itemMeta}
      }
      const itemType = itemMeta.type
      if (itemType in types === false) {
        instance.raise("type_not_exists", {path: path + "/" + key, type: itemType})
      }

      if (itemMeta.internal === true) {
        continue
      }

      const result = classes[itemType].validate(instance, path + "/" + key, itemMeta, data[key])
      if (result !== undefined) {
        data[key] = result
      }
    }

    return data
  }


}
