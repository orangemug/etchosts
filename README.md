# etchosts
![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)

Control `/etc/hosts` from javascript, will need permission to access `/etc/hosts`.

[![circleci](https://circleci.com/gh/orangemug/etchosts.png?style=shield)](https://circleci.com/gh/orangemug/etchosts)
[![Dependency Status](https://david-dm.org/orangemug/etchosts.svg)](https://david-dm.org/orangemug/etchosts)
[![Dev Dependency Status](https://david-dm.org/orangemug/etchosts/dev-status.svg)](https://david-dm.org/orangemug/etchosts#info=devDependencies)


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
