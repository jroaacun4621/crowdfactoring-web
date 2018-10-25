'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '',
  CLIENT_ID: '"' + process.env.CLIENT_ID + '"',
  DOMAIN: '"' + process.env.DOMAIN + '"',
  CALLBACK_URL: '"' + process.env.CALLBACK_URL + '"',
  HOST: '"' + process.env.HOST + '"'
})
