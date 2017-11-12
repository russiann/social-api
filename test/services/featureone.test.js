const assert = require('assert');
const app = require('../../src/app');

describe('\'featureone\' service', () => {
  it('registered the service', () => {
    const service = app.service('featureone');

    assert.ok(service, 'Registered the service');
  });
});
