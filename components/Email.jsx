UserEmail = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      emails: Meteor.user().emails
    }
  },
  getEmails(){
    if(Meteor.user() !== undefined){
      let emails = this.data.emails
      return emails.map((email) => {
        let verified = null
        if(email.verified){
          verified = (<i className="material-icons green-text">check</i>)
        } else {
          verified = (<div className="chip red darken-1"><a href="#!" onClick={this.sendVerification}>not verified</a></div>)
        }
        return (<li key={email.address} className="collection-item">{email.address} {verified}<div className="secondary-content"><a href="#!" onClick={this.removeEmail}><i id={email.address} className="material-icons">delete</i></a></div></li>)
      })
    } else {
      return <div>Loading...</div>
    }
  },
  removeEmail(e){
    e.preventDefault()
    //TODO figure out a better way that doesn't uses jquery
    email = e.target.id
    if(Package['storyteller:accounts-server']){
      Meteor.call("accountRemoveEmail", email, function(error, result){
        if(error || result === false){
          Materialize.toast("There has been an error.", 4000)
          console.log("error", error);
        }
        if(result !== false){
           Materialize.toast(email + " has been removed.", 4000)
        }
      });
    } else {
      Materialize.toast("There has been an error!", 5000)
      console.log("You are missing the storyteller:accounts-server package to remove emails.")
    }
  },
  addEmail(e){
    e.preventDefault()
    let email = e.target.email.value
    check(email, String)
    if(email.length > 6){
      if(Package['storyteller:accounts-server']){
        Meteor.call("accountAddEmail", email, function(error, result){
          if(error){
            Materialize.toast("There has been an error!", 5000)
            console.log("error", error);
          }
          if(result === false){
            Materialize.toast(email + " is already associated with another account.", 5000)
            e.target.reset()
          } else {
            Materialize.toast(email + " has been added.", 4000)
            e.target.reset()
          }
        });
      } else {
        Materialize.toast("There has been an error!", 5000)
        console.log("You are missing the storyteller:accounts-server package to add emails.")
      }
    } else {
      Materialize.toast("That is not a valid e-mail address!", 4000)
    }
  },
  sendVerification(e){
    e.preventDefault()
    if(Package['storyteller:accounts-server']){
      Materialize.toast("Verification e-mail has been send!", 4000)
    } else {
      Materialize.toast("There has been an error!", 5000)
      console.log("You are missing the storyteller:accounts-server package to send verification e-mails.")
    }
  },
  getContent(){
    return (<div className="section">
    <div className="row">
      <h5>E-mails</h5>
      <ul className="collection with-header">
        <li className="collection-header">E-mails associated with your account</li>
        {this.getEmails()}
      </ul>
      <form method="post" className="col s12" ref="emailForm" onSubmit={this.addEmail}>
        <div className="input-field">
          <input type="email" required name="email"></input>
          <label htmlFor="email">Add e-mail</label>
        </div>
        <input type="submit" className="btn waves-effect" value="Add"></input>
      </form>
    </div>
    </div>)
  },
  render(){
    return (Meteor.user() !== undefined) ? this.getContent() : <div>Loading...</div>
  }
})
