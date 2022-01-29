const path = require('path')

const aliases = {
  '@': path.resolve(__dirname, './src')
}

module.exports = {
  webpack: {
    alias: aliases,
  }
}
