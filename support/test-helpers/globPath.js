export default (path) => {
  return `glob:${process.env.PLUGIN_BASEURL || 'http://localhost'}${path}*`
}
