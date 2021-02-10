module.exports = class extends PreCore.classes.Branch {


  start() {
    this.stage = "run"
    console.log("START", this.path, this.type)
  }

  stop() {
    console.log("STOP", this.path, this.type)
  }

  release(params) {
    console.log("RELEASE", this.stage)
    if (this.stage === "run") {
      this.stop()
    }
    super.release()
  }

}
