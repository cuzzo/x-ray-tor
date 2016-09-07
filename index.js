var debug = require("debug")("x-ray:tor");
var tr = require("tor-request");

function driver(options) {
  options = options || {};
  var tor_host = options.torHost || "localhost",
      tor_port = options.torPort || 9050;

  tr.setTorAddress(tor_host, tor_port);

  if (options.torPassword) {
    tr.TorControlPort.password = options.torPortPassword;
  }

  return function tor_driver(ctx, fn) {
    tr.request(ctx.url, function(err, res, body) {
      if (err) return fn(err);
      ctx.status = res.statusCode;
      ctx.url = res.request.uri.Url.href;
      ctx.set(res.headers);
      ctx.body = body;
      return fn(null, ctx);
    });
  }
}

module.exports = driver;
