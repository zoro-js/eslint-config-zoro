'use strict'

let config = module.exports = require('eslint-config-standard')

config.env = config.env || {}
Object.assign(config.env, {
  // es6 & node were set by eslint-config-standard
  // es6: true,
  // node: true,
  browser: true,
  amd: true,
  commonjs: true,
  jasmine: true,
  mocha: true
})

config.globals = config.globals || {}
Object.assign(config.globals, {
  $: false,
  _: false,
  Regular: false,
  restate: false,
  RegularStrap: false
})

config.parser = 'babel-eslint'

config.plugins = config.plugins || []
config.plugins.push('babel')

config.rules = config.rules || {}
Object.assign(config.rules, {
  'generator-star-spacing': 0,
  'babel/generator-star-spacing': 1,
  'babel/new-cap': 1,
  'babel/array-bracket-spacing': 1,
  'babel/object-curly-spacing': 1,
  'babel/object-shorthand': 1,
  'arrow-parens': 0,
  'babel/arrow-parens': [
    1,
    'as-needed'
  ],
  'babel/no-await-in-loop': 1,
  'babel/flow-object-type': 1,
  'babel/func-params-comma-dangle': 1
})
