'use strict'

const parseXML = require('xml2js').parseString

module.exports = (req, options) => {
  return new Promise((resolve, reject) => {
    let xml = '';
    req.on('data', chunk => xml += chunk.toString('utf-8'))
    .on('error', reject)
    .on('end', () => resolve(parseXML(xml, options, (err, res) => {
      if (err) throw err
      resolve(res)
    })))
  })
}
