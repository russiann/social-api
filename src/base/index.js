const users = require('./users/users.service.js');

module.exports = function () {
  const app = this;
  app.configure(users);
};
