var split   = require('split');
var through = require('through2');
var fs      = require('fs');
var os      = require('os');


function insertHosts(buffer, opts, hosts) {
  buffer.push(opts.startStr);
  hosts.forEach(function (host) {
    buffer.push(host.ip + ' ' + host.domains.join(' '));
  });
  buffer.push(opts.endStr);
}

function parse(id, fn, done) {
  var startStr = "#npm:etchosts:"+id+":start";
  var endStr   = "#npm:etchosts:"+id+":end";
  var opts = {
    startStr: startStr,
    endStr: endStr
  };

  var isStartRegEx = new RegExp(startStr);
  var isEndRegEx   = new RegExp(endStr);

  var foundStart = false;
  var foundEnd   = false;

  var readStream = fs.createReadStream(module.exports.HOSTS_PATH);
  var buffer = [];

  readStream
    .pipe(split())
    .pipe(through(function (data, enc, next) {
      var line = data.toString().trim();

      if (isStartRegEx.test(line)) {
        foundStart = true;
      }

      if (isEndRegEx.test(line)) {
        fn(buffer, opts);
        foundEnd = true;
      }

      if (
           !isStartRegEx.test(line)
        && !isEndRegEx.test(line)
        && (!foundStart && !foundEnd) 
      ) {
        buffer.push(data);
      }

      next();
    }));

  readStream.on('end', function (data) {
    if (!foundEnd) {
      fn(buffer, opts);
    }

    var out = buffer.join(os.EOL)
    fs.writeFile(module.exports.HOSTS_PATH, out, done);
  });
}

module.exports.HOSTS_PATH = "/etc/hosts";

module.exports.add = function (id, hosts, done) {
  parse(id, function(buffer, opts) {
    insertHosts(buffer, opts, hosts);
  }, done);
};

module.exports.remove = function (id, done) {
  parse(id, function(buffer, opts) {
    // Do nothing...
  }, done);
}

