import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/HeaderLogin.css';


class HeaderLogin extends Component {
  render() {
    return (
      <div className="HeaderLogin">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <h2>Login</h2>
        </header>
      </div>
    );
  }
}

export default HeaderLogin;