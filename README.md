# etchosts
Control `/etc/hosts` from javascript, will need permission to access `/etc/hosts`.

[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/etchosts.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/etchosts.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/etchosts/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#stable
[circleci]:  https://circleci.com/gh/orangemug/etchosts
[dm-prod]:   https://david-dm.org/orangemug/etchosts
[dm-dev]:    https://david-dm.org/orangemug/etchosts#info=devDependencies


## Install

    npm i git://github.com/orangemug/etchosts.git


## Usage
Add some `/etc/hosts` for an app

    etchosts.add("myapp", [
      {
        ip: "127.0.0.1",
        domains: ["app.dev"]
      }
    ], callback);

To remove it again use the same id

    etchosts.remove("myapp", callback);


## License
[MIT](LICENSE)
