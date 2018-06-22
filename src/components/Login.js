import React, { Component } from 'react';
import HeaderLogin from './HeaderLogin.js'
import { Link } from "react-router-dom";
import './css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            
        };
    }
   
    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;

        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();

      }

    render() {
        var {email, password } = this.state;

        return (
            <div className="contain">
                <HeaderLogin/>
                <div className="form-inline">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="Email address" 
                            value={email} 
                            onChange={this.onChange} autoFocus/>
                            <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                            <input type="password" 
                            name="password"
                            placeholder="Password" 
                            value={password} 
                            onChange={this.onChange} />
                            <span className="help-block"></span>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-large"
                            type="submit"><Link to="/dashboard">Login</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login;