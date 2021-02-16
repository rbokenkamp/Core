module.exports = class extends PreCore.classes.Service {

  construct(params) {
    super.construct(params)
    const {type} = this,
        template= PreCore.templates[type]

    if (template!== undefined) {
      document.body.innerHTML = template
    }
  }
}
