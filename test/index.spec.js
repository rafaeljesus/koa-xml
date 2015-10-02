'use strict'

const mocha = require('mocha')
  , coMocha = require('co-mocha')
  , chai    = require('chai')
  , expect  = chai.expect
  , koaXml  = require('../')

coMocha(mocha)

describe('IndexSpec', () => {

  let options = {}

  describe('.skip', () => {

    const koa = {is: () => false}
    const next = function* () {}

    it('should skip if content type is not xml', function* () {
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request).to.not.exist
    })

  })

  describe.skip('.PATCH', () => {
    it('should parse to json', () => {
    })
  })

})
