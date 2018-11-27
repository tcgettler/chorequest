import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import MainPage from '../pages/MainPage/MainPage';
import actions from 'store/app/actions';
import App from './App';
import '../../styles/global.css';
import 'bulma/css/bulma.css';

const mapStateToProps = state => ({
  isLoggedIn: state.app.isLoggedIn,
  user: state.app.user,
  guild: state.app.guild,
});

const mapDispatchToProps = dispatch => ({
  handleChange: () => dispatch(actions.setUsername())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

class App extends Component {
  
  

  render() {
    const props = this.props;
    const {store} = props;
    const state = store.getState();
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
          <Route exact path='/mainpage' component={MainPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default  (App);
