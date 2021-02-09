const home = __dirname+"/disc/data"
const getClass = (key, module) => {
  module = module || "core"
  return require(home+`/collections/items/modules/items/${module}/types/items/${key}/cls`)
}

global.PreCore = getClass("PreCore")
const {classes} = PreCore
classes.CoreError = getClass("CoreError")
classes.Param = getClass("Param")
classes.Container = getClass("Container")
classes.Branch = getClass("Branch")
classes.Service  = getClass("Service")
classes.Disc  = getClass("Disc")
classes.NodeDisc = getClass("NodeDisc", "node")


process.on('uncaughtException', err => {
  console.log('UNCAUGHT:', err)
})
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
})

process.title = "core"

try {
  const t0 = Date.now()
  const core = classes.NodeDisc.build({
    type: "NodeDisc",
    key: "core",
    home,
  })

  const release = () => {
    core.signal("release")
    const x = 1
  }
  process.on("SIGINT", release)
  process.on("SIGHUB", release)
  process.on("SIGQUIT", release)

 // setInterval(() => undefined)
release()
  console.log("elapsed", Date.now()-t0)


} catch (err) {
  const {CoreError} = PreCore.classes
  if (err instanceof CoreError === false) {
    err = new CoreError(err)
  }
  const {message, code, params, path, line, column, trace} = err
  console.log("@@@ error @@@", {message, code, params, path, line, column, trace})

}
//     const t0 = Date.now()

