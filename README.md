A simple package with Materialize themed user components for React.

You can include them where you want and build the page according to your wishes.

NOT FOR PRODUCTION

For full functionality inclide `storyteller:accounts-server`

Components:
=====

<UserLogin />

<UserRegister />

<UserSettings />
Contains the following:
* <UserChangeUsernane />
* <UserEmail />
* <UserChangePassword />

Note:
=====
Login and registration are full page components

Some defaults:
=====
* After login and registration the components redirect to path named "Dashboard"
* The login and registration page need to be named "Login" and "Register" respectively for easy transition between those two forms.

Sample routes:
=====
```javascript
FlowRouter.route("/", {
  name: "Dashboard",
  action: function() {
    ReactLayout.render(MainLayout, {content: <Dashboard />});
  }
});

//user login
FlowRouter.route("/login", {
  name: "Login",
  action: function(){
    ReactLayout.render(MainLayout, {content: <UserLogin />});
  }
});

//user registration
FlowRouter.route("/register", {
  name: "Register",
  action: function(){
    ReactLayout.render(MainLayout, {content: <UserRegister />});
  }
});

//user settings
FlowRouter.route("/user/settings", {
  name: "user-settings",
  action: function(){
    ReactLayout.render(MainLayout, {content: <UserSettings />});
  }
});
```

TODO:
=====
* Popup (modal) + dropdown login form component
* Better error reporting on forms
* Tests
* Third-party OAuth logins, registration and merger of accounts
* Reset password flow
* Confirmation e-mail
* Easy way to edit defaults via settings file or something
* i18n
