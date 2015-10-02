'use strict'

const mocha = require('mocha')
  , coMocha = require('co-mocha')
  , chai    = require('chai')
  , expect  = chai.expect
  , koaXml  = require('../')

coMocha(mocha)

describe('IndexSpec', () => {

  const options = {}
  const methods = ['POST', 'PUT', 'PATCH', 'TRACE']
  const next = function* () {}

  describe('.skip', () => {

    it('should skip if content type is not xml', function* () {
      const koa = {is: () => false, request: {}}
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

    it('should skip if method is GET', function* () {
      const koa = {is: () => true, request: {}, method: 'GET'}
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

    it('should skip if method is DELETE', function* () {
      const koa = {is: () => true, request: {}, method: 'DELETE'}
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

  })

  methods.map(m => {

    describe.skip('.' + m, () => {

      const koa = {
          is: () => true
        , request: {}
        , method: 'POST'
      }

      it('should parse xml to json', function* () {
        const fn = koaXml(options)
        yield fn.call(koa, next)
        expect(koa.request.body).to.not.exist
      })
    })
  })

})
