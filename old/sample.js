const home = __dirname + "/disc"
const requireHandler = require(home + "/data/collections/modules/node/types/NodeDisc/pipes/require/handler")
let self = {
  data: {
    params: {
      home,
    }
  }
}

const Branch = requireHandler(self, {path: "/data/collections/modules/core/types/Branch/cls"})
self = new Branch(self)

const itemHandler = requireHandler(self, {path: "/data/collections/modules/node/types/NodeDisc/pipes/item/handler"})
itemHandler(self, {path: ""})

//const scan = ()

//const outputHandler = requireHandler(self, {path: "/data/collections/modules/node/types/NodeOutput/pipes/input/handler"})
//outputHandler(self, "hello")
