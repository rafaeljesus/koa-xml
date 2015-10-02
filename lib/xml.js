'use strict'

const parseXML = require('xml2js').parseString

const fn = (req, options) => {
  return new Promise((resolve, reject) => {
    let chunk

    req.
      on('data', data => {
        parseXML(data, options, (err, res) => {
          if (err) throw err
          chunk = res
        })
      }).
      on('error', reject).
      on('end', () => resolve(chunk))
  })
}

module.exports = fn
