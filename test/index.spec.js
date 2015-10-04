'use strict'

const mocha       = require('mocha')
  , coMocha       = require('co-mocha')
  , chai          = require('chai')
  , koa           = require('koa')
  , request       = require('supertest')
  , expect        = chai.expect
  , koaXml        = require('../')

coMocha(mocha)

describe('IndexSpec', () => {

  const options = {}
  const next = function* () {}

  describe('.skip', () => {

    let koa = Object.create(null)

    beforeEach(() => {
      koa = {is: () => false, request: {}}
    })

    it('should skip if content type is not xml', function* () {
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

    it('should skip if method is GET', function* () {
      koa.method = 'GET'
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

    it('should skip if method is DELETE', function* () {
      koa.method = 'DELETE'
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

  })

  describe('.POST', () => {

    it('should parse xml to json', done => {
      const app = koa()

      app.use(koaXml())
      app.use(function* () {
        expect(this.request.body).to.be.eql({name: 'foo'})
        this.status = 200
      })

      const server = app.listen()
        , xml = '<name>foo</name>'

      request(server).
        post('/').
        type('xml').
        send(xml).
        expect(200, done)
    })
  })

  describe('.PUT', () => {

    it('should parse xml to json', done => {
      const app = koa()

      app.use(koaXml())
      app.use(function* () {
        expect(this.request.body).to.be.eql({name: 'foo'})
        this.status = 200
      })

      const server = app.listen()
        , xml = '<name>foo</name>'

      request(server).
        put('/').
        type('xml').
        send(xml).
        expect(200, done)
    })
  })

})
