'use strict'

const parse = require('./lib/xml')

module.exports = (options) => {
  return function * (next) {
    const ctx = this
    if (ctx.is('xml')) {
      switch (ctx.method) {
        case 'POST':
        case 'PUT':
        case 'PATCH':
        case 'TRACE':
        ctx.request.body = yield parse(ctx.req, options)
        break
      }
    }
    yield next
  }
}
