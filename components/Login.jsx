UserLogin = React.createClass({
  getInitialState() {
        return {
            errors: {}
        }
  },
  //login the user
  login(e){
    e.preventDefault()

    let email = e.target.email.value
    let password = e.target.password.value

    Meteor.loginWithPassword(email, password, function(error){
      if(error){
        console.log(error.reason)
        Materialize.toast(error.reason, 3000)
      } else {
        FlowRouter.go("Dashboard")
      }
    })
  },
  goToRegister(e){
    e.preventDefault();
    FlowRouter.go("Register");
  },

  //todo make the form elements modular
  //https://www.youtube.com/watch?v=kVbVBp35keQ ~28:00

  //todo make the logo something that can be set, so this package can be made public

  render(){
    return (<div className="row">
        <div className="col s12 m8 offset-m2 l4 offset-l4 center-align">
          <h1>Login</h1>
          <form onSubmit={this.login}>
            <div className="input-field">
              <input type="text" name="email" required />
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="input-field">
              <input type="password" name="password" required />
              <label htmlFor="email">Your password</label>
            </div>
            <div className="expanded button-group">
              <a className="btn waves-effect waves-teal" onClick={this.goToRegister}>Register</a>
              <input type="submit" value="Login" className="btn waves-effect waves-light"></input>
            </div>
          </form>
        </div>
      </div>)
  }
})
