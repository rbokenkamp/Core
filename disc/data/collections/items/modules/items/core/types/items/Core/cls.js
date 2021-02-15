module.exports = class extends PreCore.classes.Workflow {

  construct(params) {
    try {
      if (window !== undefined) {
        this.isBrowser = true
      }
    } catch (err) {
    }

    PreCore.core = this
    this.initDisc(params.disc)
    this.paths = {}
    this.source("", this)
    this.initClasses()
    delete this.paths
    Object.assign(params, this)
    super.construct(params)
  }

  create(params) {
    super.create(params)
  }

  initDisc(disc) {
    const {type} = disc,
        cls = PreCore.classes[type],
        target = new cls()

    Object.assign(target, disc)
    this.disc = target
  }

  build(params) {
    super.build(params)
    PreCore.stage = "core"
  }

  source(path, current) {
    const {paths, disc, isBrowser} = this,
        {sources} = PreCore

    const items = disc.read(path)
    for (const item of items) {
      const [key, ext] = item.split(".")
      const itemPath = path + "/" + key
      if (ext === undefined) {
        current[key] = this.source(itemPath, current[key] || {})
        continue
      }
      if (ext == "js") {
        if (key === "cls") {
          const name = path.substr(path.lastIndexOf("/") + 1)
          if (!isBrowser) {
            sources[name] = disc.read(path + "/" + key + ".js").toString()
          }
          paths[name] = path
          continue
        }
        current[key] = disc.require(itemPath)
      }
    }
    return current
  }

  initClasses() {
    const {paths, channels, disc} = this,
        {types, classes, merge, getErrors} = PreCore

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
            const extendClone = merge({}, types[extend])
            // id should not propagate on the Meta collections
            extendClone.fixed && delete extendClone.fixed.id
            extendClone.instance && delete extendClone.instance.id
            extendClone.metas && delete extendClone.metas.id

            typeObj = merge(extendClone, typeObj)
            this._set(keyPath, typeObj)
          }
          getErrors(typeObj.fixed)
          getErrors(typeObj.instance)
          const {channel} = typeObj
          if (channel in channels === true && classes[key] === undefined) {
            classes[key] = disc.require(path + "/cls")
          }
          types[key] = typeObj
          delete paths[key]
          continue
        }
        processing = true
      }
    }
  }

}
