var assert   = require("assert");
var fs       = require("fs");
var tempfile = require('tempfile');
var etchosts = require("../");

var IN_FILE  = fs.readFileSync(__dirname+"/in.host").toString().trim();
var OUT_FILE = fs.readFileSync(__dirname+"/out.host").toString().trim();

describe('etchosts', function() {

  it('should add', function (done) {
    var filepath = tempfile('');
    fs.writeFileSync(filepath, IN_FILE);
    etchosts.HOSTS_PATH = filepath;

    etchosts.add("test1", [{
      ip: "127.0.0.1",
      domains: ["app.dev"]
    }], function() {
      setTimeout(function() {
      var output = fs.readFileSync(filepath).toString();
      assert.equal(output, OUT_FILE);
      done();
      }, 100);
    });
  });

  it('should remove', function () {
    var filepath = tempfile('');
    fs.writeFileSync(filepath, OUT_FILE);
    etchosts.HOSTS_PATH = filepath;

    etchosts.add("test2", [{
      ip: "127.0.0.1",
      domains: ["app.dev"]
    }], function() {
      var output = fs.readFileSync(filepath).toString();
      assert.equal(output, IN_FILE);
      done();
    });
  });
});
