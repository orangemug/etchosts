# etchosts
Control `/etc/hosts` from javascript, will need permission to access `/etc/hosts`.


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
MIT
