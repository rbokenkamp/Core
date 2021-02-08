



const home = __dirname + "/disc"

const branch = require(home + "/data/collections/modules/core/types/Branch/pipes/branch/handler")

const self = {
  key: "disc",
  type: "ServerDisc",
  home,
  classes: {
    Branch: require(home + "/data/collections/modules/core/types/Branch/cls/cls"),
  },
  pipes: {
    require: {
      handler: require(home + "/data/collections/modules/node/types/NodeDisc/pipes/require/handler"),
    },
    branch: {
      handler: branch,
    }
  }
}


const disc = branch({disc: self, self, input: self})

const x = 1
// pipes.call.handler("log", "hello")
