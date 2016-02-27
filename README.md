[![Code Climate](https://codeclimate.com/github/StorytellerCZ/meteor-accounts-react-materialize/badges/gpa.svg)](https://codeclimate.com/github/StorytellerCZ/meteor-accounts-react-materialize)[![Test Coverage](https://codeclimate.com/github/StorytellerCZ/meteor-accounts-react-materialize/badges/coverage.svg)](https://codeclimate.com/github/StorytellerCZ/meteor-accounts-react-materialize/coverage)[![Issue Count](https://codeclimate.com/github/StorytellerCZ/meteor-accounts-react-materialize/badges/issue_count.svg)](https://codeclimate.com/github/StorytellerCZ/meteor-accounts-react-materialize)

# accounts-react-materialize

A simple package with Materialize themed user components for React.

You can include them where you want and build the page according to your wishes.
You can add any Materialize package you like.
There is no constraint on that in this package.

**NOT FOR PRODUCTION**

For full functionality include `storyteller:accounts-server`

## Components

`<UserLogin />`

`<UserRegister />`

`<UserSettings />`

Contains the following:

*   `<UserChangeUsernane />`
*   `<UserEmail />`
*   `<UserChangePassword />`

### Note

Login and registration are full page components

## Some defaults

*   After login and registration user is redirected to path named "dashboard"
*   The login and registration paths need to be named "login" and "register"

## Sample routes

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

## TODO

*   Popup (modal) + dropdown login form component
*   Better error reporting on forms
*   Tests
*   Third-party OAuth logins, registration and merger of accounts
*   Reset password flow
*   Confirmation e-mail
*   Easy way to edit defaults via settings file or something
*   i18n
