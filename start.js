const home = __dirname + "/disc/data"
const getClass = (key, module) => {
  module = module || "core"
  return require(home + `/collections/items/modules/items/${module}/types/items/${key}/cls`)
}

global.PreCore = getClass("PreCore")
const {classes, instance} = PreCore
classes.CoreError = getClass("CoreError")
classes.Param = getClass("Param")
classes.Container = getClass("Container")
classes.Branch = getClass("Branch")
classes.Collection = getClass("Collection")
classes.Disc = getClass("Disc")
classes.NodeDisc = getClass("NodeDisc", "node")
classes.Service = getClass("Service")
classes.Disc = getClass("Disc")
classes.Workflow = getClass("Workflow")
classes.Core = getClass("Core")


process.on('uncaughtException', err => {
  console.log('UNCAUGHT:', err)
})
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})

process.title = "core"

try {
  const t0 = Date.now()
  const core = instance({
    type: "Core",
    key: "core",
    channels: {
      core: true,
      node: true,
    },
    disc: {
      type: "NodeDisc",
      home,
      sassPaths: [__dirname+"/disc/data/collections/items/modules/items/node/sass"]
    },
    items: {
      http: {
        type: "NodeHttpServer",
        home: __dirname + "/disc/data",  //+ "/collections/items/modules/items/editor/resources",
        mimes: {
          html: "text/html",
          js: "text/javascript",
          png: "image/png",
          jpg: "image/jpeg",
        }
      },
      webSocket: {
        type: "NodeWebSocketServer",
        useHttp: true,
      },
    }
  })

  const release = () => core.signal("release")
  process.on("SIGINT", release)
  process.on("SIGHUB", release)
  process.on("SIGQUIT", release)
  console.log("elapsed", Date.now() - t0)
  core.signal("start")

} catch (err) {
  const {CoreError} = PreCore.classes
  if (err instanceof CoreError === false) {
    err = new CoreError(err)
  }
  const {message, code, params, path, line, column, trace} = err
  console.log("@@@ error @@@", {message, code, params, path, line, column, trace})

}
//     const t0 = Date.now()

