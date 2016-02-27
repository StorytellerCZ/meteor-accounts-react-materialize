/**
 * @class component UserRegister
 * @classdesc User registration form.
 */
UserRegister = React.createClass({
  getInitialState() {
        return {
            errors: {}
        }
  },
  /**
   * Registers a new user in the system.
   * @access private
   * @param {event} e Submit event from form
   */
  register(e){
    e.preventDefault();
    //get the data
    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password2 = e.target.password2.value;

    //check that the passwords match
    if(password === password2)
    {
      check(username, String);
      check(email, String);
      check(password, String);

      //create the user
      Accounts.createUser({email: email, username: username, password: password}, function(error){
        /* TODO: figure out why we are getting "Content is required" error here even though the user gets created successfully
        if(error){
          console.log(error.reason);
          Materialize.toast(error.reason, 4000)
        } else {
          FlowRouter.go("Dashboard");
        }*/
        FlowRouter.go("dashboard");
      });
    } else {
      console.log("Passwords don't match.");
      Materialize.toast("Passwords don't match.", 4000)
    }
  },
  /**
   * Render the registration form.
   * @access private
   */
  render(){
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l4 offset-l4 center-align">
          <h1>Register</h1>
          <form onSubmit={this.register}>
            <div className="input-field">
              <input className="validate" type="text" name="username" required />
              <label htmlFor="username">Your username</label>
            </div>
            <div className="input-field">
              <input className="validate" type="email" name="email" required />
              <label htmlFor="email">Your e-mail</label>
            </div>
            <div className="input-field">
              <input className="validate" type="password" name="password" required />
              <label htmlFor="password">Your password</label>
            </div>
            <div className="input-field">
              <input className="validate" type="password" name="password2" required />
              <label htmlFor="password2">Repeat your password</label>
            </div>
            <div className="expanded button-group">
              <a href={FlowRouter.path("login")} className="btn">Login</a>
              <input type="submit" value="Create account" className="btn"></input>
            </div>
          </form>
        </div>
      </div>)
  }
});
