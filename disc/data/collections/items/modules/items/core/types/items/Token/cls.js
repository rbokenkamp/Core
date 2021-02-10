const tokenMap = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    {floor, random} = Math

const Token = module.exports = class extends PreCore.classes.Text {

  static validate(instance, path, meta, data) {
    data = super.validate(instance, path, meta, data)

    if (data === undefined) {
      return Token.generate(meta.length)
    }
    return data
  }

  static generate(length) {
    length = length || 22
    let token = ""
    let i
    for (i = 0; i < length; i++) {
      token += tokenMap[floor(random() * 62)]
    }
    return token
  }

}
