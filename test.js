const echo = () => {
  throw new Error("hello")
}

try {
  eval(`echo()`)
}
catch(err) {
  console.log(err.stack)
}
