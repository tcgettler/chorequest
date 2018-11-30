import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import MainPage from '../pages/MainPage/MainPage';
import {SET_IS_LOGGED_IN} from "../../store/app/actions.js";
import '../../styles/global.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
          <div className="columns">
          
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/signup' component={SignupPage} />
            
            <Route exact path='/mainpage' component={MainPage} />
          
            
          </div>
      
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.app.user,
      guild: state.app.guild 
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({SET_IS_LOGGED_IN}, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(App);