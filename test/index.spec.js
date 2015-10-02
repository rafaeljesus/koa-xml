'use strict'

const mocha = require('mocha')
  , coMocha = require('co-mocha')
  , chai    = require('chai')
  , expect  = chai.expect
  , koaXml  = require('../')

coMocha(mocha)

describe('IndexSpec', () => {

  let options = {}

  describe.skip('.skip', () => {

    const koa = {is: () => false}

    it('should skip if content type is not xml', function* () {
      yield koaXml.call(koa, options)
      expect(koa.request).to.not.exist
    })

  })

  describe('.PATCH', () => {
    it('should parse to json', () => {
    })
  })

})
