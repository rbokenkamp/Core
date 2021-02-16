const fs = require("fs")
const http = require("http")
module.exports = class extends PreCore.classes.Service {

  start() {
    super.start()

    const {core} = PreCore,
        {port, mimes, home} = this

    const requestHandler = (request, response) => {
      const {url} = request
      const path = url === "/" || url.indexOf(".") === -1 ? "/landing.html" : url
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
      let content
      if (path === "/core.js") {
        content = this.getCoreContent()
      } else if (!fs.existsSync(full)) {
        console.log("@@@ 404 @@@", path)
        response.writeHead(404, {"content-type": "text/plain"})
        response.end("not found")
      } else {
        content = fs.readFileSync(full)
      }
      response.writeHead(200, {"content-type": mime})
      return response.end(content)
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

  getCoreContent() {
    const {types, sources} = PreCore
    let result = `const module = {}
`
    result += sources.PreCore
    result += `PreCore.templates = ${JSON.stringify(PreCore.templates)}
PreCore.styles = ${JSON.stringify(PreCore.styles)}
`

    const channels = {
      core: true,
      browser: true,
    }

    for (const key in types) {
      if (key === "PreCore") {
        continue
      }

      const {channel} = types[key]
      if (channel in channels) {
        const src = sources[key].replace("module.exports", `PreCore.classes.${key}`)
        result += "/".repeat(20) + "\n{\n" + src + "}\n"
      }
    }
    const obj = this.getDiscStructure()
    result += `
  //  localStorage.clear()
PreCore.classes.BrowserDisc.initialize("", ${JSON.stringify(obj)})
setTimeout(() => {
  PreCore.instance({
        type: "Core",
        key: "core",
        channels: {
          core: true,
          browser: true,
        },
        disc: {
          type: "BrowserDisc",
          home: "/local",
        },
        items: {
          app: {
            type: "App",
            items: {
              dashboard: {
                type: "Dashboard",
              }
            }
          },
          webSocket: {
            type: "BrowserWebSocketClient",
          }
        }
  })
  console.log(PreCore.core)
  PreCore.core.signal("start")
})
`

    return result
  }

  getDiscStructure() {
    const channels = {
      core: true,
      browser: true,
    }
    const local = {
      collections: {
        items: {
          modules: {
            item: {
              type: "Module",
            },
            items: {
              core: {
                types: {
                  items: {}
                }
              },
              browser: {
                types: {
                  items: {}
                }
              }
            },
          }
        }
      }
      //     items: {}
    }


    const modules = {
      core: local.collections.items.modules.items.core.types.items,
      browser: local.collections.items.modules.items.browser.types.items,
    }

    const {types, merge} = PreCore
    for (const key in types) {
      const typeObj = types[key],
          {channel} = typeObj
      if (!channels[channel]) {
        continue
      }

      const obj = Object.assign({}, typeObj)
      delete obj.id
      obj.cls = ""
      delete obj.parent
      obj.instance.items = Object.assign({}, obj.instance.items)
      obj.fixed.items = Object.assign({}, obj.fixed.items)
      obj.metas.items = Object.assign({}, obj.metas.items)

      delete obj.key
      delete obj.path
      delete obj.type
      delete obj.instance.id
      delete obj.instance.parent
      delete obj.fixed.id
      delete obj.fixed.parent
      delete obj.metas.id
      delete obj.metas.parent
      modules[channel][key] = obj
    }

    return local
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
