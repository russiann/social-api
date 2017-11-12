const users = require('./users/users.service.js');
const roles = require('./roles/roles.service.js');
module.exports = function () {
  const app = this;
  app.configure(users);
  app.configure(roles);
};
