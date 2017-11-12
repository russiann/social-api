// Initializes the `users` service on path `/users`
const hooks = require('./users.hooks');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const { extendBase } = app.get('helpers');

  const options = {
    name: 'users',
    extend: 'base/users',
    disableParams: ['create', 'find'],
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users', extendBase(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);

};
