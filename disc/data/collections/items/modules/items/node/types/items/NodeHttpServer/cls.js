const fs = require("fs")
const http = require("http")
module.exports = class extends PreCore.classes.Service {

  start() {
    super.start()

    const {core} = PreCore,
        {port, mimes, home} = this

    const requestHandler = (request, response) => {
      const {url} = request
      const path = url === "/" || url.indexOf(".") === -1 ? "/index.html" : url
      const index = path.lastIndexOf(".")
      const ext = path.substr(index + 1)
      const mime = mimes[ext]
      // console.log("@@@", path)
      if (mime === undefined) {
        console.log("@@@ mime not found @@@", mime, ext)
        response.writeHead(404, {"content-type": "text/plain"})
        return response.end("not found")

      }

      const full = home + path
      console.log(full)
      const exists = fs.existsSync(full)
      if (exists) {
        const content = fs.readFileSync(full)
        response.writeHead(200, {"content-type": mime})
        return response.end(content)

      }
      console.log("@@@ 404 @@@", path)

      response.writeHead(404, {"content-type": "text/plain"})
      response.end("not found")
    }

    const server = this.server = http.createServer(requestHandler)

    server.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err)
      }

      console.log(`server is listening on ${port}`)
    })

    server.on("error", err => {
      console.log("ERROR", err)
    })


  }

  stop() {
    super.stop()

    const {server} = this
    if (server !== undefined) {
      server.close()
      delete this.server
    }
  }

}

/****
 additional mimes

 css: "text/css",
 svg: "image/svg+xml",
 woff2: "font/woff2",
 ico: "image/x-icon",
 json: "application/json",
 wrl: "model/vrml x-world/x-vrml application/x-cc3d",

 */
