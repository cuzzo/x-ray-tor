x-ray-tor
=========

[Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network)) driver for [x-ray](https://github.com/lapwinglabs/x-ray).

Crawl anonymously.

Usage
-----

x-ray-tor has one usage: to interact use the Tor network to make x-ray requests.

Dependencies
------------

* [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network))
* [node.js](http://nodejs.org/)
* [npm](https://www.npmjs.org/)
* [x-ray](https://github.com/lapwinglabs/x-ray)
* [tor-request](https://github.com/talmobi/tor-request)

Installation
------------

```bash
npm install x-ray-tor
```

Example
-------

```js
var Xtor = require('x-ray-tor');
var Xray = require('x-ray');

var x = Xray()
  .driver(Xtor());

x('http://google.com', 'title')(function(err, str) {
  if (err) return done(err);
  assert.equal('Google', str);
  done();
})
```

API
---

### tor(options)

Initialize the Tor driver with `options`.

```js
var x = Xray()
  .driver(Xtor({
    torHost: "my-tor-ip-address",
    torPort: "my-tor-port",
    torPassword: "my-tor-password"
  });
```

License
-------

x-ray-tor is free--as in BSD. Hack your heart out, hackers.

* NOTE: x-ray itself is licensed MIT.
