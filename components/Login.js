import React, { Component } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";

class Login extends Component {

    handleSubmit = event => {
        event.preventDefault();
        console.log('button pressed');
    
    }

    render() {
        return (
            <form>
                Email: <input type="text" placeholder="email"></input>
                Password: <input type="text" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;