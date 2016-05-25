'use strict'

const mocha = require('mocha')
const coMocha = require('co-mocha')
const chai = require('chai')
const koa = require('koa')
const request = require('supertest')
const expect = chai.expect
const koaXml = require('../')

coMocha(mocha)

describe('IndexSpec', () => {
  describe('.mock', () => {
    const options = {}
    const next = function * () {}
    let koa = Object.create(null)

    beforeEach(() => {
      koa = {is: () => false, request: {}}
    })

    it('should skip if content type is not xml', function * () {
      const fn = koaXml(options)
      yield fn.call(koa, next)
      expect(koa.request.body).to.not.exist
    })

    describe('.GET', () => {
      it('should skip unsuported method', function * () {
        koa.method = 'GET'
        const fn = koaXml(options)
        yield fn.call(koa, next)
        expect(koa.request.body).to.not.exist
      })
    })

    describe('.DELETE', () => {
      it('should skip unsuported method', function * () {
        koa.method = 'DELETE'
        const fn = koaXml(options)
        yield fn.call(koa, next)
        expect(koa.request.body).to.not.exist
      })
    })
  })

  describe('.integration', () => {
    let server, xml

    beforeEach(() => {
      const app = koa()
      app.use(koaXml())
      app.use(function * () {
        expect(this.request.body).to.be.eql({name: 'foo'})
        this.status = 200
      })
      server = app.listen()
      xml = '<name>foo</name>'
    })

    describe('.POST', () => {
      it('should parse xml to json', done => {
        request(server)
          .post('/')
          .type('xml')
          .send(xml)
          .expect(200, done)
      })
    })

    describe('.PUT', () => {
      it('should parse xml to json', done => {
        request(server)
          .put('/')
          .type('xml')
          .send(xml)
          .expect(200, done)
      })
    })

    describe('.PATCH', () => {
      it('should parse xml to json', done => {
        request(server)
          .patch('/')
          .type('xml')
          .send(xml)
          .expect(200, done)
      })
    })

    describe('.TRACE', () => {
      it('should parse xml to json', done => {
        request(server)
          .trace('/')
          .type('xml')
          .send(xml)
          .expect(200, done)
      })
    })
  })
})
