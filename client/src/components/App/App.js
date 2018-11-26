import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import '../../styles/global.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="columns is-centered page">
          <header>
            {/* <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                
              </div>
              <div class="navbar-menu">
              
              </div>
            </nav> */}
          </header>

          <Route exact path='/' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
