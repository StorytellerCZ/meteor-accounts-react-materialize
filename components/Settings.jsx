UserSettings = React.createClass({
  changeAvatar(){
    if(Package['storyteller:profiles-react-materialize'] !== undefined){
      return(<UserChangeAvatar />)
    }
  },
  render(){
    return (<div className="container">
    <div className="row">
      <h1>Settings</h1>
      <div className="col s12">
        {this.changeAvatar()}
        <div className="divider"></div>
        <UserChangeUsernane />
        <div className="divider"></div>
        <UserEmail />
        <div className="divider"></div>
        <UserChangePassword />
        <div className="divider"></div>
      </div>
    </div>
    </div>)
  }
})
