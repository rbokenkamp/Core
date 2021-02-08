module.exports = class extends PreCore.classes.Branch {

  release(params) {

    if (this.stage === "run") {
      this.stop()
    }
    super.release()
  }

}
