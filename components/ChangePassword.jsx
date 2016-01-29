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

  render(){
    return (<div className="section">
    <div className="row">
      <form method="post" className="col s12" ref="passwordForm" onSubmit={this.changePassword}>
          <h5>Change password</h5>
          <div className="input-field">
            <input type="password" name="old"></input>
            <label htmlFor="old">Current password</label>
          </div>
          <div className="input-field">
            <input type="password" name="new"></input>
            <label htmlFor="new">New password</label>
          </div>
          <div className="input-field">
            <input type="password" name="repeat"></input>
            <label htmlFor="repeat">Repeat new password</label>
          </div>
          <input className="btn waves-effect" value="Submit" type="submit"></input>
      </form>
    </div>
    </div>)
  }
})
