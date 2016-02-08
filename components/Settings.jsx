UserSettings = React.createClass({
  changeAvatar(){/* not yet ready
    if(Package['storyteller:profiles-react-materialize']){
      return(<UserChangeAvatar />)
    }*/
  },
  addProfilesFields(){
    if(Package['storyteller:profiles-react-materialize']){
      return(<div>
        <UserChangeName />
        <UserChangeBio />
      </div>)
    }
  },
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
