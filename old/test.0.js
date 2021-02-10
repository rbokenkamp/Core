const Parameter = class {
  construct(meta, data) {

  }
}

const metas = {}
const PreCore = class {

  static instance(meta, data) {
    console.log("meta", meta)
    console.log("data", data)
  }
}

const meta = {
  type: {
    type: "Text"
  },
  module: {
    type: "Text",
  },
  extend: {
    type: "Container",
    branches: {
      type: "Text",
      module: "Text",
    }
  },
  stages: {
    type: "List",
    item: "Text",
  },
}

const data = {
  type: "NodeDisc",
  module: "node",
  extend: {
    type: "Disc",
    module: "precore",
  },
  stages: ["precreate", "create", "network", "editor"],
  handlers: {
    precreate: () => undefined,
    create: () => undefined,
    network: () => undefined,
    read: () => undefined,
    write: () => undefined,
    scan: () => undefined,
  },
}

const disc = PreCore.instance(meta, data)

/*
const Container = class {

  construct(meta, data) {

  }

  signal(event, params) {
    console.log("@@@")
  }
}
disc.signal

console.log("hello")

const home = __dirname + "/disc"
const self = {
  home
}

const scan = require(home + "/data/collections/modules/node/types/NodeDisc/instance/scan")


const result = scan(self, "")

const fs = require("fs")
fs.writeFileSync("./output.js", "module.exports=" + JSON.stringify(result))
*/
