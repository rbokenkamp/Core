module.exports = class extends PreCore.classes.Disc {

  create(params) {
    super.create(params)
  }

  read(path) {
    const {sessionOnly, home} = this,
        storage = sessionOnly ? sessionStorage : localStorage

    const result = storage.getItem(home + path)
    return result === null ? undefined : JSON.parse(result)
  }

  getTime(path) {
    //   const stats = fs.statSync(this.home + path)
    //   return floor(stats.mtimeMs)
  }

  exists(path) {
    const {sessionOnly, home} = this,
        storage = sessionOnly ? sessionStorage : localStorage
    return storage.getItem(home + path) !== null
  }

  write(path, value) {
    //  console.log("write", path, value)
    const {sessionOnly, home} = this,
        storage = sessionOnly ? sessionStorage : localStorage

    const index = path.lastIndexOf("/")
    const dir = path.substr(0, index)
    const item = path.substr(index + 1)

    if (path !== "") {
      const items = this.read(dir)
      // console.log("!", path, items)
      if (!items.includes(item)) {
        items.push(item)
        //   console.log("!", path, items)
        storage.setItem(home + dir, JSON.stringify(items))
      }
    }

    const [key, ext] = item.split(".")
    if (ext === undefined) {
      if (this.exists(path)) {
        return
      }
      storage.setItem(home + path, "[]")
      return
    }
    storage.setItem(home + path, JSON.stringify(value))
  }

  require(path) {
    const content = this.read(path + ".js")
    const module = {}
    eval(content)
    return module.exports
  }

  static initialize(path, content, disc) {
    if (disc === undefined) {
      disc = new PreCore.classes.BrowserDisc()
      Object.assign(disc, {home: "/local"})
    }
    const {getType} = PreCore
    if (getType(content) === "Object") {
      if (disc.exists(path) === false) {
        disc.write(path, [])
      }
      for (const key in content) {
        this.initialize(path + "/" + key, content[key], disc)
      }
      return
    }
    disc.write(path + ".js", "module.exports=" + JSON.stringify(content))
  }

}

/*
localStorage.setItem('myCat', 'Tom');
The syntax for reading the localStorage item is as follows:

const cat = localStorage.getItem('myCat');
The syntax for removing the localStorage item is as follows:

localStorage.removeItem('myCat');
The syntax for removing all the localStorage items is as follows:

localStorage.clear();
 */
