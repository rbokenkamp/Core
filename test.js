module.exports = {
  "type": "Core",
  "key": "core",
  "channels": {"core": true, "browser": true},
  "disc": {"type": "BrowserDisc", "home": "/local"},
  "collections": {
    "items": {
      "modules": {
        "item": {"type": "Module"}, "items": {
          "core": {
            "types": {
              "items": {
                "CoreError": {
                  "channel": "core",
                  "fixed": {"items": {}},
                  "instance": {"items": {}},
                  "metas": {"items": {}},
                  "key": "CoreError",
                  "path": "/collections/items/modules/items/core/types/items/CoreError",
                  "type": "Type"
                },
                "Param": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {"items": {"branch_required": "Branch ${path} must be set"}},
                        "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "key": "Param",
                  "path": "/collections/items/modules/items/core/types/items/Param",
                  "type": "Type"
                },
                "PreCore": {
                  "channel": "core",
                  "fixed": {"items": {}},
                  "instance": {"items": {}},
                  "metas": {"items": {}},
                  "key": "PreCore",
                  "path": "/collections/items/modules/items/core/types/items/PreCore",
                  "type": "Type"
                },
                "Rule": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "rule_invalid_type": "${path} is not a Rule"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Param",
                  "key": "Rule",
                  "path": "/collections/items/modules/items/core/types/items/Rule",
                  "type": "Type"
                },
                "Text": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "text_invalid_type": "${path} expects Text",
                            "text_rule_mismatch": "${path} data ${data} does not match rule ${rule}",
                            "text_too_large": "${path} length ${length} greater then maximum ${max}",
                            "text_too_small": "${path} length ${length} smaller then minimum ${min}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "length": {"type": "Integer"},
                      "max": {"type": "Integer"},
                      "min": {"type": "Integer"},
                      "rule": {"type": "Rule"}
                    }
                  },
                  "extend": "Param",
                  "key": "Text",
                  "path": "/collections/items/modules/items/core/types/items/Text",
                  "type": "Type"
                },
                "Token": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "text_invalid_type": "${path} expects Text",
                            "text_rule_mismatch": "${path} data ${data} does not match rule ${rule}",
                            "text_too_large": "${path} length ${length} greater then maximum ${max}",
                            "text_too_small": "${path} length ${length} smaller then minimum ${min}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "length": {"type": "Integer"},
                      "max": {"type": "Integer"},
                      "min": {"type": "Integer"},
                      "rule": {"type": "Rule"}
                    }
                  },
                  "extend": "Text",
                  "key": "Token",
                  "path": "/collections/items/modules/items/core/types/items/Token",
                  "type": "Type"
                },
                "Boolean": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "boolean_invalid_type": "${path} expects boolean"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Param",
                  "key": "Boolean",
                  "path": "/collections/items/modules/items/core/types/items/Boolean",
                  "type": "Type"
                },
                "Container": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Param",
                  "key": "Container",
                  "path": "/collections/items/modules/items/core/types/items/Container",
                  "type": "Type"
                },
                "Handler": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "errors": {"item": {"type": "Text"}, "type": "Collection"},
                      "isAsync": {"type": "Boolean"}
                    }
                  },
                  "kind": "Handler",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "errors": {"item": {"type": "Text"}, "type": "Collection"},
                      "isAsync": {"type": "Boolean"}
                    }
                  },
                  "extend": "Container",
                  "key": "Handler",
                  "path": "/collections/items/modules/items/core/types/items/Handler",
                  "type": "Type"
                },
                "Integer": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "integer_invalid_type": "${path} expects Integer (${data})",
                            "integer_too_large": "${path} ${data} greater then maximum ${max}",
                            "integer_too_small": "${path} ${data} smaller then minimum ${min}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Param",
                  "key": "Integer",
                  "path": "/collections/items/modules/items/core/types/items/Integer",
                  "type": "Type"
                },
                "Link": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {"items": {"branch_required": "Branch ${path} must be set"}},
                        "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Link",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Param",
                  "key": "Link",
                  "path": "/collections/items/modules/items/core/types/items/Link",
                  "type": "Type"
                },
                "List": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "list_invalid_type": "${path} expects list"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Param",
                  "key": "List",
                  "path": "/collections/items/modules/items/core/types/items/List",
                  "type": "Type"
                },
                "Meta": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {"items": {}},
                  "kind": "Param",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Container",
                  "key": "Meta",
                  "path": "/collections/items/modules/items/core/types/items/Meta",
                  "type": "Type"
                },
                "Branch": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Container",
                  "key": "Branch",
                  "path": "/collections/items/modules/items/core/types/items/Branch",
                  "type": "Type"
                },
                "Collection": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"},
                      "items": {"internal": true, "type": "Container"},
                      "setItem": {
                        "errors": {"items": {"instance_invalid_type": "${type} not an instance of ${baseType} for ${path}"}},
                        "type": "Handler"
                      }
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"}
                    }
                  },
                  "extend": "Branch",
                  "key": "Collection",
                  "path": "/collections/items/modules/items/core/types/items/Collection",
                  "type": "Type"
                },
                "Disc": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "home": {"type": "Text"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Branch",
                  "key": "Disc",
                  "path": "/collections/items/modules/items/core/types/items/Disc",
                  "type": "Type"
                },
                "Module": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "resources": {"type": "Container"},
                      "sass": {"type": "Container"},
                      "types": {"item": {"type": "Type"}, "type": "Collection"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Branch",
                  "key": "Module",
                  "path": "/collections/items/modules/items/core/types/items/Module",
                  "type": "Type"
                },
                "Service": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"},
                      "items": {"internal": true, "type": "Container"},
                      "setItem": {
                        "errors": {"items": {"instance_invalid_type": "${type} not an instance of ${baseType} for ${path}"}},
                        "type": "Handler"
                      }
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"}
                    }
                  },
                  "extend": "Collection",
                  "item": {"type": "Branch"},
                  "key": "Service",
                  "path": "/collections/items/modules/items/core/types/items/Service",
                  "type": "Type"
                },
                "Type": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "cls": {"type": "Text"},
                      "extend": {"type": "Text"},
                      "fixed": {"item": {"type": "Meta"}, "type": "Collection"},
                      "instance": {"item": {"type": "Meta"}, "type": "Collection"},
                      "item": {"type": "Meta"},
                      "kind": {"type": "Text"},
                      "metas": {"item": {"type": "Meta"}, "type": "Collection"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Branch",
                  "key": "Type",
                  "path": "/collections/items/modules/items/core/types/items/Type",
                  "type": "Type"
                },
                "Workflow": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"},
                      "items": {"internal": true, "type": "Container"},
                      "setItem": {
                        "errors": {"items": {"instance_invalid_type": "${type} not an instance of ${baseType} for ${path}"}},
                        "type": "Handler"
                      }
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"}
                    }
                  },
                  "extend": "Service",
                  "item": {"type": "Branch"},
                  "key": "Workflow",
                  "path": "/collections/items/modules/items/core/types/items/Workflow",
                  "type": "Type"
                },
                "LocalBuilder": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Branch",
                  "key": "LocalBuilder",
                  "path": "/collections/items/modules/items/node/types/items/LocalBuilder",
                  "type": "Type"
                },
                "Core": {
                  "channel": "core",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"},
                      "items": {"internal": true, "type": "Container"},
                      "setItem": {
                        "errors": {"items": {"instance_invalid_type": "${type} not an instance of ${baseType} for ${path}"}},
                        "type": "Handler"
                      },
                      "channels": {"type": "Container"},
                      "collections": {"item": {"type": "Collection"}, "type": "Collection"},
                      "disc": {"type": "Disc"},
                      "guid": {"storable": true, "type": "Token"},
                      "index": {"storable": true, "type": "Integer"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"}
                    }
                  },
                  "extend": "Workflow",
                  "item": {"type": "Branch"},
                  "key": "Core",
                  "path": "/collections/items/modules/items/core/types/items/Core",
                  "type": "Type"
                }
              }
            }
          }, "browser": {
            "types": {
              "items": {
                "BrowserDisc": {
                  "channel": "browser",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "home": {"type": "Text"},
                      "sessionOnly": {"type": "Boolean"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Disc",
                  "key": "BrowserDisc",
                  "path": "/collections/items/modules/items/browser/types/items/BrowserDisc",
                  "type": "Type"
                }, "BrowserWebSocketClient": {
                  "channel": "browser",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"},
                      "items": {"internal": true, "type": "Container"},
                      "setItem": {
                        "errors": {"items": {"instance_invalid_type": "${type} not an instance of ${baseType} for ${path}"}},
                        "type": "Handler"
                      }
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"},
                      "item": {"type": "Meta"}
                    }
                  },
                  "extend": "Service",
                  "item": {"type": "Branch"},
                  "key": "BrowserWebSocketClient",
                  "path": "/collections/items/modules/items/browser/types/items/BrowserWebSocketClient",
                  "type": "Type"
                }, "Display": {
                  "channel": "browser",
                  "fixed": {
                    "items": {
                      "validate": {
                        "errors": {
                          "items": {
                            "branch_required": "Branch ${path} must be set",
                            "container_invalid_type": "${path} expects container",
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      }
                    }
                  },
                  "instance": {
                    "items": {
                      "channel": {"type": "Text"},
                      "construct": {
                        "errors": {
                          "items": {
                            "branch_unknown_param": "Branch ${path} does not exist",
                            "type_not_exists": "Type ${type} does not exist for ${path}"
                          }
                        }, "type": "Handler"
                      },
                      "getError": {
                        "errors": {"items": {"error_not_exists": "Error ${name} does not exist for ${path}"}},
                        "type": "Handler"
                      },
                      "id": {"storable": true, "type": "Integer"},
                      "key": {"required": true, "type": "Text"},
                      "parent": {"type": "Link"},
                      "path": {"required": true, "type": "Text"},
                      "stage": {"internal": true, "required": true, "type": "Text"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "kind": "Branch",
                  "metas": {
                    "items": {
                      "defaultValue": {"type": "Param"},
                      "internal": {"type": "Boolean"},
                      "required": {"type": "Boolean"},
                      "storable": {"type": "Boolean"},
                      "type": {"required": true, "type": "Text"}
                    }
                  },
                  "extend": "Branch",
                  "key": "Display",
                  "path": "/collections/items/modules/items/browser/types/items/Display",
                  "type": "Type"
                }
              }
            }
          }
        }
      }
    }
  }
}
