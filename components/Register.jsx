UserRegister = React.createClass({
  getInitialState() {
        return {
            errors: {}
        }
  },
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
        FlowRouter.go("Dashboard");
      });
    } else {
      console.log("Passwords don't match.");
      Materialize.toast("Passwords don't match.", 4000)
    }
  },
  goToLogin(e){
    e.preventDefault();
    FlowRouter.go("Login");
  },

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2 l4 offset-l4 center-align">
            <h1>Register</h1>
            <form onSubmit={this.register}>
              <input type="text" name="username" placeholder="Your username" required></input>
              <input type="text" name="email" placeholder="Your e-mail" required></input>
              <input type="password" name="password" placeholder="Your password" required></input>
              <input type="password" name="password2" placeholder="Repeat your password" required></input>

              <div className="expanded button-group">
                <a className="btn" onClick={this.goToLogin}>Login</a>
                <input type="submit" value="Create account" className="btn"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
});
