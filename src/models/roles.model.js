const { createEnum } = require('../helpers');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const RolePermissions = createEnum(app, 'RolePermissions', ['FeatureOne', 'FeatureTwo', 'FeatureThree']);
  const RoleActions = createEnum(app, 'RoleActions', ['Find', 'Get', 'Create', 'Update']);

  const schema = {

    name: { type: String, required: true },

    permissions: [{
      kind: { type: String, enum: RolePermissions },
      actions: [{ type: String, enum: RoleActions }]
    }]

  };

  const roles = new Schema(schema, { timestamps: true });
  return mongooseClient.model('roles', roles);
};
