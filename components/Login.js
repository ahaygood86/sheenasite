import React, { Component } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";

class Login extends Component {

    state = {
        email: "",
        password: ""
    };

    handleEmailChange = e => {
        this.setState({email: e.target.value})
    }

    handlePasswordChange = e => {
        this.setState({password: e.target.value})
    }

    handleSubmit = e => {    
        console.log(this.state.email, this.state.password);
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }

    handleLogout = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("We are signed out")
          }).catch(function(error) {
            // An error happened.
            console.log("We are not signed out")
          });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Email: <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    Password: <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <button type="submit">Login</button>
                </form>
                <button type="button" onClick={this.handleLogout}>Log Out</button>`
            </div>
        );
    }
}

export default Login;