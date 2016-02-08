UserChangePassword = React.createClass({
  getInitialState() {
        return {
            errors: {}
        }
  },

  changePassword(event){
    event.preventDefault()

    let oldPassword = event.target.old.value
    let newPassword = event.target.new.value
    let newPasswordConfirm = event.target.repeat.value

    check(oldPassword, String)
    check(newPassword, String)
    check(newPasswordConfirm, String)

    if(newPassword === newPasswordConfirm){
      Accounts.changePassword(oldPassword, newPassword, function(error){
        if(error !== undefined){
          Materialize.toast('Wrong old password.', 5000)
        } else {
          Materialize.toast('Password changed successfully!', 4000)
        }
      })
    } else {
      Materialize.toast('New password does not match!', 5000)
    }

    this.refs.passwordForm.reset()
  },
  getContent(){
    return (
      <form method="post" className="row" ref="passwordForm" onSubmit={this.changePassword}>
        <fieldset>
          <legend>Change password</legend>
            <div className="input-field col s12">
              <input type="password" name="old"></input>
              <label htmlFor="old">Current password</label>
            </div>
            <div className="input-field col s12">
              <input className="validate" type="password" name="new"></input>
              <label htmlFor="new">New password</label>
            </div>
            <div className="input-field col s12">
              <input className="validate" type="password" name="repeat"></input>
              <label htmlFor="repeat">Repeat new password</label>
            </div>
            <input className="btn waves-effect" value="Submit" type="submit"></input>
        </fieldset>
      </form>)
  },
  render(){
    return (Meteor.user() !== undefined) ? this.getContent() : <div>Loading...</div>
  }
})
