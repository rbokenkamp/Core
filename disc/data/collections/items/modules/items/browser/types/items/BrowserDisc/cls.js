module.exports = class extends PreCore.classes.Disc {

  read(path) {
    const {sessionOnly} = this,
        storage = sessionOnly ? sessionStorage : localStorage

    const result = storage.getItem(path)
    return result === null ? undefined : result
  }

  getTime(path) {
    //   const stats = fs.statSync(this.home + path)
    //   return floor(stats.mtimeMs)
  }

  exists(path) {
    const {sessionOnly} = this,
        storage = sessionOnly ? sessionStorage : localStorage
    return storage.getItem(path) !== null
  }

  write(path, value) {
    const {sessionOnly} = this,
        storage = sessionOnly ? sessionStorage : localStorage

    storage.setItem(path, JSON.stringify(value))
  }

  require(path) {
    const content = this.read(path),
        module = {}

    eval(content)
    return module.exports
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
