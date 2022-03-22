const cors = require('cors')

function createCors(configs) {
  return cors(configs)
}

module.exports = {
  createCors,
}
