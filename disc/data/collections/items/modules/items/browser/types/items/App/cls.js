module.exports = class extends PreCore.classes.Service {

  create(params) {
    super.create(params)
    this.createStyle()
  }

  createStyle() {
    const {styles} = PreCore
    const {head} = document
    for (const key in styles) {
      const style = document.createElement("style")
      style.innerHTML = styles[key]
      head.appendChild(style)
    }
  }
}
