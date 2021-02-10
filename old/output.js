module.exports = {
  "collections": {
    "modules": {
      "items": {
        "core": {
          "types": {
            "items": {
              "Branch": {
                "cls": {
                  "cls": class Branch {

                    call(key, input) {
                      const {core, constructor} = this
                      const type = constructor.name
                      const types = core.types.items
                      const pipes = types[type].pipes.items
                      return pipes[key].handler({self: this, input})
                    }

                    superCall(key, input) {
                      const {core, constructor} = this
                      const type = constructor.name
                      const types = core.types.items
                      const extendType = types[type].extend.type
                      const pipes = types[extendType].pipes.items
                      return pipes[key].handler({self: this, input})

                    }
                  }
                },
                "metas": {
                  "items": {
                    "metas": {"item": {"type": "Meta"}, "type": "Collection"},
                    "pipes": {"item": {"type": "Pipe"}, "type": "Collection"}
                  }
                },
                "pipes": {
                  "items": {
                    "branch": {
                      "handler": ({disc, self, input}) => {
                        const {Branch} = disc.classes
                        const branch = new Branch()
                        Object.assign(branch, input)
                        return branch
                      }
                    }, "call": {
                      "handler": (self, {key, input}) => {
                        return self.data.pipes[key].handler(input)
                      }
                    }
                  }
                }
              },
              "Collection": {
                "metas": {
                  "items": {
                    "items": {"type": "Container"},
                    "pipes": {"item": {"type": "Pipe"}, "type": "Collection"}
                  }
                }
              },
              "Container": {},
              "Disc": {
                "extend": {"type": "Service"}, "pipes": {
                  "items": {
                    "instance": {
                      "handler": ({self, input}) => {
                        const classes = self.classes.items
                        const types = self.types.items
                        for (const key in types) {
                          if (key in classes) {
                            continue
                          }

                          const typeObj = types[key]
                          const pipes = "pipes" in typeObj ? typeObj.pipes : typeObj.pipes = {}
                          const extendType = typeObj.extend.type
                          const module = {}
                          eval(`module.exports = class ${key} extends classes.${extendType} {}`)
                          const cls = module.exports
                          classes[key] = cls
                          const extendObj = types[extendType]
                          pipes.items = Object.assign({}, extendObj.pipes.items, pipes.items)
                        }

                        const cls = classes[self.type]
                        const branch = new cls()
                        Object.assign(branch, self)
                        return branch
                      }
                    }, "precore": {
                      "handler": ({self, input}) => {
                        console.log("PRECORE")
                      }
                    }, "require": {
                      "handler": ({self, input}) => {
                        const module = {}
                        eval(input)
                        return module.exports
                      }
                    }, "scan": {
                      "handler": ({self, input}) => {
                        console.log("SCAN")
                      }
                    }, "transform": {
                      "handler": ({self, input}) => {
                        const {ext, buffer} = input
                        const {extensions, sassPaths} = this
                        const binary = extensions[ext]
                        if (binary === undefined) {
                          throw `Unknown extension ${ext}`
                        }

                        let value = binary ? buffer : buffer.toString()
                        if (ext === "js") {
                          const module = {}
                          eval(value)
                          value = module.exports
                        } else if (ext === "scss") {
                        }
                        return value
                      }
                    }
                  }
                }
              },
              "Handler": {},
              "List": {
                "cls": {
                  "cls": class List extends Array {

                    call(key, input) {
                      self.pipes.items.call.handler(this, {key, input})
                    }
                  }
                }
              },
              "Meta": {},
              "Module": {"metas": {"items": {"sass": {"type": "Container"}}}},
              "Output": {"extend": {"type": "Tree"}},
              "Pipe": {},
              "Service": {"extend": {"type": "Tree"}},
              "Tree": {"extend": {"type": "Branch"}},
              "Type": {},
              "Workflow": {}
            }
          }
        }, "editor": {"sass": {}, "types": {"items": {"Dashboard": {}, "Display": {}}}}, "node": {
          "types": {
            "items": {
              "NodeDisc": {
                "extend": {"module": "core", "type": "Disc"}, "pipes": {
                  "items": {
                    "exists": {"handler": ({self, input}) => fs.existsSync(self.home + input.path)}, "getTime": {
                      "handler": ({self, input}) => {
                        const stats = fs.statSync(self.home + input.path)
                        return floor(stats.mtimeMs)
                      }
                    }, "read": {
                      "handler": ({self, input}) => {
                        const {path} = input
                        const full = self.home + path
                        if (fs.existsSync(full) === false) {
                          return
                        }
                        const index = path.lastIndexOf(".")
                        if (index === -1) {
                          return fs.readdirSync(full).filter(item => item[0] !== ".")
                        }
                        return fs.readFileSync(full)
                      }
                    }, "scss": {
                      "handler": ({self, input}) => {
                        const options = {data: input, includePaths: self.sassPaths}
                        return sass.renderSync(options).css.toString("utf8")
                      }
                    }, "write": {
                      "handler": ({self, input}) => {
                        const {path, value} = input
                        const full = self.home + path
                        const index = path.lastIndexOf(".")
                        if (index === -1) {
                          return fs.mkdirSync(full)
                        }
                        fs.writeFileSync(full, value)
                      }
                    }
                  }
                }
              },
              "NodeOutput": {
                "extend": {"module": "core", "type": "Output"},
                "pipes": {"items": {"input": {"handler": (self, input) => console.log("output", input)}}}
              }
            }
          }
        }
      }
    }
  }
}
