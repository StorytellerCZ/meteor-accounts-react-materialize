Package.describe({
  name: 'storyteller:accounts-react-materialize',
  version: '0.1.4',
  // Brief, one-line summary of the package.
  summary: 'Front end for accounts login, registration and settings with react and Materialize.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/StorytellerCZ/meteor-accounts-react-materialize.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  deprecated: true
});

Package.onUse(function(api) {
  api.versionsFrom(['1.3', '2.3']);
  //mdg packages used
  api.use(['meteor', 'ecmascript', 'check', 'accounts-password']);

  //other packages in use
  api.use(['kadira:flow-router@2.12.1', 'storyteller:accounts-server@1.0.0']);

  //files
  api.addFiles(['components/Login.jsx', 'components/Register.jsx', 'components/Settings.jsx', 'components/ChangePassword.jsx', 'components/Email.jsx', 'components/ChangeUsername.jsx'], "client");

  //export the react classes
  api.export(['UserLogin', 'UserRegister', 'UserChangePassword', 'UserEmail', 'UserChangeUsernane', 'UserSettings']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('storyteller:accounts-react-materialize');
  api.addFiles('accounts-react-foundation-tests.js');
});
