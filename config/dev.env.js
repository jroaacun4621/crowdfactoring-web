'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENT_ID: '"XuULf_i31oATGH04Zx2-RTgfXQzQPU5v"',
  DOMAIN: '"syndication-web.auth0.com"',
  CALLBACK_URL: '"http://localhost:8080/callback"',
  HOST: '"localhost:8080"'
})
