const os = require('os')

window.ip = function () {
  const ifaces = os.networkInterfaces();
  const value = Object
    .keys(ifaces)
    .map(name => ifaces[name])
    .reduce((acc, arr) => [...acc, ...arr], [])
    .find(({family, internal}) => family === 'IPv4' && !internal) || {}
  return value.address || '0.0.0.0'
}