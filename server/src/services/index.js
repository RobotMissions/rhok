'use strict';
const authentication = require('./authentication');
const user = require('./user');
const commands = require('./commands');

module.exports = function() {
  const app = this;
  
  
  app.configure(authentication);
  app.configure(user);
  app.configure(commands);
};
