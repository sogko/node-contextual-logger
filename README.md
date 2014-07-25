node-contextual-logger
======================

Small and fast NodeJS logger with datetimestamp and prefixed context just because.

## Install
```
npm install contextual-logger
```
## Usage
Hold onto your socks now.
````
var logger = require('contextual-logger')().log;
var prefixedLogger = require('contextual-logger')('[PREFIX]').log;

var a = 'Hey girl.', b = { smooth: 'water' }

logger('Hello world.', a , b);
    //-> [2014-07-05T17:59:24Z] Hello world. Hey girl. { smooth: 'water' }
    
prefixedLogger('Hello world.', a , b);
    //-> [2014-07-05T17:59:24Z] [PREFIX] Hello world. Hey girl. { smooth: 'water' }

````
## References:
NodeJS implementation of console.log
- https://github.com/joyent/node/blob/master/lib/console.js#L52-L54

For padded datetime stamp
- http://stackoverflow.com/a/12550320/245196


## Credits
* [Hafiz Ismail](https://github.com/sogko) 

## Links
* Gisted at [https://gist.github.com/sogko/fcb7c1620850a362968c]
* [wehavefaces.net](http://wehavefaces.net)
* [twitter.com/sogko](https://twitter.com/sogko)
* [github.com/sogko](https://github.com/sogko)
* [medium.com/@sogko](https://medium.com/@sogko)

## License
Copyright (c) 2014 Hafiz Ismail. This software is licensed under the [MIT License](https://github.com/sogko/node-contextual-logger/raw/master/LICENSE).
