module.exports = class extends PreCore.classes.Branch {

  create(params) {
    super.create(params)
    this.items = this.items || {}
    PreCore.core.disc.write(this.path + "/items", null)
    const {items} = params
    for (const key in items) {
      this.setItem(key, items[key])
    }
  }

  setItem(key, data) {
    const {getType, types, instanceOf, classes, instance} = PreCore
    const {items, path} = this
    const item = this.item || {type: "Param"}
    const itemType = item.type === "Meta" ? item.type : data.type || item.type
    const itemKind = types[itemType].kind
    if (itemKind === "Branch") {
      if (key in items) {
        const item = items[key]
        if ("__branch" in item) {
          throw new Error("@@@ TODO @@@", "release item")
        }
      }
      data.parent = this
      data.key = key
      data.path = this.path + "/items/" + key
      const type = data.type = data.type || item.type
      if (instanceOf(type, item.type) === false) {
        this.raise("instance_invalid_type", {baseType: item.type, type, path})
      }

      return items[key] = instance(data)
    }

    const cls = classes[itemType]

    const value = cls.validate(this, path + "/items/" + key, item, data)
    if (items[key] === value) {
      return
    }
    //  console.log("@@@", path + "/" + key, value)
    items[key] = value

  }

  static validate(instance, path, meta, data) {
    const {types, classes} = PreCore
    data = classes.Param.validate(instance, path, meta, data)
    if (data === undefined) {
      return
    }

    if (PreCore.getType(data) !== "Object") {
      instance.raise("container_invalid_type", {path})
    }

    const {item} = meta
    const itemType = item.type
    const itemKind = types[itemType].kind
    const {items} = data
    const cls = classes[itemType]
    for (const key in items) {
      items[key] = cls.validate(this, path + "/items/" + key, item, items[key])
    }
    return data
  }


}
