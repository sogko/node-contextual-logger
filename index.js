var util = require('util');
var EOL = require('os').EOL;
var pad = function (n){ return n<10 ? ['0',n].join('') : n; };
function Logger(prefix){
  if (!(this instanceof Logger)) { return new Logger(prefix); }
  this.prefix = prefix || '';
  this.log = function (){
    if (arguments instanceof Object){ arguments = Array.prototype.slice.call(arguments, 0);}
    var d = new Date();
    d = ['[',d.getUTCFullYear(),'-',pad(d.getUTCMonth()+1),'-',pad(d.getUTCDate()),'T',pad(d.getUTCHours()),':',pad(d.getUTCMinutes()),':',pad(d.getUTCSeconds()),'Z] ', this.prefix, ' ' ].join('');
    process.stdout.write(d);
    arguments.forEach(function(o){process.stdout.write(util.format(o)+' ');});
    process.stdout.write(EOL);
  }.bind(this);
  this.warn = this.error = this.log;
}
module.exports = Logger;