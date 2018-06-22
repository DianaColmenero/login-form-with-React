import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js'
import Dashboard from './Dashboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Dashboard} path="/dashboard" />
        </Switch>
          
        </div>
      </div>
    );
  }
}

export default App;
