## koa-xml
[![Node version](https://img.shields.io/node/v/latest-version.svg?style=flat-square)](https://npmjs.org/package/koa-xml)
[![NPM version](http://img.shields.io/npm/v/koa-xml.svg?style=flat-square)](https://www.npmjs.org/package/koa-xml)
[![Build Status](https://img.shields.io/travis/rafaeljesus/koa-xml/master.svg?style=flat-square)](https://travis-ci.org/rafaeljesus/koa-xml)
[![Code Climate](https://img.shields.io/codeclimate/github/rafaeljesus/koa-xml.svg?style=flat-square)](https://codeclimate.com/github/rafaeljesus/koa-xml)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/github/rafaeljesus/koa-xml.svg?style=flat-square)](https://codeclimate.com/github/rafaeljesus/koa-xml/coverage)
[![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/rafaeljesus/koa-xml/blob/master/LICENSE)


XML request body parser for koa

## Usage

```bash
npm install --save koa-xml
```

```js
const koa   = require('koa')
  , xml     = require('koa-xml')

const options = {
    normalize: true
  , firstCharLowerCase: true
  , explicitArray: false
  , ignoreAttrs: true
}

app.use(xml(options))
```

## Xml parse options
Uses [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) see all available [options] (https://github.com/Leonidas-from-XIV/node-xml2js#options)

Supported methods: `POST`, `PUT`, `PUT`, `PATCH`, and `TRACE`.

Supported `Content-Type`: `application/xml`

## Contributing
- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request

## Maintaners

* [Rafael Jesus](https://github.com/rafaeljesus)

## License
koa-xml is released under the [MIT License](http://www.opensource.org/licenses/MIT).
