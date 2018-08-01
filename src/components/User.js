import React, { Component } from 'react';

class User extends Component {
	

	signIn(){
	  const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup( provider );
	}

	signOut(){
		this.props.firebase.auth().signOut();
	}

	componentDidMount(){
		this.props.firebase.auth().onAuthStateChanged( user => {
        this.props.setUser(user);
        });
	}

	render(){
		return(
			<section>
			    <div> {this.props.user ? this.props.user.displayName : 'Guest'}</div>
				<button className = "signIn" onClick = {this.signIn.bind(this)}>Sign In</button>
				<button className = "signOut" onClick = {this.signOut.bind(this)}>Sign Out</button>
			</section>
			)
	}
}

export default User;