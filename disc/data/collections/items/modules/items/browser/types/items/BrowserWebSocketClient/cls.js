module.exports = class extends PreCore.classes.Service {

  start() {
    const {protocol, host} = location,
        url = `${protocol === "http:" ? "ws" : "wss"}://${host}`,
        socket = this.socket = new WebSocket(url)

    socket.onopen = e => {
      console.log("connected")
//    socket.send()
    }

    socket.onmessage = e => {
      const {data} = e
      console.log("EVENT", data)
    }

    socket.onclose = e => {
      console.log("close")
    }

    socket.onerror = err => {
      alert(`[error] ${err.message}`);
    }

  }

  input(params) {

  }

  stop() {
    const {socket} = this
    if (socket !== undefined) {
      socket.close()
      delete this.socket
    }
  }

}
