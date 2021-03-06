'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // if the name is suffixed with extension, remove the suffix
  // if the name is just the extension don't append/remove
  var extension = ".controller";
  if (this.name && this.name.toLowerCase() !== extension && this.name.substr(extension.length*-1).toLowerCase() === extension) {
    this.name = this.name.slice(0, extension.length*-1);
  }

  this.name = this.name + extension;
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.generateSourceAndTest(
    'controller',
    'spec/controller',
    'controllers',
    this.options['skip-add'] || false
  );
};
