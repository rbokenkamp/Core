const WebSocket = require("ws")

module.exports = class extends PreCore.classes.Service {

  start() {
    super.start()

    const {port, useHttp} = this

    if (useHttp) {
      const server = PreCore.core.get("branches/items/http/server")
      this.server = new WebSocket.Server({server})
    } else {
      this.server = new WebSocket.Server({port})

    }

    const {server} = this
    server.on("connection", socket => {
      console.log("connected")
      socket.on("close", e => {
        console.log("close")
      })
    })
  }

  input(params) {
    const {clients} = this.server
    for (const socket of clients) {
      if (socket.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(params))
      }
    }
  }

  stop() {
    super.stop()
    const {server, useHttp} = this
    if (this.useHttp !== true && server) {
      server.close()
      delete this.server()
    }
  }

}

/*
this.server.clients.forEach(socket => {
  if (socket.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify(params))
  }
})
 */

