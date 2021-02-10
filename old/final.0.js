const home = __dirname + "/disc",
    requirePipe = (module, type, key) =>
        require(home + `/data/collections/modules/items/${module}/types/items/${type}/pipes/items/${key}/handler`),
    instance = requirePipe("core", "Disc", "instance")

const core = instance({
  key: "core",
  type: "NodeDisc",
  home,
  paths: {},
  classes: {
    items: {
      Branch: require(home + "/data/collections/modules/items/core/types/items/Branch/cls/cls"),
    }
  },
  types: {
    items: {
      Branch: {
        pipes: {
          items: {
            call: {
              handler: requirePipe("core", "Branch", "call")
            },
          }
        }
      },
      Tree: {
        extend: {
          type: "Branch",
        },
        pipes: {
          items: {
            get: {
              handler: requirePipe("core", "Tree", "get")
            },
            _set: {
              handler: requirePipe("core", "Tree", "_set")
            },
            merge: {
              handler: requirePipe("core", "Tree", "merge")
            }
          }
        }
      },
      Service: {
        extend: {
          type: "Tree",
        }
      },
      Disc: {
        extend: {
          type: "Service",
        },
        pipes: {
          items: {
            build: {
              handler: requirePipe("core", "Disc", "build")
            },
            source: {
              handler: requirePipe("core", "Disc", "source")
            },
            require: {
              handler: requirePipe("core", "Disc", "require")
            }
          }
        }
      },
      NodeDisc: {
        extend: {
          type: "Disc",
        },
        pipes: {
          items: {
            read: {
              handler: requirePipe("node", "NodeDisc", "read")
            },
          }
        }
      }
    }
  }

})

core.core = core
core.call("build")

const x = 1
