/**
 * @class component UserSettings
 * @classdesc Shows full settings page.
 */
UserSettings = React.createClass({
  changeAvatar(){/* not yet ready
    if(Package['storyteller:profiles-react-materialize']){
      return(<UserChangeAvatar />)
    }*/
  },
  /**
   * Checks that the package 'storyteller:profiles-react-materialize' is available and if yes it then fetches the appropriate components
   * @access private
   */
  addProfilesFields(){
    if(Package['storyteller:profiles-react-materialize']){
      return(<div>
        <UserChangeName />
        <UserChangeBio />
      </div>)
    }
  },
  /**
   * Renders the components for full settings page.
   * @access private
   */
  render(){
    return (<div className="container">
    <div className="row">
      <h1>Settings</h1>
      <div className="col s12">
        {this.changeAvatar()}
        <UserChangeUsernane />
        {this.addProfilesFields()}
        <UserEmail />
        <UserChangePassword />
      </div>
    </div>
    </div>)
  }
})
