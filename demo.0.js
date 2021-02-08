const home = __dirname + "/disc"
const requireHandler = require(`${home}/data/collection/modules/node/types/NodeDisc/pipes/require/handler`)
const pipes = {
  require: {
    handler: requireHandler,
  },
}

let self = {
  meta: {},
  data: {
    params: {
      home,
      extensions: {
        css: true,
        html: true,
      },
    },
    pipes,
  }

}
const Param = requireHandler(self, {path: "/data/classes/Param"})
self = new Param(self)

const handler = requireHandler(self, {path: `/data/collection/modules/core/types/Disc/pipes/handler/handler`})
pipes.handler = {
  handler,
}
pipes.scan = {
  handler: handler(self, {module: "core", type: "Disc", key: "scan"}),
}
pipes.read = {
  handler: handler(self, {module: "node", type: "NodeDisc", key: "read"}),
}

self.call("scan", {path: ""})
/*
pipes.log = {
  handler: handler(self, {module: "core", type: "Disc", key: "log"}),
}

self.call("log","hello")
*/

/*
const self = {home}
scan(self, "")

const http = require('http')
const port = 3000

const meta = {
  message: "Language",
}
const data = {
  message: "hello"
}


const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(data.message)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

const fs = require("fs")
fs.writeFileSync("./output.js", "module.exports = "+JSON.stringify(self))
*/
