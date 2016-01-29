UserChangeUsernane = React.createClass({
  changeUsername(e){
    e.preventDefault()
    let username = e.target.username.value
    check(username, String)
    if(Package['storyteller:accounts-server']){
      Meteor.call("accountChangeUsername", username, function(error, result){
        if(error){
          Materialize.toast("There has been an error!", 5000)
          console.log("error", error);
        }
        if(result === false){
          e.target.reset()
          //TODO test
          Materialize.toast("That username exists already.", 5000)
        } else {
          Materialize.toast("Username has been changed.", 4000)
        }
      });
    } else {
      Materialize.toast("There has been an error!", 5000)
      console.log("You are missing the storyteller:accounts-server package for this.")
    }
  },
  getContent(){
    return (<div className="section">
    <div className="row">
      <h5>Change Username</h5>
      <form method="post" className="col s12" ref="usernameForm" onSubmit={this.changeUsername}>
        <div className="input-field">
          <input type="text" name="username" value={Meteor.user().username} onChange={this.changeUsername}></input>
          <input type="submit" value="Change" className="btn waves-effect"></input>
        </div>
      </form>
    </div>
    </div>)
  },
  render(){
    return (Meteor.user() !== undefined) ? this.getContent() : <div>Loading...</div>
  }
})
